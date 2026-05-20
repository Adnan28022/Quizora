import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Activity, PieChart, Zap } from 'lucide-react';

const AnalyticsMacroStats = () => {
    const stats = [
        { label: "Engagement Rate", val: "84.2%", trend: "+12.4%", icon: <Activity />, color: "text-indigo-600", bg: "bg-indigo-50" },
        { label: "Active Sessions", val: "4,120", trend: "+5.2%", icon: <Zap />, color: "text-amber-500", bg: "bg-amber-50" },
        { label: "New Registries", val: "1,240", trend: "+18.1%", icon: <TrendingUp />, color: "text-emerald-600", bg: "bg-emerald-50" },
        { label: "Retention Score", val: "92/100", trend: "+2.1%", icon: <PieChart />, color: "text-purple-600", bg: "bg-purple-50" },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, i) => (
                <motion.div
                    key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                    className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
                >
                    <div className="flex justify-between items-start mb-6">
                        <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform`}>
                            {React.cloneElement(stat.icon, { size: 20 })}
                        </div>
                        <span className="text-[10px] font-black text-emerald-500 bg-emerald-50 px-2 py-1 rounded-lg">{stat.trend}</span>
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1 italic">{stat.label}</p>
                        <p className="text-2xl font-bold text-slate-900 tracking-tight leading-none">{stat.val}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default AnalyticsMacroStats;