import Link from 'next/link'

export default function HomePage() {
    return (
        <section className="flex flex-col items-center justify-center text-center min-h-screen px-6 py-10">
            <div className="p-6 bg-amber-400 rounded-xl shadow-sm mb-10 max-w-2xl">
                <h1 className="text-gray-800 font-sans text-3xl font-bold mb-2">
                    What is Calisthenics?
                </h1>
                <p className="text-amber-950 font-mono text-sm">
                    <span className="font-semibold">Calisthenics</span> is bodyweight training to build strength, control, and mobility using only your own body instead of weights or machines. It focuses on natural movement patterns - pushing, pulling, jumping, and balancing to develop raw strength, coordination, and flexibility.
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-3 w-full max-w-4xl">
                {/* Exercises Section */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg shadow-sm flex flex-col items-center">
                    <h2 className="text-lg font-semibold text-blue-700 mb-2">Exercises</h2>
                    <p className="text-sm text-gray-300 mb-4">
                        Master the fundamentals - push, pull, and core movements to build
                        real body control.
                    </p>
                    <Link
                        href="/exercises"
                        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Explore
                    </Link>
                </div>

                {/* Routines Section */}
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg shadow-sm flex flex-col items-center">
                    <h2 className="text-lg font-semibold text-green-700 mb-2">Routines</h2>
                    <p className="text-sm text-gray-300 mb-4">
                        Structured workout plans for strength, endurance, and skill
                        progression.
                    </p>
                    <Link
                        href="/routines"
                        className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
                    >
                        View Plans
                    </Link>
                </div>

                {/* Nutrition Section */}
                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg shadow-sm flex flex-col items-center">
                    <h2 className="text-lg font-semibold text-orange-700 mb-2">Nutrition</h2>
                    <p className="text-sm text-gray-300 mb-4">
                        Learn what to eat to recover faster, stay lean, and fuel your
                        workouts naturally.
                    </p>
                    <Link
                        href="/nutrition"
                        className="bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </section>
    )
}
