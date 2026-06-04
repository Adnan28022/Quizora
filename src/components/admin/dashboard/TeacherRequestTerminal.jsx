import React, { useEffect } from 'react';
import { Check, X, UserX, Loader2 } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { approveTeacherAction, fetchAllUsers } from '../../../redux/reducer/auth/AuthSlice';
import toast from 'react-hot-toast';

const TeacherRequestTerminal = () => {
    const dispatch = useDispatch();
    const { allUsers: rawUsers, isLoading } = useSelector(state => state.auth);

    // 1. Safe Data Transformation: Ensure we have an array
    const allUsers = Array.isArray(rawUsers) ? rawUsers : (rawUsers?.users || []);

    // Page load par data mangwana
    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch]);

    // 2. Filter: Sirf wo teachers jo approve nahi hue (Safe Check with ?. optional chaining)
    const requests = allUsers.filter(u => u?.role === 'teacher' && !u?.isApproved) || [];

    const handleApprove = (id) => {
        dispatch(approveTeacherAction(id)).then((res) => {
            if (res.meta.requestStatus === 'fulfilled') {
                toast.success("Educator Approved Successfully!");
                // Approve karne ke baad list update karne ke liye dobara fetch karein
                dispatch(fetchAllUsers());
            } else {
                toast.error("Approval Failed");
            }
        });
    };

    if (isLoading) {
        return (
            <div className="bg-white rounded-[2.5rem] p-7 border border-slate-100 shadow-sm h-full flex items-center justify-center">
                <Loader2 className="animate-spin text-indigo-600" size={32} />
            </div>
        );
    }

    return (
        <div className="bg-white rounded-[2.5rem] p-7 border border-slate-100 shadow-sm h-full">
            <div className="flex justify-between items-center mb-8">
                <h3 className="text-lg font-black text-slate-900 tracking-tight uppercase italic leading-none">
                    Teacher <span className="text-indigo-600">Verification</span>
                </h3>
                <div className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-[9px] font-black uppercase tracking-widest">
                    {requests.length} Pending
                </div>
            </div>

            <div className="space-y-4">
                {requests.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-10 text-slate-300">
                        <UserX size={40} className="mb-2" />
                        <p className="text-xs font-black uppercase tracking-widest italic">No New Requests</p>
                    </div>
                ) : (
                    requests.map((req) => (
                        <div key={req._id} className="p-4 bg-slate-50/50 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-white transition-all group">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center text-xs font-black italic uppercase">
                                        {req.name ? req.name.substring(0, 2) : 'TR'}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-800 leading-none">{req.name}</h4>
                                        <p className="text-[10px] font-medium text-slate-400 uppercase truncate max-w-[150px] mt-1.5">{req.email}</p>
                                    </div>
                                </div>
                                <span className="text-[9px] font-bold text-slate-400 uppercase bg-white px-2 py-0.5 rounded-lg border border-slate-100">New</span>
                            </div>
                            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                                <p className="text-[9px] font-black text-indigo-600 uppercase italic">Authorization Req.</p>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleApprove(req._id)}
                                        className="p-2 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-500 hover:text-white transition-all shadow-sm group/btn"
                                        title="Approve Teacher"
                                    >
                                        <Check size={14} />
                                    </button>
                                    <button
                                        className="p-2 bg-red-50 text-red-400 rounded-lg hover:bg-red-500 hover:text-white transition-all shadow-sm"
                                        title="Reject"
                                    >
                                        <X size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default TeacherRequestTerminal;