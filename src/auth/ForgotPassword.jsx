import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, ShieldQuestion } from 'lucide-react';
import { motion } from 'framer-motion';

const ForgotPassword = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="text-center mb-10">
                <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <ShieldQuestion size={32} />
                </div>
                <h2 className="text-2xl font-black italic uppercase tracking-tighter text-slate-900">Lost <span className="text-indigo-600">Access?</span></h2>
                <p className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-widest leading-none">Enter email to recover your security key</p>
            </div>

            <form className="space-y-6">
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">Registered Email</label>
                    <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={18} />
                        <input type="email" placeholder="name@domain.com" className="w-full bg-slate-50 border border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-indigo-600 transition-all" />
                    </div>
                </div>

                <button className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-indigo-100 hover:bg-slate-900 transition-all flex items-center justify-center gap-2 group">
                    Request OTP <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </form>

            <div className="mt-10 text-center">
                <Link to="/auth/login" className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors">
                    Return to Login
                </Link>
            </div>
        </motion.div>
    );
};

export default ForgotPassword;