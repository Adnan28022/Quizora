import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducer/auth/AuthSlice'; // Check case sensitivity (AuthSlice vs authSlice)
import quizReducer from './reducer/quiz/QuizSlice';
import categoryReducer from './reducer/category/CategorySlice';
export const store = configureStore({
    reducer: {
        auth: authReducer,
        quiz: quizReducer,
        category: categoryReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;