import React from 'react';
import Routines, {Routine} from "@/lib/routines";
import Workouts, {Workout} from '@/lib/workouts';
import Link from "next/link";
interface PageProps {
    params: Promise<{ slug: string }>
}

const Page = async ({params}: PageProps) => {
    const {slug} = await params;

    const routine: Routine | undefined = Routines.find((r => r.slug === slug));
    if (!routine) return <p className="p-6 text-center mt-5 text-red-500">Routine not found</p>

    const matched:Workout[] = Workouts.filter(w => routine.exercises.includes(w.slug));
    console.log(matched);

    const difficultyColors: Record<string, string> = {
        Beginner: 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100',
        Intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100',
        Advanced: 'bg-red-800 text-white dark:bg-red-900 dark:text-white',
        Elite: 'bg-gray-800 text-gray-100 dark:bg-gray-200 dark:text-gray-900',
    }


    return (
        <div className="max-w-7xl mx-auto px-6 py-10 mt-10 space-y-8">
            {/* Header & Routine Info */}
            <div className="md:w-2/3 space-y-4">
                <h1 className="text-4xl md:text-5xl mx-3 font-extrabold text-amber-600 dark:text-amber-400">{routine.name}</h1>
                <p className="text-sm md:text-base mx-3 text-gray-600 dark:text-gray-300">
                    Difficulty:
                    <span className={`ml-2 font-semibold px-2 py-1 rounded ${difficultyColors[routine.difficulty] || 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100'}`}>
        {routine.difficulty}
      </span>
                </p>
                <div className="grid gap-4 grid-rows-1 md:grid-cols-2">
                    <section className="p-6 bg-gray-50 dark:bg-neutral-800 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">Frequency</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{routine.frequency}</p>
                    </section>
                    <section className="p-6 bg-gray-50 dark:bg-neutral-800 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">Duration</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{routine.duration}</p>
                    </section>
                </div>
            </div>

            {/* Description */}
            <section className="p-6 bg-gray-50 dark:bg-neutral-800 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">Description</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{routine.description}</p>
            </section>

            {/* Warmup */}
            <section className="p-6 bg-gray-50 dark:bg-neutral-800 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">Warmup</h2>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    {routine.warmup.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </section>

            {/* Workouts */}
            <section className="mb-6">
                <h2 className="text-3xl md:text-4xl font-extrabold text-amber-600 dark:text-amber-400">
                    Workouts
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm md:text-base">
                    Click on a workout to see instructions, tips, and variations.
                </p>
                <div className="w-24 h-1 bg-amber-500 dark:bg-amber-400 rounded mt-2"></div>
            </section>
            <div className="flex flex-wrap gap-4">


                {matched.map(workout => (
                    <Link
                        key={workout.slug}
                        href={`/workouts/${workout.slug}`}
                        className="block p-4 rounded-xl shadow-md hover:shadow-xl transition bg-white dark:bg-neutral-800"
                    >
                        <div className="flex items-center gap-3">
                            <img
                                src={workout.image}
                                alt={workout.title}
                                className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                            />
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{workout.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{workout.targetArea.join(', ')}</p>
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
            {/* Cooldown & Notes */}
            <div className="grid gap-4 md:grid-cols-1 mt-20">
                <section className="p-6 bg-gray-50 dark:bg-neutral-800 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">Cooldown</h2>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                        {routine.cooldown.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </section>

                <section className="p-6 bg-gray-50 dark:bg-neutral-800 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">Notes</h2>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                        {routine.notes.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </section>
            </div>
        </div>


    );
};

export default Page;