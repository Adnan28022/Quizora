import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const BreadcrumbBanner = ({ title, subtitle, breadcrumbs }) => {
    return (
        <div className="mb-10 px-1">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-slate-400 mb-4"
            >
                <Link to="/admin/dashboard" className="hover:text-indigo-600 transition-colors">
                    <Home size={14} />
                </Link>
                {breadcrumbs.map((item, index) => (
                    <React.Fragment key={index}>
                        <ChevronRight size={14} />
                        <Link
                            to={item.path}
                            className={`text-[10px] font-bold uppercase tracking-widest hover:text-indigo-600 transition-colors ${index === breadcrumbs.length - 1 ? 'text-indigo-600' : ''}`}
                        >
                            {item.label}
                        </Link>
                    </React.Fragment>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
            >
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight italic uppercase">
                    {title}
                </h1>
                <p className="text-sm text-slate-500 mt-1 font-medium italic">{subtitle}</p>
            </motion.div>
        </div>
    );
};

export default BreadcrumbBanner;