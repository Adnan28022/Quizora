import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, UserCheck } from 'lucide-react';
import toast from 'react-hot-toast';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Mock Data for Roles & Passwords
    const accounts = [
        { role: 'Student', email: 's@q.com', pass: 's123', path: '/student/dashboard' },
        { role: 'Teacher', email: 't@q.com', pass: 't123', path: '/teacher/dashboard' },
        { role: 'Admin', email: 'a@q.com', pass: 'a123', path: '/admin/dashboard' }
    ];

    const handleLogin = (e) => {
        e.preventDefault();

        // Check credentials
        const user = accounts.find(acc => acc.email === email && acc.pass === password);

        if (user) {
            toast.success(`Welcome ${user.role}! Connection Established.`, {
                style: {
                    borderRadius: '15px',
                    background: '#0f172a',
                    color: '#fff',
                    fontSize: '12px',
                    fontWeight: 'bold'
                },
            });

            // Navigate to respective dashboard
            navigate(user.path);
        } else {
            toast.error("Invalid Security Key or Email.", {
                style: {
                    borderRadius: '15px',
                },
            });
        }
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
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="e.g. s@q.com"
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
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password (e.g. s123)"
                            className="w-full bg-slate-50 border border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-indigo-600 transition-all"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-indigo-100 hover:bg-slate-900 transition-all active:scale-95 flex items-center justify-center gap-2 group"
                >
                    Establish Connection <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </form>

            {/* Helper UI for Testing */}
            <div className="mt-10 p-5 bg-slate-50 rounded-[2rem] border border-dashed border-slate-200">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <UserCheck size={14} className="text-indigo-600" /> Active Terminal Keys
                </p>
                <div className="space-y-2">
                    {accounts.map(acc => (
                        <div key={acc.role} className="flex justify-between items-center bg-white p-2 px-3 rounded-xl border border-slate-100">
                            <span className="text-[10px] font-black uppercase text-slate-400">{acc.role}</span>
                            <code className="text-[10px] font-bold text-indigo-600">{acc.email} / {acc.pass}</code>
                        </div>
                    ))}
                </div>
            </div>

            <p className="mt-8 text-center text-xs font-bold text-slate-500 italic">
                New Explorer? <Link to="/auth/signup" className="text-indigo-600 hover:underline ml-1 font-black">Create Account</Link>
            </p>
        </div>
    );
};

export default Login;