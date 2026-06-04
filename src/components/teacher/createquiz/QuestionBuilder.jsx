import React from 'react';
import { Plus, Trash2, CheckCircle2, Circle, Hash } from 'lucide-react';

const QuestionBuilder = ({ quizData, setQuizData }) => {

    const addQuestion = () => {
        setQuizData({
            ...quizData,
            questions: [...quizData.questions, { questionText: '', options: ['', '', '', ''], correctAnswer: '', marks: 1 }]
        });
    };

    const removeQuestion = (index) => {
        const updatedQuestions = quizData.questions.filter((_, i) => i !== index);
        setQuizData({ ...quizData, questions: updatedQuestions });
    };

    const handleQuestionChange = (index, field, value) => {
        const updatedQuestions = [...quizData.questions];
        updatedQuestions[index][field] = value;
        setQuizData({ ...quizData, questions: updatedQuestions });
    };

    const handleOptionChange = (qIndex, optIndex, value) => {
        const updatedQuestions = [...quizData.questions];
        updatedQuestions[qIndex].options[optIndex] = value;
        setQuizData({ ...quizData, questions: updatedQuestions });
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {quizData.questions.map((q, qIndex) => (
                <div key={qIndex} className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-sm relative">
                    <div className="flex justify-between items-center mb-8">
                        <span className="text-xs font-black text-indigo-600 uppercase tracking-[0.3em] italic">Question #0{qIndex + 1}</span>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-lg">
                                <Hash size={14} className="text-slate-400" />
                                <input type="number" value={q.marks} onChange={(e) => handleQuestionChange(qIndex, 'marks', e.target.value)} className="w-8 bg-transparent text-xs font-black text-slate-700 outline-none" />
                            </div>
                            <button onClick={() => removeQuestion(qIndex)} className="text-red-400 hover:text-red-600 transition-colors"><Trash2 size={18} /></button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <textarea
                            value={q.questionText}
                            onChange={(e) => handleQuestionChange(qIndex, 'questionText', e.target.value)}
                            placeholder="Type your question here..."
                            className="w-full bg-slate-50 border border-transparent rounded-2xl p-6 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-indigo-600 transition-all shadow-inner min-h-[100px] resize-none"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {q.options.map((opt, optIndex) => (
                                <div key={optIndex} className="relative group flex items-center">
                                    <button
                                        type="button"
                                        onClick={() => handleQuestionChange(qIndex, 'correctAnswer', opt)}
                                        className="absolute left-4 z-10"
                                    >
                                        {q.correctAnswer === opt && opt !== "" ? <CheckCircle2 className="text-emerald-500" size={18} /> : <Circle className="text-slate-300" size={18} />}
                                    </button>
                                    <input
                                        type="text"
                                        value={opt}
                                        onChange={(e) => handleOptionChange(qIndex, optIndex, e.target.value)}
                                        placeholder={`Option ${optIndex + 1}`}
                                        className={`w-full pl-12 pr-4 py-4 rounded-xl text-xs font-bold transition-all outline-none border-2
                                            ${q.correctAnswer === opt && opt !== "" ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-slate-50 bg-slate-50 text-slate-500 focus:border-indigo-600 focus:bg-white'}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}

            <button onClick={addQuestion} className="w-full py-6 border-2 border-dashed border-slate-200 rounded-[2.5rem] text-slate-400 font-black uppercase text-xs tracking-widest hover:border-indigo-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all flex items-center justify-center gap-3">
                <Plus size={20} /> Add Next Question
            </button>
        </div>
    );
};

export default QuestionBuilder;