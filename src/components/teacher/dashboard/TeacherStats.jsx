import React from 'react';
import { motion } from 'framer-motion';
import { BookCheck, Users, ClipboardCopy, TrendingUp } from 'lucide-react';
import { useSelector } from 'react-redux';

const TeacherStats = () => {
    const { quizzes } = useSelector((state) => state.quiz);

    // Aggregating real data
    const totalQuizzes = quizzes.length;
    // Note: 'Active Students' is sum of submissions across all quizzes
    const totalSubmissions = quizzes.reduce((acc, q) => acc + (q.attempts || 0), 0);

    const stats = [
        { label: "Total Quizzes", val: totalQuizzes, icon: <BookCheck size={20} />, color: "text-indigo-600", bg: "bg-indigo-50" },
        { label: "Submissions", val: totalSubmissions, icon: <ClipboardCopy size={20} />, color: "text-emerald-600", bg: "bg-emerald-50" },
        { label: "Avg. Difficulty", val: "Med", icon: <TrendingUp size={20} />, color: "text-amber-500", bg: "bg-amber-50" },
        { label: "Avg. Passing", val: "70%", icon: <Users size={20} />, color: "text-purple-600", bg: "bg-purple-50" },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {stats.map((stat, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-all group"
                >
                    <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                        {stat.icon}
                    </div>
                    <div>
                        <p className="text-[10px] font-bold uppercase text-slate-400 tracking-widest leading-none mb-1.5">{stat.label}</p>
                        <p className="text-xl font-bold text-slate-900 leading-none">{stat.val}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default TeacherStats;