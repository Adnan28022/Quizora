import React from 'react';
import { Globe, Clock, FileText } from 'lucide-react';

const ManageStats = ({ quizzes }) => {
    const total = quizzes.length;
    const live = quizzes.filter(q => q.status === 'approved').length;
    const pending = quizzes.filter(q => q.status === 'pending').length;

    const stats = [
        { label: "Total Quizzes", val: String(total).padStart(2, '0'), icon: <FileText size={18} />, color: "bg-slate-100 text-slate-600" },
        { label: "Live Quizzes", val: String(live).padStart(2, '0'), icon: <Globe size={18} />, color: "bg-emerald-50 text-emerald-600" },
        { label: "Pending Approval", val: String(pending).padStart(2, '0'), icon: <Clock size={18} />, color: "bg-amber-50 text-amber-600" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {stats.map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-5">
                    <div className={`p-4 rounded-2xl ${stat.color} shadow-inner`}>
                        {stat.icon}
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-none mb-1.5">{stat.label}</p>
                        <p className="text-xl font-bold text-slate-900 leading-none">{stat.val}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ManageStats;