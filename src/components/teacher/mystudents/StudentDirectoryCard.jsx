import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MoreVertical, Calendar, Star } from 'lucide-react';

const StudentDirectoryCard = ({ student, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-50/50 transition-all group relative overflow-hidden"
        >
            {/* Background Decor Icon */}
            <Star className="absolute -right-4 -top-4 text-slate-50 group-hover:text-indigo-50 transition-colors" size={100} />

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center text-white text-xl font-black italic shadow-lg shadow-slate-200 group-hover:bg-indigo-600 transition-colors uppercase">
                        {student.initials}
                    </div>
                    <button className="p-2 text-slate-300 hover:text-slate-600">
                        <MoreVertical size={20} />
                    </button>
                </div>

                <div className="mb-6">
                    <h3 className="text-lg font-black text-slate-900 tracking-tight uppercase italic leading-none">{student.name}</h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">{student.email}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8 pt-6 border-t border-slate-50">
                    <div>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Enrolled In</p>
                        <p className="text-sm font-bold text-slate-800">{student.quizzesTaken} Quizzes</p>
                    </div>
                    <div>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Performance</p>
                        <p className={`text-sm font-bold ${student.isPro ? 'text-indigo-600' : 'text-slate-700'}`}>
                            {student.isPro ? 'Elite Pro' : 'Learning'}
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-400">
                        <Calendar size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-tight">Joined {student.joinDate}</span>
                    </div>
                    <button className="w-10 h-10 bg-slate-50 text-slate-400 hover:bg-indigo-600 hover:text-white rounded-xl flex items-center justify-center transition-all">
                        <Mail size={18} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default StudentDirectoryCard;