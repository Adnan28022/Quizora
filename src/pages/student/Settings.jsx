import React from 'react';
import BreadcrumbBanner from '../../components/student/Banner';
import UpdatePassword from '../../components/student/settings/UpdatePassword';

const Settings = () => {
    const breadcrumbs = [{ label: "Terminal Settings", path: "/student/settings" }];

    return (
        <div className="pb-10">
            <BreadcrumbBanner
                title="System Configuration"
                subtitle="Fine-tune your account security and notification preferences."
                breadcrumbs={breadcrumbs}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
                {/* 1. Main Security Column (8 Columns) */}
                <div className="lg:col-span-12">
                    <UpdatePassword />
                </div>
            </div>

            {/* Global Session Action */}
            <div className="mt-12 p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest italic">Active Sessions</h4>
                    <p className="text-xs font-medium text-slate-500 mt-1 italic leading-none">You are currently logged in on 2 devices.</p>
                </div>
                <button className="px-6 py-3 border-2 border-red-50 text-red-500 hover:bg-red-50 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
                    Sign out of all other sessions
                </button>
            </div>
        </div>
    );
};

export default Settings;