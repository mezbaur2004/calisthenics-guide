export type Exercise={
    id:string
    slug:string
    title:string
    difficulty:string
    description:string
    image:string
    targetArea:string[]
    equipment:string
    progression:string
    tips:string[]
}

const Exercises :Exercise[] = [
    {
        id: "pushups",
        slug: "push-ups",
        title: "Push-Ups",
        difficulty: "Beginner",
        description: "Classic push-ups strengthen chest, triceps, and shoulders. Keep body straight, hands shoulder-width apart, and lower until chest almost touches the floor.",
        image: "/images/pushups.jpg",
        targetArea: ["Chest", "Triceps", "Shoulders", "Core"],
        equipment: "None",
        progression: "Incline push-ups → Standard push-ups → Diamond push-ups → Archer push-ups",
        tips: ["Keep core tight", "Elbows at ~45°", "Do not sag hips"],
    },
    {
        id: "pullups",
        slug: "pull-ups",
        title: "Pull-Ups",
        difficulty: "Intermediate",
        description: "Pull-ups target your back and biceps. Grip the bar shoulder-width, pull until your chin passes the bar, and control the descent.",
        image: "/images/pullups.jpg",
        targetArea: ["Back", "Biceps", "Forearms", "Shoulders"],
        equipment: "Pull-up bar",
        progression: "Assisted pull-ups → Standard pull-ups → Weighted pull-ups",
        tips: ["Avoid swinging", "Engage lats", "Full range of motion"],
    },
    {
        id: "dips",
        slug: "dips",
        title: "Dips",
        difficulty: "Advanced",
        description: "Dips focus on chest, triceps, and shoulders. Keep your torso upright, lower until elbows are at 90°, then push back up.",
        image: "/images/dips.jpg",
        targetArea: ["Chest", "Triceps", "Shoulders"],
        equipment: "Parallel bars",
        progression: "Bench dips → Parallel bar dips → Weighted dips",
        tips: ["Keep shoulders down", "Elbows close to body", "Full range of motion"],
    },
    {
        id: "squat",
        slug: "bodyweight-squat",
        title: "Bodyweight Squats",
        difficulty: "Beginner",
        description: "Squats strengthen legs and glutes. Keep chest up, feet shoulder-width apart, and lower until thighs are parallel to the ground.",
        image: "/images/squats.jpg",
        targetArea: ["Quadriceps", "Glutes", "Hamstrings", "Core"],
        equipment: "None",
        progression: "Air squats → Jump squats → Pistol squats",
        tips: ["Keep knees tracking over toes", "Engage core", "Maintain upright torso"],
    },
    {
        id: "plank",
        slug: "plank",
        title: "Plank",
        difficulty: "Beginner",
        description: "Core stability exercise. Keep your body straight, elbows under shoulders, and hold for time.",
        image: "/images/plank.jpg",
        targetArea: ["Core", "Shoulders", "Back"],
        equipment: "None",
        progression: "Knee plank → Standard plank → Plank with leg lift",
        tips: ["Breathe steadily", "Engage glutes", "Do not arch back"],
    },
    {
        id: "muscleup",
        slug: "muscle-up",
        title: "Muscle-Up",
        difficulty: "Advanced",
        description: "Combination of pull-up and dip. Explosive movement targeting back, chest, shoulders, and arms. Requires strength and technique.",
        image: "/images/muscleup.jpg",
        targetArea: ["Back", "Chest", "Shoulders", "Arms", "Core"],
        equipment: "Pull-up bar or rings",
        progression: "Pull-ups → Chest-to-bar pull-ups → Muscle-up",
        tips: ["Explosive movement", "Control the transition", "Engage shoulders and core"],
    },
];

export default Exercises;