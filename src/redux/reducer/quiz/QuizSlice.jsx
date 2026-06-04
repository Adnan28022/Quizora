import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { QUIZ_ENDPOINTS } from '../../../utils/ApiUrl';

const getErrorMessage = (error) => error.response?.data?.message || error.message || "Something went wrong";

// 1. Teacher: Create Quiz
export const createQuiz = createAsyncThunk('quiz/create', async (data, { getState, rejectWithValue }) => {
    try {
        const config = { headers: { Authorization: `Bearer ${getState().auth.token}` } };
        const res = await axios.post(QUIZ_ENDPOINTS.CREATE, data, config);
        return res.data;
    } catch (err) { return rejectWithValue(getErrorMessage(err)); }
});

// 2. Teacher: My Quizzes
export const fetchMyQuizzes = createAsyncThunk('quiz/fetchMy', async (_, { getState, rejectWithValue }) => {
    try {
        const config = { headers: { Authorization: `Bearer ${getState().auth.token}` } };
        const res = await axios.get(QUIZ_ENDPOINTS.MY_QUIZZES, config);
        return res.data;
    } catch (err) { return rejectWithValue(getErrorMessage(err)); }
});

// 3. Student: Available Quizzes (Approved only)
export const fetchAvailableQuizzes = createAsyncThunk('quiz/available', async (filters, { getState, rejectWithValue }) => {
    try {
        const config = { headers: { Authorization: `Bearer ${getState().auth.token}` } };
        const res = await axios.get(QUIZ_ENDPOINTS.AVAILABLE, { ...config, params: filters });
        return res.data;
    } catch (err) { return rejectWithValue(getErrorMessage(err)); }
});

// 4. Admin: Fetch ALL Quizzes (ZAROORI: Sirf ek baar declare karein)
export const fetchAllQuizzesAdmin = createAsyncThunk('quiz/fetchAllAdmin', async (_, { getState, rejectWithValue }) => {
    try {
        const config = { headers: { Authorization: `Bearer ${getState().auth.token}` } };
        const res = await axios.get(QUIZ_ENDPOINTS.ALL_QUIZZES, config);
        return res.data;
    } catch (err) { return rejectWithValue(getErrorMessage(err)); }
});

// 5. Student: Submit Quiz Result
export const submitQuizResult = createAsyncThunk('quiz/submit', async (resultData, { getState, rejectWithValue }) => {
    try {
        const config = { headers: { Authorization: `Bearer ${getState().auth.token}` } };
        const res = await axios.post(QUIZ_ENDPOINTS.SUBMIT, resultData, config);
        return res.data;
    } catch (err) { return rejectWithValue(getErrorMessage(err)); }
});

// 6. Admin: Manage Status (Approve/Reject)
export const updateQuizStatus = createAsyncThunk('quiz/updateStatus', async ({ quizId, status }, { getState, rejectWithValue }) => {
    try {
        const config = { headers: { Authorization: `Bearer ${getState().auth.token}` } };
        const res = await axios.put(QUIZ_ENDPOINTS.ADMIN_STATUS, { quizId, status }, config);
        return { quizId, status, message: res.data.message };
    } catch (err) { return rejectWithValue(getErrorMessage(err)); }
});

const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
        quizzes: [],      // Teacher/Student Specific
        allQuizzes: [],   // Admin Specific
        lastResult: null,
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: '',
    },
    reducers: {
        quizReset: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = '';
        }
    },
    extraReducers: (builder) => {
        builder
            // Pending states
            .addCase(fetchAllQuizzesAdmin.pending, (state) => { state.isLoading = true; })
            .addCase(createQuiz.pending, (state) => { state.isLoading = true; })

            // Fulfilled states
            .addCase(fetchMyQuizzes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.quizzes = action.payload;
            })
            .addCase(fetchAvailableQuizzes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.quizzes = action.payload;
            })
            .addCase(fetchAllQuizzesAdmin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.allQuizzes = action.payload;
            })
            .addCase(createQuiz.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.message = action.payload.message;
            })
            .addCase(submitQuizResult.fulfilled, (state, action) => {
                state.lastResult = action.payload;
                state.isSuccess = true;
            })
            .addCase(updateQuizStatus.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.message = action.payload.message;
                // Update specific quiz in admin list
                const index = state.allQuizzes.findIndex(q => q._id === action.payload.quizId);
                if (index !== -1) {
                    state.allQuizzes[index].status = action.payload.status;
                }
            })

            // Error/Rejected State Matcher
            .addMatcher(action => action.type.endsWith('/rejected'), (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    }
});

export const { quizReset } = quizSlice.actions;
export default quizSlice.reducer;