import React from 'react';
import { motion } from 'framer-motion';
import { Users, HelpCircle } from 'lucide-react';

const getStatusStyle = (status) => {
    switch (status) {
        case 'approved': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
        case 'pending': return 'bg-amber-50 text-amber-600 border-amber-100';
        case 'rejected': return 'bg-red-50 text-red-500 border-red-100';
        default: return 'bg-slate-50 text-slate-500 border-slate-100';
    }
};

const QuizRow = ({ quiz, index }) => {
    const createdAt = quiz.createdAt
        ? new Date(quiz.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        : '—';

    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex flex-col lg:flex-row lg:items-center justify-between p-6 bg-white border border-slate-100 rounded-[2rem] mb-4 hover:shadow-xl hover:shadow-indigo-50 transition-all group"
        >
            {/* Quiz Info */}
            <div className="flex items-center gap-5 lg:w-1/2">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-inner font-black italic text-lg
                    ${quiz.status === 'approved' ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-50 text-slate-400'}`}>
                    {index + 1}
                </div>
                <div>
                    <h4 className="text-sm font-black text-slate-900 tracking-tight uppercase italic group-hover:text-indigo-600 transition-colors">
                        {quiz.title}
                    </h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                        {quiz.category?.name ?? 'No Category'} • {createdAt}
                    </p>
                </div>
            </div>

            {/* Metrics */}
            <div className="flex flex-wrap items-center gap-8">
                <div className="text-center">
                    <div className="flex items-center gap-1.5 text-slate-700 justify-center">
                        <Users size={14} className="text-indigo-500" />
                        <span className="text-sm font-bold">{quiz.attempts ?? 0}</span>
                    </div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Students</p>
                </div>
                <div className="text-center">
                    <div className="flex items-center gap-1.5 text-slate-700 justify-center">
                        <HelpCircle size={14} className="text-indigo-500" />
                        <span className="text-sm font-bold">{quiz.questions?.length ?? 0}</span>
                    </div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Questions</p>
                </div>
                <div className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border ${getStatusStyle(quiz.status)}`}>
                    {quiz.status}
                </div>
            </div>
        </motion.div>
    );
};

export default QuizRow;