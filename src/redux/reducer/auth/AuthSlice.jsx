import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AUTH_ENDPOINTS, USER_ENDPOINTS } from '../../../utils/ApiUrl';

const initialState = {
    user: JSON.parse(localStorage.getItem('userData')) || null,
    token: localStorage.getItem('userToken') || null,
    allUsers: [], // Admin ke liye users list
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
    otpSent: false,
};

// Error Handler Helper
const getErrorMessage = (error) => error.response?.data?.message || error.message || "Something went wrong";

// --- AUTH THUNKS ---

export const registerUser = createAsyncThunk('auth/register', async (userData, { rejectWithValue }) => {
    try {
        const res = await axios.post(AUTH_ENDPOINTS.REGISTER, userData);
        return res.data;
    } catch (err) { return rejectWithValue(getErrorMessage(err)); }
});

export const verifyOTP = createAsyncThunk('auth/verifyOTP', async (otpData, { rejectWithValue }) => {
    try {
        const res = await axios.post(AUTH_ENDPOINTS.VERIFY_OTP, otpData);
        return res.data;
    } catch (err) { return rejectWithValue(getErrorMessage(err)); }
});

export const loginUser = createAsyncThunk('auth/login', async (userData, { rejectWithValue }) => {
    try {
        const res = await axios.post(AUTH_ENDPOINTS.LOGIN, userData);
        if (res.data.token) {
            localStorage.setItem('userToken', res.data.token);
            localStorage.setItem('userData', JSON.stringify(res.data.user));
        }
        return res.data;
    } catch (err) { return rejectWithValue(getErrorMessage(err)); }
});

export const forgotPassword = createAsyncThunk('auth/forgotPassword', async (email, { rejectWithValue }) => {
    try {
        const res = await axios.post(AUTH_ENDPOINTS.FORGOT_PASSWORD, { email });
        return res.data;
    } catch (err) { return rejectWithValue(getErrorMessage(err)); }
});

export const getProfile = createAsyncThunk('auth/getProfile', async (_, { getState, rejectWithValue }) => {
    try {
        const { token } = getState().auth;
        const config = { headers: { Authorization: `Bearer ${token}` } };
        const res = await axios.get(USER_ENDPOINTS.GET_PROFILE, config);

        // LocalStorage update karein taake stats refresh ho jayein
        localStorage.setItem('userData', JSON.stringify(res.data));
        return res.data;
    } catch (err) { return rejectWithValue(getErrorMessage(err)); }
});


export const resetPassword = createAsyncThunk('auth/resetPassword', async (data, { rejectWithValue }) => {
    try {
        const res = await axios.post(AUTH_ENDPOINTS.RESET_PASSWORD, data);
        return res.data;
    } catch (err) { return rejectWithValue(getErrorMessage(err)); }
});

// --- USER & ADMIN THUNKS ---

export const updateProfile = createAsyncThunk('auth/updateProfile', async (profileData, { getState, rejectWithValue }) => {
    try {
        const { token } = getState().auth;
        const config = { headers: { Authorization: `Bearer ${token}` } };
        const res = await axios.put(USER_ENDPOINTS.UPDATE_PROFILE, profileData, config);
        localStorage.setItem('userData', JSON.stringify(res.data));
        return res.data;
    } catch (err) { return rejectWithValue(getErrorMessage(err)); }
});

export const fetchAllUsers = createAsyncThunk('auth/fetchAllUsers', async (_, { getState, rejectWithValue }) => {
    try {
        const { token } = getState().auth;
        const config = { headers: { Authorization: `Bearer ${token}` } };
        const res = await axios.get(USER_ENDPOINTS.ALL_USERS, config);
        return res.data;
    } catch (err) { return rejectWithValue(getErrorMessage(err)); }
});

export const approveTeacherAction = createAsyncThunk('auth/approveTeacher', async (teacherId, { getState, rejectWithValue }) => {
    try {
        const { token } = getState().auth;
        const config = { headers: { Authorization: `Bearer ${token}` } };
        const res = await axios.put(`${USER_ENDPOINTS.APPROVE_TEACHER}/${teacherId}`, {}, config);
        return { teacherId, message: res.data.message };
    } catch (err) { return rejectWithValue(getErrorMessage(err)); }
});

export const logout = createAsyncThunk('auth/logout', async (_, { getState }) => {
    try {
        const { token } = getState().auth;
        if (token) {
            const config = { headers: { Authorization: `Bearer ${token}` } };
            await axios.post(AUTH_ENDPOINTS.LOGOUT, {}, config);
        }
    } catch (err) { console.error(err.message); }
    finally {
        localStorage.removeItem('userToken');
        localStorage.removeItem('userData');
    }
});

// --- SLICE ---

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = '';
        }
    },
    extraReducers: (builder) => {
        builder
            // Pending states
            .addCase(registerUser.pending, (state) => { state.isLoading = true; })
            .addCase(loginUser.pending, (state) => { state.isLoading = true; })

            // Fulfilled states
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.otpSent = true;
                state.message = action.payload.message;
            })
            .addCase(getProfile.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload; // Naya data yahan update hoga
            })

            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(forgotPassword.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.message = action.payload.message;
            })
            .addCase(resetPassword.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.message = action.payload.message;
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.allUsers = action.payload;
            })
            .addCase(approveTeacherAction.fulfilled, (state, action) => {
                const index = state.allUsers.findIndex(u => u._id === action.payload.teacherId);
                if (index !== -1) {
                    state.allUsers[index].isApproved = true;
                }
                state.message = action.payload.message;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
                state.token = null;
                state.allUsers = [];
                state.isSuccess = false;
            })

            // Rejected states
            .addMatcher(
                (action) => action.type.endsWith('/rejected'),
                (state, action) => {
                    state.isLoading = false;
                    state.isError = true;
                    state.message = action.payload;
                }
            );
    }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;