import React from 'react';
import { Plus, Trash2, CheckCircle2, Circle } from 'lucide-react';

const QuestionBuilder = () => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Single Question Box */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-sm relative">
                <div className="flex justify-between items-center mb-8">
                    <span className="text-xs font-black text-indigo-600 uppercase tracking-[0.3em] italic leading-none">Question #01</span>
                    <button className="text-red-400 hover:text-red-600 transition-colors"><Trash2 size={18} /></button>
                </div>

                <div className="space-y-6">
                    {/* Question Text */}
                    <textarea
                        placeholder="Type your question here..."
                        className="w-full bg-slate-50 border border-transparent rounded-2xl p-6 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-indigo-600 transition-all shadow-inner min-h-[100px] resize-none"
                    />

                    {/* Options Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((opt) => (
                            <div key={opt} className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                    {opt === 1 ? <CheckCircle2 className="text-emerald-500" size={18} /> : <Circle className="text-slate-300" size={18} />}
                                </div>
                                <input
                                    type="text"
                                    placeholder={`Option ${opt}`}
                                    className={`w-full pl-12 pr-4 py-4 rounded-xl text-xs font-bold transition-all shadow-sm outline-none border-2
                                        ${opt === 1 ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-slate-50 bg-slate-50 text-slate-500 focus:border-indigo-600 focus:bg-white'}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Add Question Button */}
            <button className="w-full py-6 border-2 border-dashed border-slate-200 rounded-[2.5rem] text-slate-400 font-black uppercase text-xs tracking-widest hover:border-indigo-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all flex items-center justify-center gap-3">
                <Plus size={20} /> Add Next Question
            </button>
        </div>
    );
};

export default QuestionBuilder;