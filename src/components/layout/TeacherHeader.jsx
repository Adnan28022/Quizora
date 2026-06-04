import React, { useState, useRef, useEffect } from 'react';
import { Bell, Search, User, Menu, PanelLeftClose, PanelLeftOpen, LogOut, Settings, ExternalLink } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { logout } from '../../redux/reducer/auth/AuthSlice';

const TeacherHeader = ({ isCollapsed, setIsCollapsed, setMobileSidebar }) => {
    const [profileOpen, setProfileOpen] = useState(false);
    const profileRef = useRef(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) setProfileOpen(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/auth/login');
    };

    return (
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-40 px-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="p-2.5 bg-slate-50 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 rounded-xl transition-all hidden md:block"
                >
                    {isCollapsed ? <PanelLeftOpen size={20} /> : <PanelLeftClose size={20} />}
                </button>
                <button onClick={() => setMobileSidebar(true)} className="md:hidden p-2 text-slate-600"><Menu size={24} /></button>
                <div className="hidden sm:block pl-2">
                    <h2 className="text-sm font-black text-slate-900 uppercase tracking-tighter italic leading-none">Quiz<span className="text-indigo-600">ora</span> Educator HQ</h2>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1 italic">Control Mode: <span className="text-indigo-500">Expert Active</span></p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                {/* Site View Button */}
                <Link
                    to="/"
                    className="hidden sm:flex items-center gap-2 px-4 py-2.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-indigo-600 transition-all shadow-lg shadow-slate-100"
                >
                    <ExternalLink size={14} /> View Site
                </Link>

                <div className="relative hidden lg:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={14} />
                    <input type="text" placeholder="Search data..." className="bg-slate-50 border border-slate-100 rounded-xl pl-9 pr-4 py-2 text-xs focus:outline-none focus:border-indigo-500 w-48 xl:w-64 font-bold" />
                </div>

                {/* Notifications */}
                <button className="p-2.5 rounded-xl bg-slate-50 text-slate-500 hover:text-indigo-600 relative">
                    <Bell size={18} />
                    <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>

                <div className="relative" ref={profileRef}>
                    <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center gap-3 p-1 pr-3 hover:bg-slate-50 rounded-2xl transition-all group">
                        <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white text-xs font-black shadow-lg shadow-slate-200 group-hover:bg-indigo-600 transition-all uppercase">
                            {user?.name?.substring(0, 2) || "TR"}
                        </div>
                        <div className="text-left hidden xl:block leading-tight">
                            <p className="text-xs font-black text-slate-900 uppercase">{user?.name || "Educator"}</p>
                            <p className="text-[9px] font-bold text-indigo-500 uppercase tracking-wider italic">Senior Faculty</p>
                        </div>
                    </button>

                    {profileOpen && (
                        <div className="absolute right-0 mt-3 w-60 bg-white border border-slate-100 rounded-[1.5rem] shadow-2xl p-2 animate-in fade-in zoom-in-95 duration-200">
                            <div className="p-4 border-b border-slate-50 mb-1">
                                <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Faculty Identity</p>
                                <p className="text-xs font-bold text-slate-800 truncate">{user?.email}</p>
                            </div>
                            <div className="space-y-0.5 text-slate-600">
                                <Link to="/teacher/settings" className="w-full flex items-center gap-3 px-4 py-2.5 text-[11px] font-bold hover:bg-indigo-50 hover:text-indigo-600 rounded-xl transition-all"><User size={16} /> Educator Profile</Link>
                                <Link to="/teacher/settings" className="w-full flex items-center gap-3 px-4 py-2.5 text-[11px] font-bold hover:bg-indigo-50 hover:text-indigo-600 rounded-xl transition-all"><Settings size={16} /> Panel Settings</Link>
                            </div>
                            <div className="h-[1px] bg-slate-50 my-1 mx-2"></div>
                            <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-[11px] font-black uppercase text-red-500 hover:bg-red-50 rounded-xl transition-all">
                                <LogOut size={16} /> Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default TeacherHeader;