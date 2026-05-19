import React from 'react';
import BreadcrumbBanner from '../../components/student/Banner';
import ProfileHero from '../../components/student/profile/ProfileHero';
import ProfileForm from '../../components/student/profile/ProfileForm';

const Profile = () => {
    const user = {
        name: "Alex Johnson",
        initials: "AJ",
        email: "alex@quizora.com"
    };

    const breadcrumbs = [{ label: "Profile Settings", path: "/student/profile" }];

    return (
        <div className="pb-10">
            <BreadcrumbBanner
                title="Account Center"
                subtitle="Manage your personal identity and security protocols."
                breadcrumbs={breadcrumbs}
            />

            {/* 1. Profile Header with Avatar */}
            <ProfileHero user={user} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
                {/* 2. Personal Info Form (8 Columns) */}
                <div className="lg:col-span-8">
                    <ProfileForm />
                </div>

                {/* 3. Security & Account Stats (4 Columns) */}
                <div className="lg:col-span-4 flex flex-col gap-8">

                    {/* Delete Account Subtle Button */}
                    <div className="p-6 bg-red-50 rounded-[2rem] border border-red-100 flex items-center justify-between">
                        <div>
                            <p className="text-xs font-bold text-red-600 uppercase tracking-tight">Danger Zone</p>
                            <p className="text-[10px] font-medium text-red-400 mt-1 uppercase italic tracking-widest leading-none">Remove your data permanently</p>
                        </div>
                        <button className="text-red-600 hover:bg-red-600 hover:text-white p-2.5 rounded-xl transition-all border border-red-200">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;