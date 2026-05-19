import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Star, MessageCircle, AlertCircle } from 'lucide-react';

const FeedbackStats = () => {
    const stats = [
        { label: "Total Feedbacks", val: "342", icon: <MessageSquare size={20} />, color: "text-indigo-600", bg: "bg-indigo-50" },
        { label: "Avg. Rating", val: "4.8/5", icon: <Star size={20} />, color: "text-amber-500", bg: "bg-amber-50" },
        { label: "Recent Queries", val: "12", icon: <MessageCircle size={20} />, color: "text-emerald-600", bg: "bg-emerald-50" },
        { label: "Pending Issues", val: "03", icon: <AlertCircle size={20} />, color: "text-red-500", bg: "bg-red-50" },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-5"
                >
                    <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center shrink-0 shadow-inner`}>
                        {stat.icon}
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

export default FeedbackStats;