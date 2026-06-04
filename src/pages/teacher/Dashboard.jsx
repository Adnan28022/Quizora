import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMyQuizzes } from '../../redux/reducer/quiz/QuizSlice';
import { fetchCategories } from '../../redux/reducer/category/CategorySlice';
import TeacherStats from '../../components/teacher/dashboard/TeacherStats';
import ActiveQuizzes from '../../components/teacher/dashboard/ActiveQuizzes';
import PerformanceWidget from '../../components/teacher/dashboard/PerformanceWidget';
import { useNavigate } from 'react-router-dom';

const TeacherDashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchMyQuizzes());
        dispatch(fetchCategories());
    }, [dispatch]);

    return (
        <div className="pb-10 px-4 md:px-0">
            {/* Top Stats - Real Data */}
            <TeacherStats />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* My Quizzes - Real Data */}
                <div className="lg:col-span-8">
                    <ActiveQuizzes />
                </div>

                {/* Analytics Insight */}
                <div className="lg:col-span-4">
                    <PerformanceWidget />
                </div>
            </div>

            {/* Quick Action Banner */}
            <div className="mt-10 p-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-indigo-100">
                <div>
                    <h3 className="text-xl font-bold italic tracking-tight leading-none mb-2 uppercase">Ready to Challenge?</h3>
                    <p className="text-indigo-100 text-sm font-medium">Create a new specialized quiz and publish it to the global marketplace.</p>
                </div>
                <button
                    onClick={() => navigate('/teacher/create-quiz')}
                    className="px-8 py-4 bg-white text-indigo-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-lg shrink-0"
                >
                    Create New Quiz
                </button>
            </div>
        </div>
    );
};

export default TeacherDashboard;