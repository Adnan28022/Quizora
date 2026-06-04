import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, UserCheck, Loader2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, reset } from '../redux/reducer/auth/AuthSlice';
import toast from 'react-hot-toast';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const { email, password } = formData;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isError) toast.error(message);
        if (isSuccess || user) {
            const rolePath = user?.role === 'admin' ? '/admin/dashboard' :
                user?.role === 'teacher' ? '/teacher/dashboard' : '/student/dashboard';
            navigate(rolePath);
        }
        dispatch(reset());
    }, [user, isError, isSuccess, message, navigate, dispatch]);

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }));
    };

    return (
        <div>
            <div className="text-center mb-10">
                <h2 className="text-2xl font-black italic uppercase tracking-tighter text-slate-900">Access <span className="text-indigo-600">Portal</span></h2>
                <p className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-widest leading-none">Enter credentials to establish connection</p>
            </div>

            <form className="space-y-6" onSubmit={handleLogin}>
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">Email Key</label>
                    <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={18} />
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="e.g. name@domain.com"
                            className="w-full bg-slate-50 border border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-indigo-600 transition-all"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">Security Key</label>
                        <Link to="/auth/forgot-password" size={16} className="text-[10px] font-black text-indigo-600 uppercase hover:underline">Lost Key?</Link>
                    </div>
                    <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={18} />
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            placeholder="••••••••"
                            className="w-full bg-slate-50 border border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-indigo-600 transition-all"
                        />
                    </div>
                </div>

                <button
                    disabled={isLoading}
                    type="submit"
                    className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-indigo-100 hover:bg-slate-900 transition-all active:scale-95 flex items-center justify-center gap-2 group disabled:opacity-70"
                >
                    {isLoading ? <Loader2 className="animate-spin" /> : <>Establish Connection <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>}
                </button>
            </form>

            <p className="mt-8 text-center text-xs font-bold text-slate-500 italic">
                New Explorer? <Link to="/auth/signup" className="text-indigo-600 hover:underline ml-1 font-black">Create Account</Link>
            </p>
        </div>
    );
};

export default Login;