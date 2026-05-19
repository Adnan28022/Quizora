import React from 'react';
import { Check } from 'lucide-react';

const QuizStepper = ({ currentStep }) => {
    const steps = ["Quiz Details", "Add Questions", "Review & Publish"];

    return (
        <div className="flex items-center justify-between max-w-3xl mx-auto mb-16 relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 -z-10">
                <div
                    className="h-full bg-indigo-600 transition-all duration-500"
                    style={{ width: `${(currentStep - 1) * 50}%` }}
                />
            </div>

            {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm transition-all duration-300
                        ${currentStep > i + 1 ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' :
                            currentStep === i + 1 ? 'bg-white border-2 border-indigo-600 text-indigo-600 shadow-xl' :
                                'bg-white border-2 border-slate-100 text-slate-300'}`}>
                        {currentStep > i + 1 ? <Check size={18} /> : `0${i + 1}`}
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-widest mt-3 italic
                        ${currentStep === i + 1 ? 'text-indigo-600' : 'text-slate-400'}`}>
                        {step}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default QuizStepper;