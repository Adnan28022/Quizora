import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCategories } from '../../redux/reducer/category/CategorySlice';
import { createQuiz, quizReset } from '../../redux/reducer/quiz/QuizSlice';
import BreadcrumbBanner from '../../components/teacher/Banner';
import QuizStepper from '../../components/teacher/createquiz/QuizStepper';
import BasicDetailsForm from '../../components/teacher/createquiz/BasicDetailsForm';
import QuestionBuilder from '../../components/teacher/createquiz/QuestionBuilder';
import { ArrowRight, Save, Loader2, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const CreateQuiz = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [step, setStep] = useState(1);

    // Form State
    const [quizData, setQuizData] = useState({
        title: '',
        description: '',
        category: '',
        duration: '',
        passingMarks: '',
        questions: [{ questionText: '', options: ['', '', '', ''], correctAnswer: '', marks: 1 }]
    });

    // CreateQuiz.jsx ke andar
    // ✅ Replace with these:
    const categories = useSelector((state) => state.category?.categories ?? []);

    // Ye add karo:
    console.log("Categories from Redux:", categories);
    const isLoading = useSelector((state) => state.quiz?.isLoading ?? false);
    const isSuccess = useSelector((state) => state.quiz?.isSuccess ?? false);
    const isError = useSelector((state) => state.quiz?.isError ?? false);
    const message = useSelector((state) => state.quiz?.message ?? '');

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    useEffect(() => {
        if (isError) toast.error(message);
        if (isSuccess) {
            toast.success("Quiz submitted for Admin approval!");
            dispatch(quizReset());
            navigate('/teacher/manage-quizzes');
        }
    }, [isError, isSuccess, message, navigate, dispatch]);

    const handlePublish = () => {
        // Validation check
        if (!quizData.title || !quizData.category || quizData.questions.length === 0) {
            return toast.error("Please complete all fields before publishing.");
        }
        dispatch(createQuiz(quizData));
    };

    const breadcrumbs = [{ label: "Create Quiz", path: "/teacher/create-quiz" }];

    return (
        <div className="pb-10 max-w-5xl mx-auto px-4 md:px-0">
            <BreadcrumbBanner
                title="Quiz Architect"
                subtitle="Design your assessment terminal with precision and expertise."
                breadcrumbs={breadcrumbs}
            />

            <QuizStepper currentStep={step} />

            <div className="mt-10">
                {step === 1 && <BasicDetailsForm quizData={quizData} setQuizData={setQuizData} categories={categories} />}
                {step === 2 && <QuestionBuilder quizData={quizData} setQuizData={setQuizData} />}
                {step === 3 && (
                    <div className="bg-white p-10 md:p-16 rounded-[3rem] border border-slate-100 text-center shadow-sm animate-in zoom-in-95 duration-500">
                        <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle size={40} />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 uppercase italic mb-2">Ready for <span className="text-indigo-600">Deployment</span></h3>
                        <p className="text-slate-400 font-bold text-sm mb-8">Review your configuration. Once published, it will be sent to the Admin for security clearance.</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
                            <div className="bg-slate-50 p-4 rounded-2xl"><p className="text-[10px] uppercase text-slate-400 font-black">Title</p><p className="text-xs font-bold truncate">{quizData.title}</p></div>
                            <div className="bg-slate-50 p-4 rounded-2xl"><p className="text-[10px] uppercase text-slate-400 font-black">Questions</p><p className="text-xs font-bold">{quizData.questions.length}</p></div>
                            <div className="bg-slate-50 p-4 rounded-2xl"><p className="text-[10px] uppercase text-slate-400 font-black">Duration</p><p className="text-xs font-bold">{quizData.duration} Mins</p></div>
                            <div className="bg-slate-50 p-4 rounded-2xl"><p className="text-[10px] uppercase text-slate-400 font-black">Passing</p><p className="text-xs font-bold">{quizData.passingMarks} Marks</p></div>
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-12 flex flex-col md:flex-row justify-between items-center bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl gap-4">
                <button
                    disabled={step === 1}
                    onClick={() => setStep(step - 1)}
                    className="px-8 py-3 text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 disabled:opacity-0 transition-all"
                >
                    Previous Step
                </button>
                <div className="flex gap-4 w-full md:w-auto">
                    <button
                        onClick={() => step === 3 ? handlePublish() : setStep(step + 1)}
                        className="w-full md:w-auto px-10 py-4 bg-indigo-600 text-white rounded-xl text-[11px] font-black uppercase tracking-widest shadow-xl hover:bg-slate-900 transition-all flex items-center justify-center gap-2 group"
                    >
                        {isLoading ? <Loader2 className="animate-spin" /> : (step === 3 ? "Publish Quiz" : "Next Step")} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateQuiz;