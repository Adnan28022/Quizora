import React from 'react';
import { User, Mail, Briefcase, GraduationCap, Globe, AlignLeft } from 'lucide-react';

const TeacherProfileForm = () => {
    return (
        <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-sm">
            <h3 className="text-xl font-black text-slate-900 italic uppercase tracking-tighter mb-10">Professional <span className="text-indigo-600">Identity</span></h3>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Full Name */}
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">Public Name</label>
                    <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600" size={18} />
                        <input type="text" defaultValue="Sarah Miller" className="w-full bg-slate-50 border border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-indigo-600 transition-all" />
                    </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">Email Key</label>
                    <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600" size={18} />
                        <input type="email" defaultValue="sarah@quizora.com" className="w-full bg-slate-50 border border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-indigo-600 transition-all" />
                    </div>
                </div>

                {/* Expertise */}
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">Primary Expertise</label>
                    <div className="relative group">
                        <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600" size={18} />
                        <input type="text" defaultValue="Advanced Web Development" className="w-full bg-slate-50 border border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-indigo-600 transition-all" />
                    </div>
                </div>

                {/* Designation */}
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">Current Position</label>
                    <div className="relative group">
                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600" size={18} />
                        <input type="text" defaultValue="Senior Software Architect" className="w-full bg-slate-50 border border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-indigo-600 transition-all" />
                    </div>
                </div>

                {/* Short Bio */}
                <div className="space-y-2 md:col-span-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">Professional Bio</label>
                    <div className="relative group">
                        <AlignLeft className="absolute left-4 top-5 text-slate-300 group-focus-within:text-indigo-600" size={18} />
                        <textarea rows="3" className="w-full bg-slate-50 border border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-indigo-600 transition-all resize-none">I am a passionate educator with over 10 years of experience in system design and architecture.</textarea>
                    </div>
                </div>

                <div className="md:col-span-2 pt-4">
                    <button type="submit" className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-indigo-100 hover:bg-slate-900 transition-all">
                        Update Faculty Registry
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TeacherProfileForm;