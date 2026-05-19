import React, { useState } from 'react';
import BreadcrumbBanner from '../../components/teacher/Banner';
import QuizStepper from '../../components/teacher/createquiz/QuizStepper';
import BasicDetailsForm from '../../components/teacher/createquiz/BasicDetailsForm';
import QuestionBuilder from '../../components/teacher/createquiz/QuestionBuilder';
import { ArrowRight, Save } from 'lucide-react';

const CreateQuiz = () => {
    const [step, setStep] = useState(1);
    const breadcrumbs = [{ label: "Create Quiz", path: "/teacher/create-quiz" }];

    return (
        <div className="pb-10 max-w-5xl mx-auto">
            <BreadcrumbBanner
                title="Quiz Architect"
                subtitle="Design your assessment terminal with precision and expertise."
                breadcrumbs={breadcrumbs}
            />

            <QuizStepper currentStep={step} />

            <div className="mt-10">
                {step === 1 && <BasicDetailsForm />}
                {step === 2 && <QuestionBuilder />}
                {step === 3 && (
                    <div className="text-center bg-white p-20 rounded-[3rem] border border-slate-100 italic font-bold text-slate-400">
                        Reviewing and Finalizing...
                    </div>
                )}
            </div>

            {/* Footer Navigation */}
            <div className="mt-12 flex justify-between items-center bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-100">
                <button
                    disabled={step === 1}
                    onClick={() => setStep(step - 1)}
                    className="px-8 py-3 text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 disabled:opacity-0 transition-all"
                >
                    Previous Step
                </button>
                <div className="flex gap-4">
                    <button className="hidden sm:flex items-center gap-2 px-8 py-3 bg-slate-50 text-slate-400 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-slate-100 transition-all">
                        <Save size={16} /> Save Draft
                    </button>
                    <button
                        onClick={() => setStep(step + 1)}
                        className="px-10 py-4 bg-indigo-600 text-white rounded-xl text-[11px] font-black uppercase tracking-widest shadow-xl shadow-indigo-100 hover:bg-slate-900 transition-all flex items-center gap-2 group"
                    >
                        {step === 3 ? "Publish Quiz" : "Next Step"} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateQuiz;