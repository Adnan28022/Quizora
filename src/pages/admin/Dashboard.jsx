import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllUsers } from '../../redux/reducer/auth/AuthSlice';
import { fetchAllQuizzesAdmin } from '../../redux/reducer/quiz/QuizSlice';
import AdminProjectStats from '../../components/admin/dashboard/AdminProjectStats';
import TeacherRequestTerminal from '../../components/admin/dashboard/TeacherRequestTerminal';
import TopTeachersCard from '../../components/admin/dashboard/TopTeachersCard';
import PlatformRecentActivity from '../../components/admin/dashboard/PlateformRecentActivity';

const AdminDashboard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllUsers());
        dispatch(fetchAllQuizzesAdmin());
    }, [dispatch]);

    return (
        <div className="pb-10 px-4 md:px-0">
            <AdminProjectStats />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4"><TopTeachersCard /></div>
                <div className="lg:col-span-8"><TeacherRequestTerminal /></div>
            </div>
            <div className="mt-8"><PlatformRecentActivity /></div>
        </div>
    );
};

export default AdminDashboard;