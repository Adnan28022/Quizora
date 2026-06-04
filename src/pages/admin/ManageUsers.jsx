import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BreadcrumbBanner from '../../components/admin/Banner';
import UserRegistryStats from '../../components/admin/manageusers/UserRegistryStats';
import UserRow from '../../components/admin/manageusers/UserRow';
import { Search, SlidersHorizontal, Loader2, Users } from 'lucide-react';
import { fetchAllUsers } from '../../redux/reducer/auth/AuthSlice';

const ManageUsers = () => {
    const dispatch = useDispatch();

    // Redux State
    const { allUsers, isLoading } = useSelector((state) => state.auth);

    // Local State for Search and Filter
    const [searchTerm, setSearchTerm] = useState("");
    const [activeFilter, setActiveFilter] = useState("all"); // 'all', 'teacher', 'student'

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch]);

    // --- FILTER & SEARCH LOGIC ---
    const filteredUsers = allUsers.filter((user) => {
        const matchesSearch =
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesRole = activeFilter === "all" || user.role === activeFilter;

        return matchesSearch && matchesRole;
    });

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
                {/* Search Bar */}
                <div className="relative w-full lg:w-[450px] group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={18} />
                    <input
                        type="text"
                        placeholder="Search by name or email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-2xl text-xs font-bold outline-none focus:border-indigo-600 focus:shadow-xl focus:shadow-indigo-100/50 transition-all shadow-sm"
                    />
                </div>

                {/* Role Filters */}
                <div className="flex items-center gap-4 w-full lg:w-auto">
                    <div className="flex bg-white p-1 rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                        <button
                            onClick={() => setActiveFilter("all")}
                            className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeFilter === 'all' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'text-slate-400 hover:text-indigo-600'}`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => setActiveFilter("teacher")}
                            className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeFilter === 'teacher' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'text-slate-400 hover:text-indigo-600'}`}
                        >
                            Teachers
                        </button>
                        <button
                            onClick={() => setActiveFilter("student")}
                            className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeFilter === 'student' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'text-slate-400 hover:text-indigo-600'}`}
                        >
                            Students
                        </button>
                    </div>
                    <button className="p-4 bg-white border border-slate-100 text-slate-400 hover:text-indigo-600 rounded-2xl shadow-sm transition-all">
                        <SlidersHorizontal size={20} />
                    </button>
                </div>
            </div>

            {/* 3. The Rich Registry List */}
            <div className="mt-8">
                <div className="flex justify-between items-center mb-6 px-4">
                    <h3 className="text-lg font-black text-slate-900 italic uppercase tracking-tighter">
                        Account <span className="text-indigo-600">Registry</span>
                    </h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Displaying {filteredUsers.length} Users
                    </p>
                </div>

                <div className="no-scrollbar min-h-[400px]">
                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center py-20">
                            <Loader2 className="animate-spin text-indigo-600 mb-4" size={40} />
                            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Fetching Registry...</p>
                        </div>
                    ) : filteredUsers.length > 0 ? (
                        filteredUsers.map((user, i) => (
                            <UserRow key={user._id} user={user} index={i} />
                        ))
                    ) : (
                        <div className="text-center py-20 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
                            <Users className="mx-auto text-slate-300 mb-4" size={48} />
                            <p className="text-slate-500 font-bold italic">No users found matching your criteria.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Pagination Action (Optional for now) */}
            {filteredUsers.length > 10 && (
                <div className="mt-12 text-center">
                    <button className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-indigo-600 transition-all italic underline underline-offset-8">
                        Load More Records
                    </button>
                </div>
            )}
        </div>
    );
};

export default ManageUsers;