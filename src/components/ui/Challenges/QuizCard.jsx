import React from 'react';
import { motion } from 'framer-motion';
import { Clock, BookOpen, User, ArrowRight, Star } from 'lucide-react';

const QuizCard = ({ quiz }) => {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="bg-white rounded-[2rem] border border-slate-100 p-6 shadow-sm hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500 group"
        >
            {/* Category & Rating */}
            <div className="flex justify-between items-center mb-6">
                <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                    {quiz.category}
                </span>
                <div className="flex items-center gap-1 text-amber-500">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs font-bold text-slate-600">{quiz.rating}</span>
                </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors line-clamp-2 italic">
                {quiz.title}
            </h3>

            {/* Teacher Info */}
            <div className="flex items-center gap-3 mb-6 p-3 bg-slate-50 rounded-2xl">
                <img src={quiz.teacherAvatar} alt="" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Educator</p>
                    <p className="text-sm font-bold text-slate-700">{quiz.teacherName}</p>
                </div>
            </div>

            {/* Meta Info */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2 text-slate-500">
                    <Clock size={16} className="text-indigo-500" />
                    <span className="text-xs font-bold">{quiz.duration} Mins</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                    <BookOpen size={16} className="text-indigo-500" />
                    <span className="text-xs font-bold">{quiz.totalQuestions} Qs</span>
                </div>
            </div>

            {/* Action Button */}
            <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest group-hover:bg-indigo-600 transition-all flex items-center justify-center gap-2">
                Start Challenge <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </motion.div>
    );
};

export default QuizCard;