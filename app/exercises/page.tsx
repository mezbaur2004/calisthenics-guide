'use client'
import Link from 'next/link'
import Exercises,{Exercise} from "@/lib/exercises";
const Page = () => {
    return (
        <section className="max-2-5x1 mx-auto px-6 py-10 mt-10">
        <h2 className="text-3xl font-bold text-amber-600 mb-6">Workouts</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">Click an workout to see instructions, tips and variations</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {Exercises.map((exercise: Exercise) => (
                    <Link
                        key={exercise.slug}
                        href={`/exercises/${exercise.slug}`}
                        className="block p-4 rounded-lg shadow hover:shadow-lg transition bg-white dark:bg-neutral-800"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{exercise.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            {exercise.targetArea.join(', ')}
                        </p>

                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Difficulty: {exercise.difficulty}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Page;