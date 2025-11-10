// app/workouts/[slug]/page.tsx
import Workouts from '@/lib/workouts'

interface PageProps {
    params: Promise<{ slug: string }>
}

const Page = async ({ params }: PageProps) => {
    const { slug } = await params
    const workout = Workouts.find(w => w.slug === slug)

    const difficultyColors: Record<string, string> = {
        Beginner: 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100',
        Intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100',
        Advanced: 'bg-red-800 text-white dark:bg-red-900 dark:text-white',
        Elite: 'bg-gray-800 text-gray-100 dark:bg-gray-200 dark:text-gray-900',
    }

    if (!workout) return <p className="p-6 text-center text-red-500">Workout not found!</p>

    return (
        <div className="max-w-7xl mx-auto px-6 py-10 mt-10 space-y-8">
            {/* Header + Image Side-by-Side */}
            <div className="flex flex-col md:flex-row md:items-start gap-10">
                <div className="md:w-2/3 space-y-4">
                    <h1 className="text-4xl md:text-5xl mx-3 font-extrabold text-amber-600 dark:text-amber-400">
                        {workout.title}
                    </h1>

                    <p className="text-sm md:text-base mx-3 text-gray-600 dark:text-gray-300">
                        Difficulty:
                        <span
                            className={`ml-2 font-semibold px-2 py-1 rounded ${difficultyColors[workout.difficulty] || 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100'}`}
                        >
              {workout.difficulty}
            </span>
                    </p>

                    <div className="grid gap-4 grid-rows-1 md:grid-cols-2">
                        <section className="p-4 bg-gray-50 dark:bg-neutral-800 rounded-lg shadow-sm">
                            <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Target Areas</h2>
                            <p className="text-gray-700 dark:text-gray-300">{workout.targetArea.join(', ')}</p>
                        </section>

                        <section className="p-4 bg-gray-50 dark:bg-neutral-800 rounded-lg shadow-sm">
                            <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Equipment</h2>
                            <p className="text-gray-700 dark:text-gray-300">{workout.equipment}</p>
                        </section>
                    </div>
                </div>

                <div className="md:w-1/3">
                    <img
                        src={workout.image}
                        alt={workout.title}
                        className="w-full h-auto object-cover rounded-xl shadow-lg border border-gray-200 dark:border-neutral-700"
                    />
                </div>
            </div>

            {/* Description */}
            <section className="p-6 bg-gray-50 dark:bg-neutral-800 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">Description</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{workout.description}</p>
            </section>

            {/* Steps */}
            {workout.steps && workout.steps.length > 0 && (
                <section className="p-6 bg-white/60 dark:bg-black/30 backdrop-blur rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Steps</h2>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                        {workout.steps.map((step, idx) => (
                            <li key={idx} className="pl-1">
                                <span className="font-medium mr-2 text-gray-700 dark:text-gray-200">Step {idx + 1}:</span>
                                <span className="text-gray-700 dark:text-gray-300">{step}</span>
                            </li>
                        ))}
                    </ol>
                </section>
            )}

            {/* Reps / Recommendations */}
            {workout.reps && (
                <section className="p-6 bg-gray-50 dark:bg-neutral-800 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">Reps & Sets</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {Object.entries(workout.reps).map(([level, rep]) => (
                            <div key={level} className="p-3 rounded-md bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-700">
                                <div className="text-xs text-gray-500 dark:text-gray-400">{level}</div>
                                <div className="mt-1 text-sm font-medium text-gray-800 dark:text-gray-100">{rep}</div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Common Mistakes */}
            {workout.commonMistakes && workout.commonMistakes.length > 0 && (
                <section className="p-6 bg-gradient-to-r from-amber-50 to-white dark:from-neutral-900 dark:to-neutral-800 rounded-lg shadow-md border border-amber-100 dark:border-neutral-700">
                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">Common Mistakes</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                        {workout.commonMistakes.map((mistake, idx) => (
                            <li key={idx}>
                                <span className="font-medium text-amber-600 dark:text-amber-400 mr-2">⚠</span>
                                <span>{mistake}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Progression */}
            <section className="p-6 bg-gray-50 dark:bg-neutral-800 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">Progression</h2>
                <p className="text-gray-700 dark:text-gray-300">{workout.progression}</p>
            </section>

            {/* Tips */}
            <section className="p-6 bg-gray-50 dark:bg-neutral-800 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">Tips</h2>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                    {workout.tips.map((tip, idx) => (
                        <li key={idx}>{tip}</li>
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default Page
