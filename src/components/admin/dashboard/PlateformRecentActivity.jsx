import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BookOpen, UserPlus, Award, Loader2, Clock } from 'lucide-react';
import { fetchAllQuizzesAdmin } from '../../../redux/reducer/quiz/QuizSlice';
import { fetchAllUsers } from '../../../redux/reducer/auth/AuthSlice';
import moment from 'moment';

const PlatformRecentActivity = () => {
    const dispatch = useDispatch();

    // Redux se data nikalna
    const { allQuizzes, isLoading: quizLoading } = useSelector((state) => state.quiz);
    const { allUsers, isLoading: userLoading } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(fetchAllQuizzesAdmin());
        dispatch(fetchAllUsers());
    }, [dispatch]);

    // 1. Quizzes ko activity format mein badalna
    const quizActivities = allQuizzes.slice(0, 3).map(quiz => ({
        type: 'quiz',
        text: `New Quiz '${quiz.title}' published by ${quiz.teacher?.name || 'Teacher'}`,
        time: quiz.createdAt,
        icon: <BookOpen size={16} />,
        color: "text-indigo-600",
        bg: "bg-indigo-50"
    }));

    // 2. Users (Students) ko activity format mein badalna
    const userActivities = allUsers
        .filter(user => user.role === 'student')
        .slice(0, 3)
        .map(user => ({
            type: 'user',
            text: `${user.name} joined the Quiz Portal as a new learner`,
            time: user.createdAt,
            icon: <UserPlus size={16} />,
            color: "text-emerald-600",
            bg: "bg-emerald-50"
        }));

    // 3. Dono ko combine karke Time ke hisab se sort karna
    const liveFeed = [...quizActivities, ...userActivities]
        .sort((a, b) => new Date(b.time) - new Date(a.time))
        .slice(0, 5); // Sirf top 5 activities dikhayen

    const isLoading = quizLoading || userLoading;

    return (
        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm h-full">
            <h3 className="text-xl font-black text-slate-900 italic uppercase tracking-tighter mb-8">
                Platform <span className="text-indigo-600">Live Feed</span>
            </h3>

            <div className="space-y-6">
                {isLoading ? (
                    <div className="flex justify-center py-10">
                        <Loader2 className="animate-spin text-indigo-600" size={24} />
                    </div>
                ) : liveFeed.length > 0 ? (
                    liveFeed.map((log, i) => (
                        <div key={i} className="flex items-start gap-4 group transition-all">
                            <div className={`p-3 rounded-xl ${log.bg} ${log.color} shrink-0 shadow-sm`}>
                                {log.icon}
                            </div>
                            <div className="flex-1 border-b border-slate-50 pb-4 last:border-0">
                                <p className="text-sm font-bold text-slate-700 italic leading-tight group-hover:text-indigo-600 transition-colors">
                                    {log.text}
                                </p>
                                <div className="flex items-center gap-1 mt-1">
                                    <Clock size={10} className="text-slate-400" />
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                        {moment(log.time).fromNow()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-slate-400 text-center italic py-10">No recent activity found.</p>
                )}
            </div>
        </div>
    );
};

export default PlatformRecentActivity;