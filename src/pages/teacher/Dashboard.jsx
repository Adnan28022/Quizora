import React from 'react';
import TeacherStats from '../../components/teacher/dashboard/TeacherStats';
import ActiveQuizzes from '../../components/teacher/dashboard/ActiveQuizzes';
import PerformanceWidget from '../../components/teacher/dashboard/PerformanceWidget';

const TeacherDashboard = () => {

    return (
        <div className="pb-10">

            {/* 2. Top Stats */}
            <TeacherStats />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* 3. My Quizzes (8 Columns) */}
                <div className="lg:col-span-8">
                    <ActiveQuizzes />
                </div>

                {/* 4. Analytics Insight (4 Columns) */}
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
                <button className="px-8 py-4 bg-white text-indigo-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-lg shrink-0">
                    Create New Quiz
                </button>
            </div>
        </div>
    );
};

export default TeacherDashboard;