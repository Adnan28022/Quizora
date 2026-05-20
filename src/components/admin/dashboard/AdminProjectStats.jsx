import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, BookOpenCheck, BarChart2 } from 'lucide-react';

const AdminProjectStats = () => {
    const stats = [
        { label: "Total Students", val: "8,240", icon: <Users size={20} />, color: "text-indigo-600", bg: "bg-indigo-50" },
        { label: "Expert Teachers", val: "156", icon: <GraduationCap size={20} />, color: "text-emerald-600", bg: "bg-emerald-50" },
        { label: "Live Quizzes", val: "1,420", icon: <BookOpenCheck size={20} />, color: "text-amber-500", bg: "bg-amber-50" },
        { label: "Quiz Attempts", val: "25.6k", icon: <BarChart2 size={20} />, color: "text-purple-600", bg: "bg-purple-50" },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {stats.map((stat, i) => (
                <motion.div
                    key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                    className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-5"
                >
                    <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center shrink-0 shadow-inner`}>
                        {stat.icon}
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-none mb-1.5">{stat.label}</p>
                        <p className="text-2xl font-bold text-slate-900 leading-none tracking-tight">{stat.val}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default AdminProjectStats;