import React from 'react';
import BreadcrumbBanner from '../../components/admin/Banner';
import UserRegistryStats from '../../components/admin/manageusers/UserRegistryStats';
import UserRow from '../../components/admin/manageusers/UserRow';
import { Search, Filter, UserPlus, SlidersHorizontal } from 'lucide-react';

const ManageUsers = () => {
    const usersList = [
        { name: "Alex Johnson", email: "alex@student.com", initials: "AJ", role: "Student", status: "Active", activityCount: 12, joinDate: "Oct 2023" },
        { name: "Sarah Miller", email: "sarah@faculty.com", initials: "SM", role: "Teacher", status: "Active", activityCount: 24, joinDate: "Sep 2023" },
        { name: "David Chen", email: "david@student.com", initials: "DC", role: "Student", status: "Suspended", activityCount: 8, joinDate: "Nov 2023" },
        { name: "Arjun Mehta", email: "arjun@faculty.com", initials: "AM", role: "Teacher", status: "Active", activityCount: 15, joinDate: "Oct 2023" },
        { name: "Emma Watson", email: "emma@student.com", initials: "EW", role: "Student", status: "Active", activityCount: 30, joinDate: "Aug 2023" },
    ];

    const breadcrumbs = [{ label: "User Registry", path: "/admin/users" }];

    return (
        <div className="pb-10 px-2">
            <BreadcrumbBanner
                title="Administrator Oversight"
                subtitle="Manage global user accounts, control access levels, and monitor platform engagement."
                breadcrumbs={breadcrumbs}
            />

            {/* 1. Metric Overview */}
            <UserRegistryStats />

            {/* 2. Advanced Toolbar */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-10">
                <div className="relative w-full lg:w-[450px] group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={18} />
                    <input
                        type="text"
                        placeholder="Search by name, email or registry ID..."
                        className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-2xl text-xs font-bold outline-none focus:border-indigo-600 focus:shadow-xl focus:shadow-indigo-100/50 transition-all shadow-sm"
                    />
                </div>

                <div className="flex items-center gap-4 w-full lg:w-auto">
                    <div className="flex bg-white p-1 rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                        <button className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-indigo-100">All</button>
                        <button className="px-5 py-2.5 text-slate-400 hover:text-indigo-600 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">Teachers</button>
                        <button className="px-5 py-2.5 text-slate-400 hover:text-indigo-600 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">Students</button>
                    </div>
                    <button className="p-4 bg-white border border-slate-100 text-slate-400 hover:text-indigo-600 rounded-2xl shadow-sm transition-all">
                        <SlidersHorizontal size={20} />
                    </button>
                </div>
            </div>

            {/* 3. The Rich Registry List */}
            <div className="mt-8">
                <div className="flex justify-between items-center mb-6 px-4">
                    <h3 className="text-lg font-black text-slate-900 italic uppercase tracking-tighter">Account <span className="text-indigo-600">Registry</span></h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Displaying {usersList.length} of 12,650</p>
                </div>

                <div className="no-scrollbar">
                    {usersList.map((user, i) => (
                        <UserRow key={i} user={user} index={i} />
                    ))}
                </div>
            </div>

            {/* Pagination Action */}
            <div className="mt-12 text-center">
                <button className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-indigo-600 transition-all italic underline underline-offset-8">
                    View More Records
                </button>
            </div>
        </div>
    );
};

export default ManageUsers;