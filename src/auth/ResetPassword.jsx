import React from 'react';
import { Lock, ShieldAlert, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ResetPassword = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="text-center mb-10">
                <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <ShieldAlert size={32} />
                </div>
                <h2 className="text-2xl font-black italic uppercase tracking-tighter text-slate-900">Reset <span className="text-purple-600">Key</span></h2>
                <p className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-widest leading-none">Initialize new security credentials</p>
            </div>

            <form className="space-y-6">
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">New Password</label>
                    <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-purple-600 transition-colors" size={18} />
                        <input type="password" placeholder="••••••••" className="w-full bg-slate-50 border border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-purple-600 transition-all" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">Confirm New Password</label>
                    <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-purple-600 transition-colors" size={18} />
                        <input type="password" placeholder="••••••••" className="w-full bg-slate-50 border border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-purple-600 transition-all" />
                    </div>
                </div>

                {/* Strength Meter Placeholder */}
                <div className="flex gap-1 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="w-1/3 bg-red-500"></div>
                    <div className="w-1/3 bg-amber-500"></div>
                    <div className="w-1/3 bg-emerald-500"></div>
                </div>

                <button className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-indigo-100 hover:bg-slate-900 transition-all flex items-center justify-center gap-2 group">
                    Update Credentials <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </form>
        </motion.div>
    );
};

export default ResetPassword;