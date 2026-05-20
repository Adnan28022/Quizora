import React from 'react';
import { ShoppingBag, BookOpen, UserPlus, Award } from 'lucide-react';

const PlatformRecentActivity = () => {
    const logs = [
        { type: 'quiz', text: "New Quiz 'Advanced React' published by Prof. Sarah", time: "10m ago", icon: <BookOpen size={16} />, color: "text-indigo-600", bg: "bg-indigo-50" },
        { type: 'user', text: "14 new students joined the 'Global Design' challenge", time: "25m ago", icon: <UserPlus size={16} />, color: "text-emerald-600", bg: "bg-emerald-50" },
        { type: 'award', text: "Alex Johnson earned the 'Master Ninja' Badge", time: "1h ago", icon: <Award size={16} />, color: "text-amber-500", bg: "bg-amber-50" },
    ];

    return (
        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
            <h3 className="text-xl font-black text-slate-900 italic uppercase tracking-tighter mb-8">Platform <span className="text-indigo-600">Live Feed</span></h3>
            <div className="space-y-6">
                {logs.map((log, i) => (
                    <div key={i} className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${log.bg} ${log.color} shrink-0`}>
                            {log.icon}
                        </div>
                        <div className="flex-1 border-b border-slate-50 pb-4">
                            <p className="text-sm font-bold text-slate-700 italic leading-tight">{log.text}</p>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{log.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlatformRecentActivity;