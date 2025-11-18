import Link from 'next/link';
import { FaDumbbell, FaRunning, FaBalanceScale, FaArrowsAltV } from 'react-icons/fa';

export default function HomePage() {
    return (
        <section className="flex flex-col items-center justify-center text-center min-h-screen mt-5 px-6 py-10 space-y-10">
            {/* Intro */}
            <div className="p-6 bg-amber-400 rounded-xl shadow-sm max-w-2xl">
                <h1 className="text-gray-800 font-sans text-3xl font-bold mb-2">
                    What is Calisthenics?
                </h1>
                <p className="text-amber-950 font-mono text-sm">
                    <span className="font-semibold">Calisthenics</span> is bodyweight training to build strength, control, and mobility using only your body. It focuses on natural movements—pushing, pulling, jumping, and balancing—to develop raw strength, coordination, and flexibility.
                </p>
            </div>

            {/* Key Benefits */}
            {/* Key Benefits */}
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 max-w-4xl w-full">
                <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-neutral-800 rounded-lg shadow-sm">
                    <FaDumbbell className="text-amber-500 text-3xl mb-2" />
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Strength</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        Build functional strength using your body weight.
                    </p>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-neutral-800 rounded-lg shadow-sm">
                    <FaRunning className="text-green-500 text-3xl mb-2" />
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Endurance</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        Improve stamina with high-repetition bodyweight movements.
                    </p>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-neutral-800 rounded-lg shadow-sm">
                    <FaBalanceScale className="text-blue-500 text-3xl mb-2" />
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Balance</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        Develop stability and control for advanced movements.
                    </p>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-neutral-800 rounded-lg shadow-sm">
                    <FaArrowsAltV className="text-purple-500 text-3xl mb-2" />
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Flexibility</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        Increase range of motion and joint mobility for better performance.
                    </p>
                </div>
            </div>


            {/* Sections */}
            <div className="grid gap-8 sm:grid-cols-3 w-full max-w-4xl">
                {/* Workouts */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg shadow-sm flex flex-col items-center">
                    <h2 className="text-lg font-semibold text-blue-700 mb-2">Workout</h2>
                    <p className="text-sm text-gray-900 dark:text-gray-300 mb-4">
                        Master the fundamentals - push, pull, and core movements to build real body control.
                    </p>
                    <Link
                        href="/workouts"
                        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Explore
                    </Link>
                </div>

                {/* Routines */}
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg shadow-sm flex flex-col items-center">
                    <h2 className="text-lg font-semibold text-green-700 mb-2">Routines</h2>
                    <p className="text-sm text-gray-900 dark:text-gray-300 mb-4">
                        Structured workout plans for strength, endurance, and skill progression.
                    </p>
                    <Link
                        href="/routines"
                        className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
                    >
                        View Plans
                    </Link>
                </div>

                {/* Nutrition / Calculator */}
                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg shadow-sm flex flex-col items-center">
                    <h2 className="text-lg font-semibold text-orange-700 mb-2">Calculator</h2>
                    <p className="text-sm text-gray-900 dark:text-gray-300 mb-4">
                        Estimate your daily protein and calorie needs for cutting or bulking.
                    </p>
                    <Link
                        href="/nutrition"
                        className="bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition"
                    >
                        Calculate
                    </Link>
                </div>
            </div>
        </section>
    );
}
