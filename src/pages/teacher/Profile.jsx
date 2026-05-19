import React from 'react';
import BreadcrumbBanner from '../../components/teacher/Banner';
import TeacherProfileHero from '../../components/student/profile/ProfileHero';
import TeacherProfileForm from '../../components/teacher/profile/ProfileForm';

const TeacherProfile = () => {
    const user = { name: "Sarah Miller", initials: "SM" };
    const breadcrumbs = [{ label: "Faculty Profile", path: "/teacher/settings" }];

    return (
        <div className="pb-10">
            <BreadcrumbBanner
                title="Educator Command Center"
                subtitle="Manage your professional identity and faculty credentials."
                breadcrumbs={breadcrumbs}
            />

            <TeacherProfileHero user={user} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
                <div className="lg:col-span-12">
                    <TeacherProfileForm />
                </div>
            </div>
        </div>
    );
};

export default TeacherProfile;