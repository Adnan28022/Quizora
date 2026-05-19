import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer'
import Home from '../pages/ui/Home';
import Challenges from '../pages/ui/Challenges';
import Features from '../pages/ui/Features';
import StudentLayout from '../layout/StudentLayout';
import StudentDashboard from '../pages/student/Dashboard';
import AvailableQuizzes from '../pages/student/AvailableQuizzes';
import MyResults from '../pages/student/MyResults';
import NotFound from '../pages/NotFound';
import Leaderboard from '../pages/student/LeaderBoard';
import Achievements from '../pages/student/Achievements';
import Profile from '../pages/student/Profile';
import Settings from '../pages/student/Settings';
import AuthLayout from '../layout/AuthLayout';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import ForgotPassword from '../auth/ForgotPassword';
import VerifyOTP from '../auth/VerifyOTP';
import ResetPassword from '../auth/ResetPassword';
import TeacherLayout from '../layout/TeacherLayout';
import TeacherDashboard from '../pages/teacher/Dashboard';
const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-[#0a0f1a] transition-colors duration-500">
            <Navbar />
            <main className="flex-grow">
                <Outlet /> {/* Yahan Home aur baqi pages render honge */}
            </main>
            <Footer />
        </div>
    );
};

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path='/quizzes' element={<Challenges />} />
                    <Route path='/features' element={<Features />} />
                </Route>
                <Route path="/auth" element={<AuthLayout />}>
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="forgot-password" element={<ForgotPassword />} />
                    <Route path="verify-otp" element={<VerifyOTP />} />
                    <Route path="reset-password" element={<ResetPassword />} />
                </Route>
                <Route path="/student" element={<StudentLayout />}>
                    <Route path='dashboard' element={<StudentDashboard />} />
                    <Route path='quizzes' element={<AvailableQuizzes />} />
                    <Route path='results' element={<MyResults />} />
                    <Route path='leaderboard' element={<Leaderboard />} />
                    <Route path='awards' element={<Achievements />} />
                    <Route path='profile' element={<Profile />} />
                    <Route path='settings' element={<Settings />} />
                </Route>
                <Route path="/teacher" element={<TeacherLayout />}>
                    <Route path="dashboard" element={<TeacherDashboard />} />
                    <Route path="create-quiz" element={<div>Create Quiz Component</div>} />
                    <Route path="manage-quizzes" element={<div>Manage Quizzes Component</div>} />
                    {/* ... baki routes */}
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
};

export default AppRoutes;