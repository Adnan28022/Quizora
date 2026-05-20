import React from 'react';
import { Trophy, Star, ArrowUpRight } from 'lucide-react';

const TopTeachersCard = () => {
    const topTeachers = [
        { name: "Prof. Sarah Miller", students: "2.4k", rating: 4.9 },
        { name: "Arjun Mehta", students: "1.8k", rating: 4.8 },
        { name: "Elena Rodriguez", students: "1.2k", rating: 4.7 },
    ];

    return (
        <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden h-full shadow-2xl">
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2.5 bg-amber-400 rounded-xl text-slate-900 shadow-lg shadow-amber-200">
                        <Trophy size={20} />
                    </div>
                    <h3 className="text-xl font-black italic tracking-tighter uppercase">Star <span className="text-amber-400">Educators</span></h3>
                </div>

                <div className="space-y-6">
                    {topTeachers.map((teacher, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 group hover:bg-white/10 transition-all cursor-pointer">
                            <div className="flex items-center gap-4">
                                <span className="text-lg font-black italic text-slate-600">#0{i + 1}</span>
                                <div>
                                    <h4 className="text-sm font-bold tracking-tight">{teacher.name}</h4>
                                    <div className="flex items-center gap-2 mt-1">
                                        <Star size={10} className="text-amber-400 fill-amber-400" />
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{teacher.rating} • {teacher.students} Learners</span>
                                    </div>
                                </div>
                            </div>
                            <ArrowUpRight size={18} className="text-slate-500 group-hover:text-amber-400 transition-colors" />
                        </div>
                    ))}
                </div>
            </div>
            {/* Background Glow */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px]"></div>
        </div>
    );
};

export default TopTeachersCard;