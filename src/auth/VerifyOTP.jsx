import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ShieldCheck, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { verifyOTP, reset } from '../redux/reducer/auth/AuthSlice';
import toast from 'react-hot-toast';

const VerifyOTP = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const email = location.state?.email;

    const { isLoading, isSuccess, isError, message } = useSelector(state => state.auth);

    useEffect(() => {
        if (!email) navigate('/auth/signup');
        if (isError) toast.error(message);
        if (isSuccess) {
            toast.success("Identity Verified! Please Login.");
            navigate('/auth/login');
        }
        dispatch(reset());
    }, [isError, isSuccess, message, navigate, dispatch]);

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;
        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
        if (element.nextSibling) element.nextSibling.focus();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(verifyOTP({ email, otp: otp.join("") }));
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="text-center mb-10">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner"><ShieldCheck size={32} /></div>
                <h2 className="text-2xl font-black italic uppercase tracking-tighter text-slate-900">Verify <span className="text-emerald-500">Identity</span></h2>
                <p className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-widest leading-none italic">Code sent to: {email}</p>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="flex justify-between gap-2">
                    {otp.map((data, i) => (
                        <input
                            key={i} type="text" maxLength="1" value={data}
                            onChange={e => handleChange(e.target, i)}
                            onFocus={e => e.target.select()}
                            className="w-12 h-14 bg-slate-50 border-2 border-transparent rounded-xl text-center text-xl font-black text-slate-900 outline-none focus:border-indigo-600 focus:bg-white transition-all"
                        />
                    ))}
                </div>
                <button disabled={isLoading} className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-indigo-100 hover:bg-slate-900 transition-all flex items-center justify-center gap-2">
                    {isLoading ? <Loader2 className="animate-spin" /> : "Authorize Terminal"}
                </button>
            </form>
        </motion.div>
    );
};

export default VerifyOTP;