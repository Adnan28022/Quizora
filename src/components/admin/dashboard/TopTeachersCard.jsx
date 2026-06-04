import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Trophy, Star, ArrowUpRight, Loader2 } from 'lucide-react';
import { fetchAllUsers } from '../../../redux/reducer/auth/AuthSlice'; // Apna sahi path check karlein

const TopTeachersCard = () => {
    const dispatch = useDispatch();

    // Redux store se users aur loading state nikalna
    const { allUsers, isLoading } = useSelector((state) => state.auth);

    useEffect(() => {
        // Sirf tab fetch karein agar users list empty ho
        if (allUsers.length === 0) {
            dispatch(fetchAllUsers());
        }
    }, [dispatch, allUsers.length]);

    // Role 'teacher' wale users ko filter karna aur top 3-4 dikhana
    const teachers = allUsers
        .filter(user => user.role === 'teacher' && user.isApproved)
        .slice(0, 3); // Sirf top 3 teachers

    return (
        <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden h-full shadow-2xl">
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2.5 bg-amber-400 rounded-xl text-slate-900 shadow-lg shadow-amber-200">
                        <Trophy size={20} />
                    </div>
                    <h3 className="text-xl font-black italic tracking-tighter uppercase">
                        Star <span className="text-amber-400">Educators</span>
                    </h3>
                </div>

                <div className="space-y-6">
                    {isLoading ? (
                        <div className="flex justify-center p-10">
                            <Loader2 className="animate-spin text-amber-400" size={32} />
                        </div>
                    ) : teachers.length > 0 ? (
                        teachers.map((teacher, i) => (
                            <div key={teacher._id} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 group hover:bg-white/10 transition-all cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <span className="text-lg font-black italic text-slate-600">#0{i + 1}</span>
                                    <div>
                                        <h4 className="text-sm font-bold tracking-tight">{teacher.name}</h4>
                                        <div className="flex items-center gap-2 mt-1">
                                            <Star size={10} className="text-amber-400 fill-amber-400" />
                                            {/* Rating backend me nahi hai to hum default 4.8+ dikha rahe hain */}
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                                4.8 • Verified Educator
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <ArrowUpRight size={18} className="text-slate-500 group-hover:text-amber-400 transition-colors" />
                            </div>
                        ))
                    ) : (
                        <p className="text-slate-500 text-center py-4 italic">No verified teachers found.</p>
                    )}
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px]"></div>
        </div>
    );
};

export default TopTeachersCard;