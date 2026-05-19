import React from 'react';
import { Lightbulb, TrendingUp, AlertTriangle } from 'lucide-react';

const PerformanceInsight = () => {
    return (
        <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden h-full flex flex-col justify-between">
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2.5 bg-indigo-500 rounded-xl">
                        <Lightbulb size={20} />
                    </div>
                    <h3 className="text-xl font-bold italic tracking-tight">Performance <span className="text-indigo-400">Insights</span></h3>
                </div>

                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="text-emerald-400 shrink-0 mt-1"><TrendingUp size={18} /></div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">Strongest Pillar</p>
                            <p className="text-sm font-bold">React Architecture & Hooks</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="text-amber-400 shrink-0 mt-1"><AlertTriangle size={18} /></div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">Needs Attention</p>
                            <p className="text-sm font-bold">CSS Grid & Animation Logic</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 mt-12 p-5 bg-white/5 rounded-3xl border border-white/10">
                <p className="text-xs text-slate-300 font-medium italic">"Your score in Development has increased by <span className="text-emerald-400 font-bold underline">12%</span> since last month. Keep it up!"</p>
            </div>

            {/* Background Blur Decor */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-[60px]" />
        </div>
    );
};

export default PerformanceInsight;