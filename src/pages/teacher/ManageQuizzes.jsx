import React from 'react';
import BreadcrumbBanner from '../../components/teacher/Banner';
import ManageStats from '../../components/teacher/managequizzes/ManageStats';
import QuizRow from '../../components/teacher/managequizzes/QuizRow';
import { Plus, Search, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

const ManageQuizzes = () => {
    const quizList = [
        { id: 1, title: "Modern React Architecture", category: "Development", date: "Oct 24, 2023", attempts: 450, questions: 20, status: "Live" },
        { id: 2, title: "Advanced Node.js Scaling", category: "Backend", date: "Oct 22, 2023", attempts: 310, questions: 15, status: "Live" },
        { id: 3, title: "UI Design Principles 101", category: "Design", date: "Oct 18, 2023", attempts: 0, questions: 10, status: "Draft" },
        { id: 4, title: "E-Commerce Database Design", category: "Science", date: "Oct 15, 2023", attempts: 185, questions: 25, status: "Live" },
    ];

    const breadcrumbs = [{ label: "Content Management", path: "/teacher/manage" }];

    return (
        <div className="pb-10">
            <BreadcrumbBanner
                title="Quiz Central"
                subtitle="Efficiently manage, update, and track your educational content."
                breadcrumbs={breadcrumbs}
            />

            {/* 1. Quick Metrics */}
            <ManageStats />

            {/* 2. Controls Area */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
                <div className="relative w-full md:w-96 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search your library..."
                        className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-100 rounded-2xl text-xs font-bold outline-none focus:border-indigo-600 focus:shadow-xl transition-all"
                    />
                </div>

                <div className="flex items-center gap-4 w-full md:w-auto">
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-slate-200 text-slate-500 rounded-2xl font-bold text-xs hover:bg-slate-50 transition-all">
                        <SlidersHorizontal size={16} /> Filters
                    </button>
                    <Link to="/teacher/create-quiz" className="flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-3.5 bg-indigo-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-indigo-100 hover:bg-slate-900 transition-all">
                        <Plus size={18} /> New Quiz
                    </Link>
                </div>
            </div>

            {/* 3. Quiz Rich List */}
            <div className="mt-8">
                {quizList.map((quiz, i) => (
                    <QuizRow key={quiz.id} quiz={quiz} index={i} />
                ))}
            </div>

            {/* Empty State Mockup (Commented out, for future use) */}
            {/* quizList.length === 0 && (
                <div className="text-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-slate-100">
                    <p className="text-slate-400 font-bold italic">No quizzes found in your library.</p>
                </div>
            ) */}
        </div>
    );
};

export default ManageQuizzes;