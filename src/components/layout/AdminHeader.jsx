import React, { useState, useRef, useEffect } from 'react';
import { Bell, Search, User, Menu, PanelLeftClose, PanelLeftOpen, LogOut, Settings, Database, Activity } from 'lucide-react';

const AdminHeader = ({ isCollapsed, setIsCollapsed, setMobileSidebar }) => {
    const [profileOpen, setProfileOpen] = useState(false);
    const profileRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) setProfileOpen(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

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
                    <h2 className="text-sm font-black text-slate-900 uppercase tracking-tighter italic leading-none">Quiz<span className="text-indigo-600">ora</span> System Admin</h2>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Status: <span className="text-emerald-500 italic">Supreme Access Active</span></p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                {/* System Status Indicators */}
                <div className="hidden lg:flex items-center gap-6 px-6 border-r border-slate-100">
                    <div className="flex flex-col items-end">
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter leading-none mb-1">Server Load</p>
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-1 bg-slate-100 rounded-full overflow-hidden">
                                <div className="w-1/3 h-full bg-emerald-500"></div>
                            </div>
                            <span className="text-[10px] font-black text-slate-900 italic">24%</span>
                        </div>
                    </div>
                </div>

                {/* Notifications */}
                <button className="p-2.5 rounded-xl bg-slate-50 text-slate-500 hover:text-indigo-600 relative">
                    <Bell size={18} />
                    <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-indigo-600 rounded-full border-2 border-white"></span>
                </button>

                {/* Profile Section */}
                <div className="relative" ref={profileRef}>
                    <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center gap-3 p-1 pr-3 hover:bg-slate-50 rounded-2xl transition-all group">
                        <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white text-xs font-black shadow-lg shadow-indigo-200 group-hover:bg-slate-900 transition-all uppercase">
                            AD
                        </div>
                        <div className="text-left hidden xl:block leading-tight">
                            <p className="text-xs font-black text-slate-900 uppercase italic">Admin Root</p>
                            <p className="text-[9px] font-bold text-indigo-500 uppercase tracking-wider">Super Administrator</p>
                        </div>
                    </button>

                    {profileOpen && (
                        <div className="absolute right-0 mt-3 w-60 bg-white border border-slate-100 rounded-[1.5rem] shadow-2xl p-2 animate-in fade-in zoom-in-95 duration-200">
                            <div className="p-4 border-b border-slate-50 mb-1">
                                <p className="text-[10px] font-black text-slate-400 uppercase mb-1 italic">Master Node: 001</p>
                                <p className="text-xs font-bold text-slate-800 truncate">admin@quizora.system</p>
                            </div>
                            <div className="space-y-0.5 text-slate-600">
                                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-[11px] font-bold hover:bg-indigo-50 hover:text-indigo-600 rounded-xl transition-all"><Database size={16} /> Database Logs</button>
                                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-[11px] font-bold hover:bg-indigo-50 hover:text-indigo-600 rounded-xl transition-all"><Activity size={16} /> System Health</button>
                                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-[11px] font-bold hover:bg-indigo-50 hover:text-indigo-600 rounded-xl transition-all"><Settings size={16} /> Admin Config</button>
                            </div>
                            <div className="h-[1px] bg-slate-50 my-1 mx-2"></div>
                            <button className="w-full flex items-center gap-3 px-4 py-3 text-[11px] font-black uppercase text-red-500 hover:bg-red-50 rounded-xl transition-all">
                                <LogOut size={16} /> Terminate Root Access
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;