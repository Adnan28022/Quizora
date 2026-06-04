import React from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { Mail, ShieldCheck, ShieldAlert, Trash2, Star, BarChart2, UserCheck } from 'lucide-react';
import { approveTeacherAction } from '../../../redux/reducer/auth/AuthSlice';

const TeacherManagementRow = ({ teacher, index, quizCount }) => {
    const dispatch = useDispatch();

    // Initials generate karna
    const initials = teacher.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

    const handleApprove = () => {
        if (window.confirm(`Confirm verification for ${teacher.name}?`)) {
            dispatch(approveTeacherAction(teacher._id));
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex flex-col lg:flex-row lg:items-center justify-between p-6 bg-white border border-slate-100 rounded-[2.5rem] mb-4 hover:shadow-xl hover:shadow-indigo-50/50 transition-all group relative overflow-hidden"
        >
            {/* 1. Identity Section */}
            <div className="flex items-center gap-5 lg:w-1/4">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center text-white text-xl font-black italic shadow-lg group-hover:bg-indigo-600 transition-colors uppercase shrink-0">
                    {initials}
                </div>
                <div>
                    <h4 className="text-base font-black text-slate-900 uppercase italic tracking-tight leading-none group-hover:text-indigo-600 transition-colors">{teacher.name}</h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">{teacher.email}</p>
                </div>
            </div>

            {/* 2. Professional Metrics */}
            <div className="flex items-center justify-around flex-1 my-6 lg:my-0 px-8 border-x border-slate-50">
                <div className="text-center">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Account</p>
                    <span className="px-3 py-1 bg-slate-50 text-slate-600 rounded-lg text-[10px] font-black uppercase tracking-tighter border border-slate-100 italic">
                        Educator
                    </span>
                </div>
                <div className="text-center">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Contribution</p>
                    <p className="text-sm font-bold text-slate-900">{quizCount} Quizzes</p>
                </div>
                <div className="text-center">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Rating</p>
                    <div className="flex items-center gap-1 text-amber-500 justify-center">
                        <Star size={12} fill="currentColor" />
                        <span className="text-sm font-bold text-slate-900">4.8</span>
                    </div>
                </div>
            </div>

            {/* 3. Status & Actions */}
            <div className="flex items-center justify-end gap-3 lg:w-1/4">
                <div className={`px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest border mr-2
                    ${teacher.isApproved ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-amber-50 text-amber-600 border-amber-100'}`}>
                    {teacher.isApproved ? 'Verified' : 'Pending'}
                </div>

                <div className="flex items-center gap-2">
                    {!teacher.isApproved && (
                        <button
                            onClick={handleApprove}
                            className="p-3 bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all rounded-2xl shadow-sm"
                            title="Verify Teacher"
                        >
                            <UserCheck size={18} />
                        </button>
                    )}
                    <button className="p-3 bg-slate-50 text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 transition-all rounded-2xl shadow-sm">
                        <Mail size={18} />
                    </button>
                    <button className="p-3 bg-slate-50 text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all rounded-2xl shadow-sm">
                        <ShieldAlert size={18} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default TeacherManagementRow;