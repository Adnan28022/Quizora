import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WelcomeBanner = () => {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 px-1">
            <div>
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-indigo-600 mb-2"
                >
                    <Sparkles size={16} />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Learning Portal</span>
                </motion.div>
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                    Welcome back, <span className="text-indigo-600 italic">{user?.name || 'Student'}</span>!
                </h1>
                <p className="text-sm text-slate-500 mt-1 font-medium italic">Your progress is synchronized and up to date.</p>
            </div>

            <div className="flex gap-3">
                <button className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-[11px] font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
                    View History
                </button>
                <button
                    onClick={() => navigate('/student/quizzes')}
                    className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-[11px] font-bold uppercase tracking-wider shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all"
                >
                    Browse Quizzes
                </button>
            </div>
        </div>
    );
};

export default WelcomeBanner;