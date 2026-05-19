import React from 'react';
import { Type, Clock, Hash, LayoutGrid } from 'lucide-react';

const BasicDetailsForm = () => {
    return (
        <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-xl font-black text-slate-900 italic uppercase tracking-tighter mb-10">General <span className="text-indigo-600">Configuration</span></h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Title */}
                <div className="space-y-2 md:col-span-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">Quiz Title</label>
                    <div className="relative group">
                        <Type className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={18} />
                        <input type="text" placeholder="e.g. Advanced System Design Challenge" className="w-full bg-slate-50 border border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-indigo-600 transition-all shadow-inner" />
                    </div>
                </div>

                {/* Category */}
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">Category</label>
                    <div className="relative group">
                        <LayoutGrid className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={18} />
                        <select className="w-full bg-slate-50 border border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-indigo-600 transition-all shadow-inner appearance-none cursor-pointer">
                            <option>Development</option>
                            <option>Business</option>
                            <option>Science</option>
                        </select>
                    </div>
                </div>

                {/* Duration */}
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">Time Limit (Minutes)</label>
                    <div className="relative group">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={18} />
                        <input type="number" placeholder="e.g. 30" className="w-full bg-slate-50 border border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-indigo-600 transition-all shadow-inner" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasicDetailsForm;