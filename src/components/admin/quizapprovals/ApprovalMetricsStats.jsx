import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, FileWarning, CheckCircle2 } from 'lucide-react';

const ApprovalMetricsStats = () => {
    const stats = [
        { label: "Pending Review", val: "14", icon: <Clock size={20} />, color: "text-amber-500", bg: "bg-amber-50" },
        { label: "Approved Today", val: "42", icon: <CheckCircle2 size={20} />, color: "text-emerald-600", bg: "bg-emerald-50" },
        { label: "Content Flags", val: "03", icon: <FileWarning size={20} />, color: "text-red-500", bg: "bg-red-50" },
        { label: "Total Certified", val: "2,840", icon: <ShieldCheck size={20} />, color: "text-indigo-600", bg: "bg-indigo-50" },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, i) => (
                <motion.div
                    key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                    className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-5 group hover:shadow-md transition-all"
                >
                    <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform`}>
                        {stat.icon}
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-none mb-2 italic">{stat.label}</p>
                        <p className="text-2xl font-bold text-slate-900 leading-none tracking-tight">{stat.val}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default ApprovalMetricsStats;