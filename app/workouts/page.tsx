import Link from 'next/link'
import Workouts, { Workout } from "@/lib/workouts";

const Page = () => {

    const difficultyColors: Record<string, string> = {
        Beginner: 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100',
        Intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100',
        Advanced: 'bg-red-800 text-white dark:bg-red-900 dark:text-white',
        Elite: 'bg-gray-800 text-gray-100 dark:bg-gray-200 dark:text-gray-900',
    };


    return (
        <section className="max-w-7xl mx-auto px-6 py-10 mt-10">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-600 mb-4">Workouts</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
                Click a workout to see instructions, tips, and variations
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {Workouts.map((workout: Workout) => (
                    <Link
                        key={workout.slug}
                        href={`/workouts/${workout.slug}`}
                        className="block p-4 rounded-xl shadow-md hover:shadow-xl transition bg-white dark:bg-neutral-800"
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src={workout.image}
                                alt={workout.title}
                                className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                            />
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                                    {workout.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                                    {workout.targetArea.join(', ')}
                                </p>
                                <p className="text-xs md:text-sm mt-1 text-gray-500 dark:text-gray-400">
                                    Difficulty:
                                    <span className={`ml-2 font-semibold px-2 py-0.5 rounded text-[0.7rem] md:text-xs ${difficultyColors[workout.difficulty] || 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100'}`}>
                                        {workout.difficulty}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Page;
