import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, LayoutGrid, Trophy, ArrowRight, LogOut, User } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/reducer/auth/AuthSlice';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/auth/login');
    };

    // Dashboard path based on role
    const getDashboardPath = () => {
        if (user?.role === 'admin') return '/admin/dashboard';
        if (user?.role === 'teacher') return '/teacher/dashboard';
        return '/student/dashboard';
    };

    const navLinks = [
        { name: 'Explore', path: '/', icon: <LayoutGrid size={20} className="text-indigo-600" /> },
        { name: 'Challenges', path: '/quizzes', icon: <Trophy size={20} className="text-purple-600" /> },
        { name: 'Features', path: '/features', icon: <Sparkles size={20} className="text-amber-500" /> },
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-4 md:px-10 ${scrolled ? 'py-2' : 'py-5'}`}>
                <div className={`max-w-7xl mx-auto px-6 py-3 rounded-2xl flex justify-between items-center transition-all ${scrolled ? 'bg-white shadow-xl border border-slate-100' : 'bg-white/50 backdrop-blur-md border border-white/30'}`}>

                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="relative flex items-center justify-center">
                            <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-xl rotate-12 group-hover:rotate-0 transition-all duration-500"></div>
                            <Sparkles className="absolute text-white" size={20} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase italic">Quiz<span className="text-indigo-600">ora</span></span>
                            <span className="text-[10px] font-bold text-indigo-400 tracking-[0.2em] uppercase leading-none">Intelligence</span>
                        </div>
                    </Link>

                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link key={link.name} to={link.path} className={`text-sm font-bold uppercase tracking-widest transition-all ${location.pathname === link.path ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-600'}`}>
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center gap-4">
                        {user ? (
                            <div className="flex items-center gap-4">
                                <Link to={getDashboardPath()} className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 text-slate-900 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-indigo-50 transition-all">
                                    <User size={14} /> My Dashboard
                                </Link>
                                <button onClick={handleLogout} className="p-2.5 text-red-500 hover:bg-red-50 rounded-xl transition-all">
                                    <LogOut size={20} />
                                </button>
                            </div>
                        ) : (
                            <>
                                <Link to="/auth/login" className="px-5 py-2 text-sm font-bold text-slate-700 hover:text-indigo-600">Login</Link>
                                <Link to="/auth/signup" className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-indigo-600 transition-all flex items-center gap-2">
                                    Get Started <ArrowRight size={16} />
                                </Link>
                            </>
                        )}
                    </div>

                    <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu logic same with Auth Check */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed inset-0 bg-white z-[110] lg:hidden flex flex-col p-8">
                        <div className="flex justify-between items-center mb-12">
                            <span className="text-2xl font-black italic">QUIZ<span className="text-indigo-600">ORA</span></span>
                            <button onClick={() => setIsOpen(false)} className="p-2 bg-slate-100 rounded-full"><X size={28} /></button>
                        </div>
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} className="flex items-center gap-4 text-3xl font-black text-slate-800 uppercase italic">
                                    {link.icon} {link.name}
                                </Link>
                            ))}
                        </div>
                        <div className="mt-auto flex flex-col gap-4">
                            {user ? (
                                <button onClick={handleLogout} className="w-full py-5 bg-red-500 text-white rounded-2xl font-bold text-xl uppercase">Logout</button>
                            ) : (
                                <>
                                    <Link to="/auth/signup" onClick={() => setIsOpen(false)} className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-bold text-xl text-center">SIGN UP FREE</Link>
                                    <Link to="/auth/login" onClick={() => setIsOpen(false)} className="w-full py-5 border-2 border-slate-100 rounded-2xl font-bold text-slate-500 text-xl text-center">LOG IN</Link>
                                </>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;