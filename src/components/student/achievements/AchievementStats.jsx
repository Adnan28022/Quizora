import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Zap, Target } from 'lucide-react';

const AchievementStats = () => {
    const stats = [
        { label: "Total Badges", val: "12", icon: <Award />, color: "text-indigo-600", bg: "bg-indigo-50" },
        { label: "Rare Awards", val: "03", icon: <Star />, color: "text-amber-500", bg: "bg-amber-50" },
        { label: "Award Points", val: "4,500", icon: <Zap />, color: "text-purple-600", bg: "bg-purple-50" },
        { label: "Completion Rate", val: "94%", icon: <Target />, color: "text-emerald-600", bg: "bg-emerald-50" },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-5 hover:shadow-md transition-all"
                >
                    <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center shadow-inner`}>
                        {React.cloneElement(stat.icon, { size: 24 })}
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-none mb-1.5">{stat.label}</p>
                        <p className="text-2xl font-black text-slate-900 leading-none">{stat.val}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default AchievementStats;