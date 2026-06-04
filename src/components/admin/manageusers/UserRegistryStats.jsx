import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Users, UserCheck, GraduationCap, UserX, Loader2 } from 'lucide-react';

const UserRegistryStats = () => {
    const { allUsers, isLoading } = useSelector((state) => state.auth);

    // Dynamic Calculations
    const totalAccounts = allUsers.length;
    const activeStudents = allUsers.filter(u => u.role === 'student').length;
    const expertTeachers = allUsers.filter(u => u.role === 'teacher').length;
    const pendingApproval = allUsers.filter(u => u.role === 'teacher' && !u.isApproved).length;

    const stats = [
        { label: "Total Accounts", val: totalAccounts, icon: <Users size={20} />, color: "text-indigo-600", bg: "bg-indigo-50" },
        { label: "Active Students", val: activeStudents, icon: <UserCheck size={20} />, color: "text-emerald-600", bg: "bg-emerald-50" },
        { label: "Expert Teachers", val: expertTeachers, icon: <GraduationCap size={20} />, color: "text-purple-600", bg: "bg-purple-50" },
        { label: "Pending Approval", val: pendingApproval, icon: <UserX size={20} />, color: "text-red-500", bg: "bg-red-50" },
    ];

    if (isLoading) return <div className="flex justify-center p-10"><Loader2 className="animate-spin text-indigo-600" /></div>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {stats.map((stat, i) => (
                <motion.div
                    key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                    className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4 group hover:shadow-md transition-all"
                >
                    <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-inner`}>
                        {stat.icon}
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-none mb-1.5">{stat.label}</p>
                        <p className="text-xl font-bold text-slate-900 leading-none">{stat.val}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default UserRegistryStats;