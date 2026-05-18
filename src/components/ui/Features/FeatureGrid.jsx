import React from 'react';
import { motion } from 'framer-motion';
import { Shield, BarChart3, Users, Award, BookOpen, Clock } from 'lucide-react';

const featureList = [
    {
        title: "Expert Curation",
        desc: "Every quiz is manually uploaded and reviewed by certified educators.",
        icon: <BookOpen className="text-indigo-600" />,
        size: "lg:col-span-2",
        color: "bg-indigo-50"
    },
    {
        title: "Anti-Cheat",
        desc: "Tab-lock and proctoring technology.",
        icon: <Shield className="text-red-500" />,
        size: "lg:col-span-1",
        color: "bg-red-50"
    },
    {
        title: "Detailed Analysis",
        desc: "Deep-dive performance charts for every challenge.",
        icon: <BarChart3 className="text-emerald-600" />,
        size: "lg:col-span-1",
        color: "bg-emerald-50"
    },
    {
        title: "Custom Certificates",
        desc: "Earn shareable certificates verified by the community.",
        icon: <Award className="text-amber-500" />,
        size: "lg:col-span-2",
        color: "bg-amber-50"
    }
];

const FeatureGrid = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featureList.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5 }}
                            className={`${f.size} group relative p-10 rounded-[3rem] ${f.color} border border-transparent hover:border-white hover:shadow-2xl transition-all duration-500`}
                        >
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:rotate-12 transition-transform">
                                {f.icon}
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4 italic tracking-tight uppercase">
                                {f.title}
                            </h3>
                            <p className="text-slate-600 font-medium leading-relaxed italic">
                                {f.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureGrid;