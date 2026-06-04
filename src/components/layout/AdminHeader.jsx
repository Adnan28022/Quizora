import React, { useState, useRef, useEffect } from 'react';
import { User, Menu, PanelLeftClose, PanelLeftOpen, LogOut, ExternalLink, Database } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/reducer/auth/authSlice';

const AdminHeader = ({ isCollapsed, setIsCollapsed, setMobileSidebar }) => {
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
                <button onClick={() => setIsCollapsed(!isCollapsed)} className="p-2.5 bg-slate-50 hover:bg-indigo-50 text-slate-600 rounded-xl hidden md:block">
                    {isCollapsed ? <PanelLeftOpen size={20} /> : <PanelLeftClose size={20} />}
                </button>
                <button onClick={() => setMobileSidebar(true)} className="md:hidden p-2 text-slate-600"><Menu size={24} /></button>
                <div className="hidden sm:block pl-2">
                    <h2 className="text-sm font-black text-slate-900 uppercase tracking-tighter italic leading-none">Quiz<span className="text-indigo-600">ora</span> System</h2>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Status: <span className="text-emerald-500 italic">Supreme Access Active</span></p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                {/* Site View Button (New) */}
                <Link to="/" className="hidden sm:flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-indigo-600 transition-all">
                    <ExternalLink size={14} /> Site View
                </Link>

                {/* Profile Section */}
                <div className="relative" ref={profileRef}>
                    <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center gap-3 p-1 pr-3 hover:bg-slate-50 rounded-2xl transition-all group">
                        <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white text-xs font-black shadow-lg shadow-indigo-200 uppercase">
                            {user?.name?.substring(0, 2) || "AD"}
                        </div>
                        <div className="text-left hidden xl:block leading-tight">
                            <p className="text-xs font-black text-slate-900 uppercase italic">{user?.name || "Admin Root"}</p>
                            <p className="text-[9px] font-bold text-indigo-500 uppercase tracking-wider">Super Administrator</p>
                        </div>
                    </button>

                    {profileOpen && (
                        <div className="absolute right-0 mt-3 w-60 bg-white border border-slate-100 rounded-[1.5rem] shadow-2xl p-2">
                            <div className="p-4 border-b border-slate-50 mb-1">
                                <p className="text-[10px] font-black text-slate-400 uppercase mb-1 italic italic">Master Node: Active</p>
                                <p className="text-xs font-bold text-slate-800 truncate">{user?.email}</p>
                            </div>
                            <Link to="/admin/system-logs" className="w-full flex items-center gap-3 px-4 py-2.5 text-[11px] font-bold hover:bg-indigo-50 rounded-xl transition-all">
                                <Database size={16} /> System Logs
                            </Link>
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

export default AdminHeader;