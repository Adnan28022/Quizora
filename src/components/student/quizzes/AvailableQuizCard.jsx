import React from 'react';
import { motion } from 'framer-motion';
import { Clock, BookOpen, Star, ArrowRight, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Navigation ke liye import

const AvailableQuizCard = ({ quiz }) => {
    const navigate = useNavigate(); // Hook initialize kiya

    const handleStartQuiz = () => {
        // Aapne jo route bataya us par navigate karega
        navigate('/student/attempt');
    };

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-[2rem] border border-slate-100 p-6 shadow-sm hover:shadow-xl hover:shadow-indigo-50 transition-all group"
        >
            <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-[9px] font-black uppercase tracking-widest">
                    {quiz.category}
                </span>
                <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                    <Star size={14} fill="currentColor" />
                    <span>{quiz.rating}</span>
                </div>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors leading-tight italic">
                {quiz.title}
            </h3>

            <div className="flex items-center gap-3 mb-6 p-2 bg-slate-50 rounded-xl">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <User size={16} />
                </div>
                <div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase leading-none mb-1">Educator</p>
                    <p className="text-xs font-bold text-slate-700">{quiz.teacher}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6 border-y border-slate-50 py-4">
                <div className="flex items-center gap-2 text-slate-500">
                    <Clock size={14} className="text-indigo-500" />
                    <span className="text-[11px] font-bold">{quiz.duration} Mins</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                    <BookOpen size={14} className="text-indigo-500" />
                    <span className="text-[11px] font-bold">{quiz.totalQs} Questions</span>
                </div>
            </div>

            {/* Start Challenge Button with Navigation */}
            <button
                onClick={handleStartQuiz}
                className="w-full py-3.5 bg-slate-900 text-white rounded-xl text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 group-hover:bg-indigo-600 transition-all shadow-lg shadow-slate-200"
            >
                Start Challenge <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </motion.div>
    );
};

export default AvailableQuizCard;