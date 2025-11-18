'use client';
import { useState } from "react";

const Page = () => {
    const [weight, setWeight] = useState<string>(""); // store as string for input
    const [goal, setGoal] = useState<"cut" | "bulk">("cut");
    const [protein, setProtein] = useState<number | null>(null);
    const [calories, setCalories] = useState<number | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const weightNum = Number(weight);
        if (!weightNum || weightNum <= 0) return;

        // Protein: 2g per kg
        const proteinIntake = weightNum * 2;

        // Calories: BMR (24 * weight) * 1.55 moderate activity
        const BMR = 24 * weightNum;
        const TDEE = Math.round(BMR * 1.55);
        const totalCalories = goal === "bulk" ? TDEE + 400 : TDEE - 400;

        setProtein(Math.round(proteinIntake));
        setCalories(totalCalories);
    };

    // Reset results if weight changes
    const handleWeightChange = (val: string) => {
        setWeight(val);
        setProtein(null);
        setCalories(null);
    };

    return (
        <div className="max-w-xl mx-auto px-6 py-10 space-y-8">
            <h1 className="text-4xl font-extrabold text-amber-600 dark:text-amber-400 text-center">
                Protein & Calorie Calculator
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-center">
                Enter your weight and goal to estimate daily protein and calories.
            </p>

            <form
                onSubmit={handleSubmit}
                className="bg-gray-50 dark:bg-neutral-800 p-6 rounded-lg shadow-md space-y-6"
            >
                <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                        Weight (kg)
                    </label>
                    <input
                        type="number"
                        value={weight}
                        onChange={(e) => handleWeightChange(e.target.value)}
                        className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-400"
                        placeholder="e.g. 70"
                        min={1}
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                        Goal
                    </label>
                    <select
                        value={goal}
                        onChange={(e) => setGoal(e.target.value as "cut" | "bulk")}
                        className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                        <option value="cut">Cut (Deficit)</option>
                        <option value="bulk">Bulk (Surplus)</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 rounded-md bg-amber-500 hover:bg-amber-600 text-white font-semibold transition"
                >
                    Calculate
                </button>
            </form>

            {protein !== null && calories !== null && (
                <div className="bg-gray-50 dark:bg-neutral-800 p-6 rounded-lg shadow-md space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                        Your Daily Intake
                    </h2>
                    <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="p-4 bg-white dark:bg-neutral-700 rounded-lg shadow">
                            <p className="text-gray-700 dark:text-gray-300 font-semibold">Protein</p>
                            <p className="text-amber-600 dark:text-amber-400 text-lg font-bold">{protein} g</p>
                        </div>
                        <div className="p-4 bg-white dark:bg-neutral-700 rounded-lg shadow">
                            <p className="text-gray-700 dark:text-gray-300 font-semibold">Calories</p>
                            <p className="text-amber-600 dark:text-amber-400 text-lg font-bold">{calories} kcal</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;
