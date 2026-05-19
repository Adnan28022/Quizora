import React from 'react';
import { motion } from 'framer-motion';
import { Lock, ShieldCheck, KeyRound, EyeOff } from 'lucide-react';

const UpdatePassword = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-sm h-full"
        >
            <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl shadow-inner">
                    <KeyRound size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-black text-slate-900 italic uppercase tracking-tighter leading-none">Update <span className="text-indigo-600">Password</span></h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">Secure your terminal session</p>
                </div>
            </div>

            <form className="space-y-6">
                {/* Current Password */}
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">Current Security Key</label>
                    <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={18} />
                        <input type="password" placeholder="••••••••" className="w-full bg-slate-50 border border-transparent rounded-2xl py-4 pl-12 pr-12 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-indigo-600 transition-all" />
                        <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-indigo-600 transition-colors">
                            <EyeOff size={18} />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* New Password */}
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">New Security Key</label>
                        <div className="relative group">
                            <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={18} />
                            <input type="password" placeholder="••••••••" className="w-full bg-slate-50 border border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-indigo-600 transition-all" />
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">Verify New Key</label>
                        <div className="relative group">
                            <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={18} />
                            <input type="password" placeholder="••••••••" className="w-full bg-slate-50 border border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-indigo-600 transition-all" />
                        </div>
                    </div>
                </div>

                {/* Password Requirements */}
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 mt-8">
                    <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-3 italic leading-none">Security Requirements:</p>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase italic">
                            <div className="w-1 h-1 bg-indigo-600 rounded-full"></div> Minimum 8 characters long
                        </li>
                        <li className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase italic">
                            <div className="w-1 h-1 bg-indigo-600 rounded-full"></div> At least one uppercase letter
                        </li>
                    </ul>
                </div>

                <div className="pt-4">
                    <button type="submit" className="w-full md:w-auto px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-xl shadow-indigo-100 hover:bg-slate-900 transition-all active:scale-95">
                        Synchronize New Password
                    </button>
                </div>
            </form>
        </motion.div>
    );
};

export default UpdatePassword;