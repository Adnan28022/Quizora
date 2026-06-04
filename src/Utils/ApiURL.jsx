export const BASE_URL = "http://localhost:5000/api";

export const AUTH_ENDPOINTS = {
    REGISTER: `${BASE_URL}/auth/register`,
    VERIFY_OTP: `${BASE_URL}/auth/verify-otp`,
    LOGIN: `${BASE_URL}/auth/login`,
    FORGOT_PASSWORD: `${BASE_URL}/auth/forgot-password`,
    RESET_PASSWORD: `${BASE_URL}/auth/reset-password`,
    LOGOUT: `${BASE_URL}/auth/logout`,
};

export const USER_ENDPOINTS = {
    GET_PROFILE: `${BASE_URL}/users/profile`,
    UPDATE_PROFILE: `${BASE_URL}/users/profile`,
    ALL_USERS: `${BASE_URL}/users/all-users`, // Admin
    APPROVE_TEACHER: `${BASE_URL}/users/approve-teacher`, // Admin (append ID later)
    DELETE_REQUEST: `${BASE_URL}/users/delete-request`,
    DELETE_CONFIRM: `${BASE_URL}/users/delete-confirm`,
};

export const CATEGORY_ENDPOINTS = {
    BASE: `${BASE_URL}/categories`,
};

export const QUIZ_ENDPOINTS = {
    CREATE: `${BASE_URL}/quizzes/create`,
    MY_QUIZZES: `${BASE_URL}/quizzes/my-quizzes`,
    ALL_QUIZZES: `${BASE_URL}/quizzes/admin/all`,
    AVAILABLE: `${BASE_URL}/quizzes/available`, // Student
    SUBMIT: `${BASE_URL}/quizzes/submit`, // Student result
    ADMIN_STATUS: `${BASE_URL}/quizzes/admin/status`, // Admin approve/reject
};