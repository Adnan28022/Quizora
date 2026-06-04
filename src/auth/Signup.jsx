import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, ArrowRight, Loader2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, reset } from '../redux/reducer/auth/AuthSlice';
import toast from 'react-hot-toast';

const Signup = () => {
    const [role, setRole] = useState('student');
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading, isSuccess, isError, message, otpSent } = useSelector(state => state.auth);

    useEffect(() => {
        if (isError) toast.error(message);
        if (isSuccess && otpSent) {
            toast.success("OTP Sent to your email!");
            navigate('/auth/verify-otp', { state: { email: formData.email } });
        }
        dispatch(reset());
    }, [isError, isSuccess, otpSent, message, navigate, dispatch]);

    const handleSignup = (e) => {
        e.preventDefault();
        dispatch(registerUser({ ...formData, role }));
    };

    return (
        <div>
            <div className="text-center mb-10">
                <h2 className="text-2xl font-black italic uppercase tracking-tighter text-slate-900">New <span className="text-indigo-600">Registry</span></h2>
                <p className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-widest leading-none">Join the intelligence network</p>
            </div>

            <form className="space-y-5" onSubmit={handleSignup}>
                <div className="flex gap-2 p-1.5 bg-slate-50 rounded-2xl mb-6">
                    <button
                        type="button"
                        onClick={() => setRole('student')}
                        className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${role === 'student' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400'}`}>
                        Student
                    </button>
                    <button
                        type="button"
                        onClick={() => setRole('teacher')}
                        className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${role === 'teacher' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400'}`}>
                        Teacher
                    </button>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">Full Identity</label>
                    <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={18} />
                        <input required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" className="w-full bg-slate-50 border border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-indigo-600 transition-all" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">Email Link</label>
                    <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={18} />
                        <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@domain.com" className="w-full bg-slate-50 border border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-indigo-600 transition-all" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">Secure Key</label>
                    <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={18} />
                        <input required type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} placeholder="••••••••" className="w-full bg-slate-50 border border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-indigo-600 transition-all" />
                    </div>
                </div>

                <button disabled={isLoading} className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-indigo-100 hover:bg-slate-900 transition-all mt-4 flex items-center justify-center gap-2 group">
                    {isLoading ? <Loader2 className="animate-spin" /> : <>Initialize Registry <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>}
                </button>
            </form>

            <p className="mt-8 text-center text-xs font-bold text-slate-500">
                Already Registered? <Link to="/auth/login" className="text-indigo-600 hover:underline ml-1">Connect Here</Link>
            </p>
        </div>
    );
};

export default Signup;