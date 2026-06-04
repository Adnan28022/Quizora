import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/reducer/auth/AuthSlice';
import { LayoutDashboard, Users, LayoutGrid, ShieldCheck, BarChart3, LogOut, GraduationCap, X } from 'lucide-react';

const AdminSidebar = ({ isCollapsed, isMobile, setMobileSidebar }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/auth/login');
    };

    const adminMenu = [
        { name: "Global Overview", path: "/admin/dashboard", icon: <LayoutDashboard size={18} /> },
        { name: "Manage Users", path: "/admin/users", icon: <Users size={18} /> },
        { name: "Quiz Approvals", path: "/admin/approvals", icon: <ShieldCheck size={18} /> },
        { name: "Manage Teachers", path: "/admin/teachers", icon: <GraduationCap size={18} /> },
        { name: "Content Categories", path: "/admin/categories", icon: <LayoutGrid size={20} /> }
    ];

    return (
        <motion.aside
            animate={{ width: isCollapsed ? 85 : 280 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="h-screen bg-[#05070a] text-white flex flex-col sticky top-0 left-0 z-50 overflow-hidden border-r border-white/5"
        >
            <div className="p-6 h-20 flex items-center justify-between gap-3 shrink-0">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/20">
                        <GraduationCap size={22} className="text-white" />
                    </div>
                    {!isCollapsed && (
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xl font-black italic tracking-tighter uppercase">
                            Quiz<span className="text-indigo-500">ora</span>
                        </motion.span>
                    )}
                </div>
                {isMobile && <button onClick={() => setMobileSidebar(false)} className="p-2 text-slate-400"><X size={24} /></button>}
            </div>

            <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto no-scrollbar">
                {!isCollapsed && <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 mb-4 ml-2 opacity-50 italic">System Root</p>}
                {adminMenu.map((item) => (
                    <NavLink key={item.name} to={item.path} onClick={() => isMobile && setMobileSidebar(false)} className={({ isActive }) => `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${isActive ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:bg-white/5 hover:text-white'}`}>
                        <div className="shrink-0 group-hover:scale-110">{item.icon}</div>
                        {!isCollapsed && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[13px] font-semibold">{item.name}</motion.span>}
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t border-white/5 bg-slate-950/40 shrink-0">
                <button onClick={handleLogout} className={`flex items-center gap-4 w-full px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all group ${isCollapsed && !isMobile ? 'justify-center' : ''}`}>
                    <LogOut size={20} className="shrink-0 group-hover:rotate-12 transition-transform" />
                    {!isCollapsed && <span className="text-[13px] font-black uppercase tracking-widest text-red-500">Logout</span>}
                </button>
            </div>
        </motion.aside>
    );
};

export default AdminSidebar;