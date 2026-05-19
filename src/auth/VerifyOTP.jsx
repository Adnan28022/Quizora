import React from 'react';
import { motion } from 'framer-motion';
import { KeyRound, ShieldCheck } from 'lucide-react';

const VerifyOTP = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="text-center mb-10">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <ShieldCheck size={32} />
                </div>
                <h2 className="text-2xl font-black italic uppercase tracking-tighter text-slate-900">Verify <span className="text-emerald-500">Identity</span></h2>
                <p className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-widest leading-none italic">6-digit code sent to your email</p>
            </div>

            <form className="space-y-8">
                {/* OTP Inputs Grid */}
                <div className="flex justify-between gap-2">
                    {[1, 2, 3, 4, 5, 6].map((_, i) => (
                        <input
                            key={i}
                            type="text"
                            maxLength="1"
                            className="w-12 h-14 bg-slate-50 border-2 border-transparent rounded-xl text-center text-xl font-black text-slate-900 outline-none focus:border-indigo-600 focus:bg-white transition-all"
                        />
                    ))}
                </div>

                <div className="space-y-4">
                    <button className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-indigo-100 hover:bg-slate-900 transition-all flex items-center justify-center gap-2">
                        Authorize Terminal
                    </button>

                    <div className="text-center">
                        <button type="button" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-indigo-600 transition-colors">
                            Resend Code (45s)
                        </button>
                    </div>
                </div>
            </form>
        </motion.div>
    );
};

export default VerifyOTP;