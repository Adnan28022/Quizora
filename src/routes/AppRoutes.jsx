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
import CreateQuiz from '../pages/teacher/CreateQuiz';
import ManageQuizzes from '../pages/teacher/ManageQuizzes';
import StudentProgress from '../pages/teacher/StudentProgress';
import MyStudents from '../pages/teacher/MyStudents';
import TeacherFeedback from '../pages/teacher/Feedback';
import TeacherProfile from '../pages/teacher/Profile';
import AdminLayout from '../layout/AdminLayout';
import AdminDashboard from '../pages/admin/Dashboard';
import ManageUsers from '../pages/admin/ManageUsers';
import QuizApprovals from '../pages/admin/QuizApprovals';
import ManageTeachers from '../pages/admin/ManageTeachers'
import SystemLogs from '../pages/admin/SystemLogs';
import QuizPlay from '../pages/student/QuizPlay';
import ManageCategories from '../pages/admin/ManageCategories';
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
                    <Route path="quiz/attempt/:quizId" element={<QuizPlay />} />
                </Route>
                {/* ADMIN DASHBOARD ROUTES */}
                <Route path="/admin" element={<AdminLayout />}>
                    <Route path="dashboard" element={<AdminDashboard />} />
                    <Route path="users" element={<ManageUsers />} />
                    <Route path="approvals" element={<QuizApprovals />} />
                    <Route path='teachers' element={<ManageTeachers />} />
                    <Route path='system-logs' element={<SystemLogs />} />
                    <Route path='categories' element={<ManageCategories />} />
                </Route>
                <Route path="/teacher" element={<TeacherLayout />}>
                    <Route path="dashboard" element={<TeacherDashboard />} />
                    <Route path="create-quiz" element={<CreateQuiz />} />
                    <Route path="manage-quizzes" element={<ManageQuizzes />} />
                    <Route path='analytics' element={<StudentProgress />} />
                    <Route path='students' element={<MyStudents />} />
                    <Route path='feedback' element={<TeacherFeedback />} />
                    <Route path='settings' element={<TeacherProfile />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes >
        </>
    );
};

export default AppRoutes;