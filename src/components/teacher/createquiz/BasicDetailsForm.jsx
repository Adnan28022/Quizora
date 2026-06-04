import React from 'react';
import { Type, Clock, LayoutGrid, Award, AlignLeft } from 'lucide-react';

const BasicDetailsForm = ({ quizData, setQuizData, categories = [] }) => {
    return (
        <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-xl font-black text-slate-900 italic uppercase tracking-tighter mb-10">General <span className="text-indigo-600">Configuration</span></h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 md:col-span-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">Quiz Title</label>
                    <div className="relative group">
                        <Type className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                        <input required type="text" value={quizData.title} onChange={(e) => setQuizData({ ...quizData, title: e.target.value })} placeholder="e.g. Advanced System Design" className="w-full bg-slate-50 border border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-indigo-600 transition-all shadow-inner" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">Category</label>
                    <div className="relative group">
                        <LayoutGrid className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                        <select value={quizData.category} onChange={(e) => setQuizData({ ...quizData, category: e.target.value })} className="w-full bg-slate-50 border border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-indigo-600 transition-all shadow-inner appearance-none cursor-pointer">
                            <option value="">Select Category</option>
                            {Array.isArray(categories) && categories.map(cat => (
                                <option key={cat._id} value={cat._id}>{cat.name}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">Time Limit (Minutes)</label>
                    <div className="relative group">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                        <input required type="number" value={quizData.duration} onChange={(e) => setQuizData({ ...quizData, duration: e.target.value })} placeholder="30" className="w-full bg-slate-50 border border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-indigo-600 transition-all shadow-inner" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">Passing Marks</label>
                    <div className="relative group">
                        <Award className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                        <input required type="number" value={quizData.passingMarks} onChange={(e) => setQuizData({ ...quizData, passingMarks: e.target.value })} placeholder="10" className="w-full bg-slate-50 border border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-indigo-600 transition-all shadow-inner" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">Brief Description</label>
                    <div className="relative group">
                        <AlignLeft className="absolute left-4 top-4 text-slate-300" size={18} />
                        <textarea value={quizData.description} onChange={(e) => setQuizData({ ...quizData, description: e.target.value })} placeholder="Describe the purpose of this assessment..." className="w-full bg-slate-50 border border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-indigo-600 transition-all shadow-inner min-h-[100px]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasicDetailsForm;