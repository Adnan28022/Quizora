import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, BookOpen, Star, ArrowRight, User } from 'lucide-react';
import { motion } from 'framer-motion';

const AvailableQuizCard = ({ quiz }) => {
    const navigate = useNavigate();

    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-[2.5rem] border border-slate-100 p-6 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:shadow-indigo-100/50 transition-all group"
        >
            <div>
                {/* Header: Category & Rating */}
                <div className="flex justify-between items-center mb-6">
                    <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-widest rounded-full italic border border-indigo-100">
                        {quiz.category?.name || 'General'}
                    </span>
                    <div className="flex items-center gap-1.5 bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
                        <Star size={12} className="text-amber-500 fill-amber-500" />
                        <span className="text-[10px] font-black text-amber-700">4.9</span>
                    </div>
                </div>

                {/* Title & Teacher */}
                <h3 className="text-xl font-black text-slate-900 uppercase italic tracking-tighter leading-tight mb-4 group-hover:text-indigo-600 transition-colors">
                    {quiz.title}
                </h3>

                <div className="flex items-center gap-2 mb-6">
                    <div className="w-6 h-6 rounded-lg bg-slate-900 flex items-center justify-center text-[10px] font-black text-white italic">
                        {quiz.teacher?.name?.[0]}
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">
                        By {quiz.teacher?.name}
                    </span>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        <div className="flex items-center gap-2 text-slate-400 mb-1">
                            <Clock size={12} />
                            <span className="text-[9px] font-black uppercase tracking-widest">Duration</span>
                        </div>
                        <p className="text-sm font-bold text-slate-800">{quiz.duration} Mins</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        <div className="flex items-center gap-2 text-slate-400 mb-1">
                            <BookOpen size={12} />
                            <span className="text-[9px] font-black uppercase tracking-widest">Questions</span>
                        </div>
                        <p className="text-sm font-bold text-slate-800">{quiz.questions?.length} Qs</p>
                    </div>
                </div>
            </div>

            {/* Action Button */}
            <button
                onClick={() => navigate(`/student/quiz/attempt/${quiz._id}`)}
                className="w-full py-4 bg-slate-900 text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 group-hover:bg-indigo-600 transition-all shadow-xl shadow-slate-100 group-hover:shadow-indigo-100 italic"
            >
                Start Attempt <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </motion.div>
    );
};

export default AvailableQuizCard;