import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Clock, ChevronRight, ChevronLeft, Send, AlertCircle, Loader2 } from 'lucide-react';
import { submitQuizResult, quizReset } from '../../redux/reducer/quiz/QuizSlice';
import toast from 'react-hot-toast';

const QuizPlay = () => {
    const { quizId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Redux data
    const { quizzes, isLoading, isSuccess, lastResult } = useSelector((state) => state.quiz);
    const quiz = quizzes.find(q => q._id === quizId);

    // Local States
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState([]); // Stores selected options
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        if (quiz) {
            setTimeLeft(quiz.duration * 60); // Minutes to seconds
            setAnswers(new Array(quiz.questions.length).fill(null));
        } else {
            navigate('/student/dashboard'); // Agar quiz na mile to wapas bhej do
        }
    }, [quiz, navigate]);

    // Timer Logic
    useEffect(() => {
        if (timeLeft <= 0) {
            if (timeLeft === 0 && quiz) handleSubmit(); // Time up automatically submit
            return;
        }
        const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    // Format Time (MM:SS)
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const handleOptionSelect = (option) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentIndex] = option;
        setAnswers(updatedAnswers);
    };

    const handleSubmit = () => {
        if (window.confirm("Are you sure you want to submit the quiz?")) {
            dispatch(submitQuizResult({
                quizId: quiz._id,
                userAnswers: answers
            }));
        }
    };

    // Result aa jaye to redirect
    useEffect(() => {
        if (isSuccess && lastResult) {
            toast.success(`Quiz Completed! Score: ${lastResult.score}`);
            dispatch(quizReset());
            navigate('/student/dashboard'); // Ya result page par bhej dein
        }
    }, [isSuccess, lastResult, navigate, dispatch]);

    if (!quiz) return <div className="p-20 text-center font-bold">Loading Quiz Data...</div>;

    const currentQuestion = quiz.questions[currentIndex];

    return (
        <div className="min-h-screen bg-slate-50 pb-10">
            {/* Header / Top Bar */}
            <div className="bg-white border-b border-slate-200 sticky top-0 z-50 p-4">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <div>
                        <h2 className="text-lg font-black text-slate-900 uppercase italic leading-none">{quiz.title}</h2>
                        <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">Category: {quiz.category?.name}</p>
                    </div>
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-2xl font-mono font-bold ${timeLeft < 60 ? 'bg-red-50 text-red-500 animate-pulse' : 'bg-indigo-50 text-indigo-600'}`}>
                        <Clock size={18} />
                        {formatTime(timeLeft)}
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto mt-10 px-4">
                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex justify-between text-[10px] font-black uppercase text-slate-400 mb-2">
                        <span>Question {currentIndex + 1} of {quiz.questions.length}</span>
                        <span>{Math.round(((currentIndex + 1) / quiz.questions.length) * 100)}% Complete</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-indigo-600 transition-all duration-500"
                            style={{ width: `${((currentIndex + 1) / quiz.questions.length) * 100}%` }}
                        ></div>
                    </div>
                </div>

                {/* Question Card */}
                <div className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                    <h3 className="text-xl font-bold text-slate-800 leading-snug mb-8">
                        {currentQuestion.questionText}
                    </h3>

                    <div className="space-y-4">
                        {currentQuestion.options.map((option, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleOptionSelect(option)}
                                className={`w-full p-5 rounded-2xl text-left font-bold text-sm transition-all flex items-center justify-between border
                                    ${answers[currentIndex] === option
                                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-100'
                                        : 'bg-slate-50 text-slate-600 border-slate-100 hover:border-indigo-300'}`}
                            >
                                {option}
                                {answers[currentIndex] === option && <CheckCircle2 size={18} />}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-10">
                    <button
                        disabled={currentIndex === 0}
                        onClick={() => setCurrentIndex(prev => prev - 1)}
                        className="flex items-center gap-2 px-6 py-3 bg-white text-slate-400 rounded-2xl text-[11px] font-black uppercase tracking-widest border border-slate-200 hover:text-indigo-600 disabled:opacity-30 transition-all"
                    >
                        <ChevronLeft size={16} /> Previous
                    </button>

                    {currentIndex === quiz.questions.length - 1 ? (
                        <button
                            onClick={handleSubmit}
                            disabled={isLoading}
                            className="flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-xl shadow-emerald-100 hover:bg-slate-900 transition-all"
                        >
                            {isLoading ? <Loader2 className="animate-spin" /> : <Send size={16} />} Finish & Submit
                        </button>
                    ) : (
                        <button
                            onClick={() => setCurrentIndex(prev => prev + 1)}
                            className="flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-xl shadow-indigo-100 hover:bg-slate-900 transition-all"
                        >
                            Next Question <ChevronRight size={16} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

const CheckCircle2 = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="m9 12 2 2 4-4" /></svg>
);

export default QuizPlay;