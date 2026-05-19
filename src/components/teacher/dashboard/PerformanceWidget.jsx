import React from 'react';
import { AlertCircle, Target } from 'lucide-react';

const PerformanceWidget = () => {
    return (
        <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden h-full flex flex-col justify-between shadow-xl">
            <div className="relative z-10">
                <div className="w-10 h-10 bg-indigo-600/30 rounded-xl flex items-center justify-center text-indigo-400 mb-6">
                    <Target size={20} />
                </div>
                <h3 className="text-xl font-bold italic tracking-tight mb-4">Class Insights</h3>

                <div className="space-y-5">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                        <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-1">Strongest Topic</p>
                        <p className="text-sm font-bold">Frontend Lifecycle</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                        <div className="flex items-center gap-2 mb-1">
                            <AlertCircle size={14} className="text-red-400" />
                            <p className="text-[10px] font-bold text-red-400 uppercase tracking-widest">Needs Attention</p>
                        </div>
                        <p className="text-sm font-bold">Asynchronous Logic</p>
                    </div>
                </div>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-white/5">
                <button className="w-full py-3 bg-indigo-600 text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-indigo-700 transition-all">
                    Download Full Report
                </button>
            </div>

            <div className="absolute top-[-10%] right-[-10%] w-32 h-32 bg-indigo-600/10 rounded-full blur-[40px]"></div>
        </div>
    );
};

export default PerformanceWidget;