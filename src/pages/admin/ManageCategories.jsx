import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BreadcrumbBanner from '../../components/admin/Banner';
import { LayoutGrid, Plus, Trash2, Loader2, Tag, Database, Search } from 'lucide-react';
import { fetchCategories, addCategory, removeCategory } from '../../redux/reducer/category/CategorySlice';
import toast from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';

const ManageCategories = () => {
    const dispatch = useDispatch();
    const { categories, isLoading } = useSelector((state) => state.category);

    const [newCategory, setNewCategory] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const handleAddCategory = async (e) => {
        e.preventDefault();
        if (!newCategory.trim()) return toast.error("Category name is required");

        try {
            await dispatch(addCategory({ name: newCategory })).unwrap();
            toast.success("Category added successfully!");
            setNewCategory("");
        } catch (err) {
            toast.error(err || "Failed to add category");
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure? All quizzes in this category might be affected.")) {
            try {
                await dispatch(removeCategory(id)).unwrap();
                toast.success("Category deleted");
            } catch (err) {
                toast.error(err || "Failed to delete");
            }
        }
    };

    // Filter categories based on search
    const filteredCategories = categories.filter(cat =>
        cat.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const breadcrumbs = [{ label: "Content Taxonomy", path: "/admin/categories" }];

    return (
        <div className="pb-10 px-2">
            <BreadcrumbBanner
                title="Taxonomy Control"
                subtitle="Organize quizzes into structured categories for better discoverability."
                breadcrumbs={breadcrumbs}
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">

                {/* --- Left Column: Add New Category --- */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm sticky top-24">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl">
                                <Plus size={20} />
                            </div>
                            <h3 className="text-xl font-black italic uppercase tracking-tighter">Create <span className="text-indigo-600">New</span></h3>
                        </div>

                        <form onSubmit={handleAddCategory} className="space-y-4">
                            <div>
                                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2 block ml-2 italic">Category Name</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Web Development"
                                    value={newCategory}
                                    onChange={(e) => setNewCategory(e.target.value)}
                                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-indigo-600 focus:bg-white transition-all text-sm font-bold"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl shadow-indigo-100 hover:bg-slate-900 transition-all flex items-center justify-center gap-2"
                            >
                                {isLoading ? <Loader2 className="animate-spin" size={16} /> : "Register Category"}
                            </button>
                        </form>
                    </div>
                </div>

                {/* --- Right Column: Category List --- */}
                <div className="lg:col-span-2">
                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm min-h-[500px]">

                        {/* Search & Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 bg-slate-900 text-white rounded-xl">
                                    <LayoutGrid size={20} />
                                </div>
                                <h3 className="text-xl font-black italic uppercase tracking-tighter">Category <span className="text-indigo-600">Registry</span></h3>
                            </div>

                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                                <input
                                    type="text"
                                    placeholder="Search categories..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold outline-none focus:border-indigo-300 transition-all"
                                />
                            </div>
                        </div>

                        {/* List Area */}
                        {isLoading && categories.length === 0 ? (
                            <div className="flex justify-center py-20"><Loader2 className="animate-spin text-indigo-600" size={40} /></div>
                        ) : filteredCategories.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <AnimatePresence>
                                    {filteredCategories.map((cat, i) => (
                                        <motion.div
                                            key={cat._id}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ delay: i * 0.05 }}
                                            className="group p-5 bg-slate-50 border border-slate-100 rounded-[1.8rem] flex items-center justify-between hover:bg-white hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-50/50 transition-all"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-indigo-600 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                                    <Tag size={16} />
                                                </div>
                                                <span className="text-sm font-black text-slate-700 uppercase italic tracking-tight">{cat.name}</span>
                                            </div>
                                            <button
                                                onClick={() => handleDelete(cat._id)}
                                                className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-20 opacity-30">
                                <Database size={48} className="mb-4" />
                                <p className="font-bold italic uppercase text-xs tracking-widest">No matching taxonomies found</p>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ManageCategories;