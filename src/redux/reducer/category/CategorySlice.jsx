import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CATEGORY_ENDPOINTS } from '../../../utils/ApiUrl';

export const fetchCategories = createAsyncThunk('category/fetchAll', async (_, { rejectWithValue }) => {
    try {
        const res = await axios.get(CATEGORY_ENDPOINTS.BASE);
        return res.data;
    } catch (err) { return rejectWithValue(err.response?.data?.message || "Failed"); }
});

export const addCategory = createAsyncThunk('category/add', async (catData, { getState, rejectWithValue }) => {
    try {
        const config = { headers: { Authorization: `Bearer ${getState().auth.token}` } };
        const res = await axios.post(CATEGORY_ENDPOINTS.BASE, catData, config);
        return res.data.category;
    } catch (err) { return rejectWithValue(err.response?.data?.message || "Failed"); }
});

export const removeCategory = createAsyncThunk('category/delete', async (id, { getState, rejectWithValue }) => {
    try {
        const config = { headers: { Authorization: `Bearer ${getState().auth.token}` } };
        await axios.delete(`${CATEGORY_ENDPOINTS.BASE}/${id}`, config);
        return id;
    } catch (err) { return rejectWithValue(err.response?.data?.message || "Failed"); }
});

const categorySlice = createSlice({
    name: 'category',
    initialState: { categories: [], isLoading: false, isError: false },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
            })
            .addCase(addCategory.fulfilled, (state, action) => {
                state.categories.push(action.payload);
            })
            .addCase(removeCategory.fulfilled, (state, action) => {
                state.categories = state.categories.filter(c => c._id !== action.payload);
            });
    }
});

export default categorySlice.reducer;