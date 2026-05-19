import React from 'react';
import { ArrowUpRight, GraduationCap } from 'lucide-react';

const RecentActivity = () => {
    const activities = [
        { title: "React Advanced Patterns", score: "92/100", time: "2 hours ago" },
        { title: "UI/UX Design Systems", score: "85/100", time: "Yesterday" },
        { title: "Node.js Architecture", score: "78/100", time: "3 days ago" },
    ];

    return (
        <div className="bg-white rounded-[2rem] p-7 border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">Recent <span className="text-indigo-600 italic">Activity</span></h3>
                <button className="text-[10px] font-bold uppercase text-indigo-600 tracking-widest hover:underline">See All</button>
            </div>
            <div className="space-y-3">
                {activities.map((act, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-white transition-all group">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-indigo-600 shadow-sm">
                                <GraduationCap size={18} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-slate-800 tracking-tight">{act.title}</h4>
                                <p className="text-[10px] font-medium text-slate-400 uppercase mt-1">Score: {act.score} • {act.time}</p>
                            </div>
                        </div>
                        <ArrowUpRight className="text-slate-300 group-hover:text-indigo-600 transition-colors" size={18} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentActivity;