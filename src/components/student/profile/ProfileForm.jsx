import React from 'react';
import { User, Mail, Phone, MapPin, Globe, CreditCard } from 'lucide-react';

const ProfileForm = () => {
    return (
        <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-10">
                <h3 className="text-xl font-black text-slate-900 italic uppercase tracking-tighter">Personal <span className="text-indigo-600">Information</span></h3>
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest italic leading-none">Last updated: 2 days ago</span>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Full Name */}
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">Full Name</label>
                    <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={18} />
                        <input type="text" placeholder="Alex Johnson" className="w-full bg-slate-50 border border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-indigo-600 transition-all" />
                    </div>
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">Email Address</label>
                    <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={18} />
                        <input type="email" placeholder="alex@quizora.com" className="w-full bg-slate-50 border border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-indigo-600 transition-all" />
                    </div>
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">Contact Number</label>
                    <div className="relative group">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={18} />
                        <input type="text" placeholder="+1 (234) 567-890" className="w-full bg-slate-50 border border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-indigo-600 transition-all" />
                    </div>
                </div>

                {/* Location */}
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">Location</label>
                    <div className="relative group">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition-colors" size={18} />
                        <input type="text" placeholder="San Francisco, CA" className="w-full bg-slate-50 border border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-indigo-600 transition-all" />
                    </div>
                </div>

                <div className="md:col-span-2 pt-4">
                    <button type="submit" className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-indigo-100 hover:bg-slate-900 transition-all active:scale-95">
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProfileForm;