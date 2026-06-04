import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Lock, ShieldAlert, ArrowRight, KeyRound, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword, reset } from '../redux/reducer/auth/AuthSlice';
import toast from 'react-hot-toast';

const ResetPassword = () => {
    const [formData, setFormData] = useState({
        otp: '',
        newPassword: '',
        confirmPassword: ''
    });

    const { otp, newPassword, confirmPassword } = formData;

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Forgot Password page se email le kar ana
    const email = location.state?.email;

    const { isLoading, isSuccess, isError, message } = useSelector(state => state.auth);

    useEffect(() => {
        // Agar email nahi hai (direct access), to forgot password par bhej do
        if (!email) {
            toast.error("Access Denied. Please request OTP first.");
            navigate('/auth/forgot-password');
        }

        if (isError) toast.error(message);

        if (isSuccess) {
            toast.success("Security Key Updated Successfully!");
            navigate('/auth/login');
        }

        dispatch(reset());
    }, [isError, isSuccess, message, navigate, dispatch, email]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            return toast.error("Security keys do not match!");
        }

        if (otp.length < 6) {
            return toast.error("Please enter a valid 6-digit OTP.");
        }

        dispatch(resetPassword({ email, otp, newPassword }));
    };

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-center mb-10">
                <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <ShieldAlert size={32} />
                </div>
                <h2 className="text-2xl font-black italic uppercase tracking-tighter text-slate-900">Reset <span className="text-purple-600">Key</span></h2>
                <p className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-widest leading-none">Initialize new security credentials</p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
                {/* OTP Field */}
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">6-Digit OTP</label>
                    <div className="relative group">
                        <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-purple-600 transition-colors" size={18} />
                        <input
                            required
                            type="text"
                            maxLength="6"
                            value={otp}
                            onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                            placeholder="Enter 6-digit code"
                            className="w-full bg-slate-50 border border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-purple-600 transition-all"
                        />
                    </div>
                </div>

                {/* New Password */}
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">New Security Key</label>
                    <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-purple-600 transition-colors" size={18} />
                        <input
                            required
                            type="password"
                            value={newPassword}
                            onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                            placeholder="••••••••"
                            className="w-full bg-slate-50 border border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-purple-600 transition-all"
                        />
                    </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">Re-type Security Key</label>
                    <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-purple-600 transition-colors" size={18} />
                        <input
                            required
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            placeholder="••••••••"
                            className="w-full bg-slate-50 border border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-purple-600 transition-all"
                        />
                    </div>
                </div>

                {/* Strength Meter */}
                <div className="flex gap-1 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className={`transition-all duration-500 ${newPassword.length > 0 ? 'w-1/3 bg-red-500' : 'w-0'}`}></div>
                    <div className={`transition-all duration-500 ${newPassword.length > 5 ? 'w-1/3 bg-amber-500' : 'w-0'}`}></div>
                    <div className={`transition-all duration-500 ${newPassword.length > 8 ? 'w-1/3 bg-emerald-500' : 'w-0'}`}></div>
                </div>

                <button
                    disabled={isLoading}
                    type="submit"
                    className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-indigo-100 hover:bg-slate-900 transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
                >
                    {isLoading ? <Loader2 className="animate-spin" /> : <>Update Credentials <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>}
                </button>
            </form>

            <div className="mt-8 text-center">
                <Link to="/auth/login" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors">
                    Back to Terminal
                </Link>
            </div>
        </motion.div>
    );
};

export default ResetPassword;