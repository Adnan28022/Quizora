import React from 'react';
import { Check, X, ExternalLink, UserPlus } from 'lucide-react';

const TeacherRequestTerminal = () => {
    const requests = [
        { name: "Dr. Robert Fox", subject: "Quantum Physics", experience: "8 Years", date: "2h ago" },
        { name: "Jane Cooper", subject: "UI/UX Design", experience: "5 Years", date: "5h ago" },
        { name: "Cody Fisher", subject: "Data Science", experience: "12 Years", date: "Yesterday" },
    ];

    return (
        <div className="bg-white rounded-[2.5rem] p-7 border border-slate-100 shadow-sm h-full">
            <div className="flex justify-between items-center mb-8">
                <h3 className="text-lg font-black text-slate-900 tracking-tight uppercase italic">Teacher <span className="text-indigo-600">Verification</span></h3>
                <div className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-[9px] font-black uppercase tracking-widest">New Requests</div>
            </div>

            <div className="space-y-4">
                {requests.map((req, i) => (
                    <div key={i} className="p-4 bg-slate-50/50 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-white transition-all group">
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white text-xs font-black italic">
                                    {req.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-800">{req.name}</h4>
                                    <p className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">{req.subject}</p>
                                </div>
                            </div>
                            <span className="text-[9px] font-bold text-slate-400 uppercase">{req.date}</span>
                        </div>
                        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                            <p className="text-[9px] font-black text-indigo-600 uppercase italic">Exp: {req.experience}</p>
                            <div className="flex gap-2">
                                <button className="p-2 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-500 hover:text-white transition-all"><Check size={14} /></button>
                                <button className="p-2 bg-red-50 text-red-400 rounded-lg hover:bg-red-500 hover:text-white transition-all"><X size={14} /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeacherRequestTerminal;