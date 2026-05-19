import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Zap, BarChart2 } from 'lucide-react';

const ResultSummary = () => {
    const summary = [
        { label: "Overall Accuracy", val: "92%", icon: <Target />, color: "text-indigo-600", bg: "bg-indigo-50" },
        { label: "Quizzes Mastered", val: "08", icon: <Award />, color: "text-emerald-600", bg: "bg-emerald-50" },
        { label: "Skill Points", val: "2,450", icon: <Zap />, color: "text-amber-500", bg: "bg-amber-50" },
        { label: "Avg. Percentile", val: "85th", icon: <BarChart2 />, color: "text-purple-600", bg: "bg-purple-50" },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {summary.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-all"
                >
                    <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-inner`}>
                        {React.cloneElement(item.icon, { size: 24 })}
                    </div>
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mb-1">{item.label}</p>
                    <p className="text-2xl font-black text-slate-900">{item.val}</p>
                </motion.div>
            ))}
        </div>
    );
};

export default ResultSummary;