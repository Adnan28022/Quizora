import React from 'react';
import { motion } from 'framer-motion';
import { Edit3, Trash2, ShieldAlert, MoreVertical, CheckCircle2 } from 'lucide-react';

const UserRow = ({ user, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex flex-col lg:flex-row lg:items-center justify-between p-5 bg-white border border-slate-100 rounded-[2rem] mb-3 hover:shadow-xl hover:shadow-indigo-50 transition-all group"
        >
            {/* User Identity */}
            <div className="flex items-center gap-4 lg:w-1/4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white font-black text-xs uppercase shadow-lg group-hover:bg-indigo-600 transition-colors italic">
                    {user.initials}
                </div>
                <div>
                    <h4 className="text-sm font-bold text-slate-900 tracking-tight uppercase italic leading-none">{user.name}</h4>
                    <p className="text-[10px] font-medium text-slate-400 mt-1.5">{user.email}</p>
                </div>
            </div>

            {/* Role & Status */}
            <div className="flex items-center gap-8 my-4 lg:my-0 lg:w-1/4 justify-center">
                <span className={`px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border
                    ${user.role === 'Teacher' ? 'bg-purple-50 text-purple-600 border-purple-100' : 'bg-blue-50 text-blue-600 border-blue-100'}`}>
                    {user.role}
                </span>
                <div className="flex items-center gap-1.5">
                    <div className={`w-2 h-2 rounded-full ${user.status === 'Active' ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`}></div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{user.status}</span>
                </div>
            </div>

            {/* Activity Info */}
            <div className="flex items-center gap-10 lg:w-1/4 justify-center border-x border-slate-50 px-4">
                <div className="text-center">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter mb-0.5">
                        {user.role === 'Teacher' ? 'Published' : 'Completed'}
                    </p>
                    <p className="text-sm font-bold text-slate-800">{user.activityCount} Quizzes</p>
                </div>
                <div className="text-center">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter mb-0.5">Joined</p>
                    <p className="text-sm font-bold text-slate-800">{user.joinDate}</p>
                </div>
            </div>

            {/* Admin Actions */}
            <div className="flex items-center justify-end gap-3 lg:w-1/4 mt-4 lg:mt-0">
                <button className="p-2.5 bg-slate-50 text-slate-400 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-all" title="Edit Profile">
                    <Edit3 size={16} />
                </button>
                <button className="p-2.5 bg-slate-50 text-slate-400 rounded-xl hover:bg-red-50 hover:text-red-500 transition-all" title="Suspend User">
                    <ShieldAlert size={16} />
                </button>
                <button className="p-2.5 bg-slate-50 text-slate-400 rounded-xl hover:bg-red-600 hover:text-white transition-all" title="Delete Account">
                    <Trash2 size={16} />
                </button>
            </div>
        </motion.div>
    );
};

export default UserRow;