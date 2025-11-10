export type Workout = {
    id: string;
    slug: string;
    title: string;
    difficulty: string;
    description: string;
    image: string;
    targetArea: string[];
    equipment: string;
    progression: string;
    tips: string[];
    steps: string[];
    reps: {
        Beginner: string;
        Intermediate: string;
        Advanced: string;
        Elite: string;
    };
    commonMistakes: string[];
};


const Workouts: Workout[] = [
    {
        id: "pushups",
        slug: "push-ups",
        title: "Push-Ups",
        difficulty: "Beginner",
        description: "Classic push-ups strengthen chest, triceps, and shoulders. Keep body straight, hands shoulder-width apart, and lower until your chest almost touches the floor.",
        image: "/images/push-up.png",
        targetArea: ["Chest", "Triceps", "Shoulders", "Core"],
        equipment: "None",
        progression: "Incline push-ups → Standard push-ups → Diamond push-ups → Archer push-ups",
        tips: ["Keep core tight", "Elbows at ~45°", "Do not sag hips"],
        steps: [
            "Start in a high plank position with hands slightly wider than shoulder-width.",
            "Keep your body straight from head to heels and brace your core.",
            "Bend elbows and lower your chest until it's just above the ground.",
            "Pause briefly, then push through your palms to return to the start.",
            "Repeat for the prescribed reps."
        ],
        reps: {
            Beginner: "3 sets x 8–12",
            Intermediate: "3-4 sets x 12-20",
            Advanced: "4-5 sets x 20-30",
            Elite: "Weighted sets or high-volume clusters"
        },
        commonMistakes: [
            "Hips sagging or hips too high",
            "Flaring elbows out too wide",
            "Not using full range of motion",
            "Holding breath or losing core tension"
        ]
    },
    {
        id: "pullups",
        slug: "pull-ups",
        title: "Pull-Ups",
        difficulty: "Intermediate",
        description: "Pull-ups target your back and biceps. Grip the bar shoulder-width, pull until your chin passes the bar, and control the descent.",
        image: "/images/pull-up.png",
        targetArea: ["Back", "Biceps", "Forearms", "Shoulders"],
        equipment: "Pull-up bar",
        progression: "Assisted pull-ups → Standard pull-ups → Chin-ups → Muscle-ups",
        tips: ["Avoid swinging", "Engage lats", "Full range of motion"],
        steps: [
            "Grip the bar with hands slightly wider than shoulder-width, palms away.",
            "Hang fully with shoulders engaged (not dead hang).",
            "Pull your chest toward the bar, leading with the elbows.",
            "Pause at the top with chin over the bar, then lower slowly.",
            "Repeat for reps with controlled tempo."
        ],
        reps: {
            Beginner: "3–4 sets x 3–6 (assisted)",
            Intermediate: "4 sets x 6–10",
            Advanced: "4–6 sets x 10–15",
            Elite: "Weighted pull-ups or high-rep sets"
        },
        commonMistakes: [
            "Kipping or swinging to gain momentum",
            "Partial reps (not going full range)",
            "Letting shoulders shrug up at top",
            "Using wrong grip width"
        ]
    },
    {
        id: "dips",
        slug: "dips",
        title: "Dips",
        difficulty: "Advanced",
        description: "Dips focus on chest, triceps, and shoulders. Keep your torso upright, lower until elbows are at 90°, then push back up.",
        image: "/images/dips.png",
        targetArea: ["Chest", "Triceps", "Shoulders"],
        equipment: "Parallel bars",
        progression: "Bench dips → Parallel bar dips → Ring dips → Weighted dips",
        tips: ["Keep shoulders down", "Elbows close to body", "Full range of motion"],
        steps: [
            "Grip parallel bars and lift yourself, arms straight.",
            "Lean slightly forward for chest focus or stay upright for triceps focus.",
            "Lower slowly until elbows are about 90°.",
            "Push back up to full elbow extension with control.",
            "Repeat for sets."
        ],
        reps: {
            Beginner: "3 sets x 6–8 (bench dips/assisted)",
            Intermediate: "4 sets x 8–12",
            Advanced: "4–6 sets x 8–15",
            Elite: "Weighted dips or ring dips for reps"
        },
        commonMistakes: [
            "Shrugging shoulders toward ears",
            "Dropping too fast with no control",
            "Too deep without shoulder mobility",
            "Flaring elbows excessively"
        ]
    },
    {
        id: "squat",
        slug: "bodyweight-squat",
        title: "Bodyweight Squats",
        difficulty: "Beginner",
        description: "Squats strengthen legs and glutes. Keep chest up, feet shoulder-width apart, and lower until thighs are parallel to the ground.",
        image: "/images/squats.png",
        targetArea: ["Quadriceps", "Glutes", "Hamstrings", "Core"],
        equipment: "None",
        progression: "Air squats → Jump squats → Pistol squats",
        tips: ["Keep knees tracking over toes", "Engage core", "Maintain upright torso"],
        steps: [
            "Stand with feet roughly shoulder-width and toes slightly out.",
            "Hinge at hips and bend knees, keeping chest upright.",
            "Lower until thighs are at least parallel (or comfortable depth).",
            "Drive through heels to stand back up, squeezing glutes at top.",
            "Repeat with controlled pace."
        ],
        reps: {
            Beginner: "3 sets x 12–20",
            Intermediate: "4 sets x 15–25",
            Advanced: "4–6 sets x 20–30 or add jump squats",
            Elite: "Pistol progressions or weighted work"
        },
        commonMistakes: [
            "Knees caving inward",
            "Rounding the lower back",
            "Heels lifting off the ground",
            "Too upright or forward-swivel torso"
        ]
    },
    {
        id: "plank",
        slug: "plank",
        title: "Plank",
        difficulty: "Beginner",
        description: "Core stability exercise. Keep your body straight, elbows under shoulders, and hold for time.",
        image: "/images/plank.png",
        targetArea: ["Core", "Shoulders", "Back"],
        equipment: "None",
        progression: "Knee plank → Standard plank → Side plank → Plank with leg lift",
        tips: ["Breathe steadily", "Engage glutes", "Do not arch back"],
        steps: [
            "Start on elbows and toes with elbows under shoulders.",
            "Keep a straight line from head to heels, bracing the core.",
            "Hold the position while maintaining steady breathing.",
            "Avoid sagging or piking the hips.",
            "Increase hold time gradually."
        ],
        reps: {
            Beginner: "3 sets x 20–45 seconds",
            Intermediate: "3–4 sets x 45–90 seconds",
            Advanced: "4–5 sets x 90+ seconds or weighted plank",
            Elite: "Weighted holds or advanced plank variations"
        },
        commonMistakes: [
            "Hips sagging or piking",
            "Holding breath",
            "Shoulders shrugged upward",
            "Neck strain from looking up"
        ]
    },
    {
        id: "muscleup",
        slug: "muscle-up",
        title: "Muscle-Up",
        difficulty: "Advanced",
        description: "Combination of pull-up and dip. Explosive movement targeting back, chest, shoulders, and arms. Requires strength and technique.",
        image: "/images/muscle-up.png",
        targetArea: ["Back", "Chest", "Shoulders", "Arms", "Core"],
        equipment: "Pull-up bar or rings",
        progression: "Pull-ups → Chest-to-bar pull-ups → Muscle-up → Ring muscle-up",
        tips: ["Explosive movement", "Control the transition", "Engage shoulders and core"],
        steps: [
            "Start with a strong pull-up, aiming to get chest to bar level.",
            "Transition explosively by pulling the elbows high and pushing the chest over the bar.",
            "Catch the bar and press down into a dip position.",
            "Lock out the dip with control.",
            "Lower under control and repeat."
        ],
        reps: {
            Beginner: "Practice progressions (negatives and chest-to-bar)",
            Intermediate: "3–5 assisted muscle-up reps or progressions",
            Advanced: "3–6 strict muscle-ups per set",
            Elite: "Multiple reps or muscle-up clusters"
        },
        commonMistakes: [
            "Relying on hip kip without strength foundation",
            "Poor transition control (chest misses bar)",
            "Elbows flaring during transition",
            "Not controlling descent"
        ]
    },
    {
        id: "archerpushups",
        slug: "archer-push-ups",
        title: "Archer Push-Ups",
        difficulty: "Intermediate",
        description: "A unilateral push-up variation that builds strength and stability by isolating one side at a time.",
        image: "/images/archer-push-up.png",
        targetArea: ["Chest", "Triceps", "Shoulders", "Core"],
        equipment: "None",
        progression: "Diamond push-ups → Archer push-ups → One-arm push-ups",
        tips: ["Keep one arm straight", "Shift weight to working side", "Stay tight through the core"],
        steps: [
            "Start in a wide push-up stance with one arm positioned more out to the side.",
            "Shift your weight to the working side as you bend the elbow of that arm.",
            "Lower until the working-side chest approaches the floor while the other arm remains mostly straight.",
            "Push back up controlling the movement, keeping torso stable.",
            "Alternate sides for balanced development."
        ],
        reps: {
            Beginner: "3 sets x 6–8 (per side, assisted)",
            Intermediate: "3–4 sets x 6–10 per side",
            Advanced: "4–5 sets x 8–12 per side",
            Elite: "High-volume or progressing to one-arm push-ups"
        },
        commonMistakes: [
            "Twisting the hips to cheat",
            "Using the non-working arm too much",
            "Letting shoulders collapse",
            "Poor core stability during movement"
        ]
    },
    {
        id: "pseudoplanche",
        slug: "pseudo-planche-push-up",
        title: "Pseudo Planche Push-Ups",
        difficulty: "Intermediate",
        description: "An advanced push-up variation that develops planche strength by leaning forward and engaging shoulders heavily.",
        image: "/images/pseudo-planche-push-up.png",
        targetArea: ["Chest", "Shoulders", "Triceps", "Core"],
        equipment: "None",
        progression: "Standard push-ups → Pseudo planche push-ups → Planche push-ups",
        tips: ["Lean forward slightly", "Protract shoulders", "Keep elbows close to body"],
        steps: [
            "Place hands lower near hips (fingers pointing slightly out) and lean forward.",
            "Keep body rigid and descend with elbows close to torso.",
            "Lower until comfortable while maintaining forward lean.",
            "Push back up while maintaining forward shoulder position.",
            "Focus on shoulder engagement and hollow body tension."
        ],
        reps: {
            Beginner: "Practice leaning holds and partial reps",
            Intermediate: "3–4 sets x 6–10",
            Advanced: "4–6 sets x 8–12",
            Elite: "Progress toward tuck/straddle planche work"
        },
        commonMistakes: [
            "Not leaning enough (loses specificity)",
            "Rounded shoulders instead of protraction",
            "Collapsing through the core",
            "Poor wrist positioning/strain"
        ]
    },
    {
        id: "chinups",
        slug: "chin-ups",
        title: "Chin-Ups",
        difficulty: "Intermediate",
        description: "Similar to pull-ups but with an underhand grip, emphasizing the biceps and lower lats.",
        image: "/images/chin-up.png",
        targetArea: ["Biceps", "Back", "Forearms"],
        equipment: "Pull-up bar",
        progression: "Negative chin-ups → Standard chin-ups → Weighted chin-ups",
        tips: ["Avoid jerking", "Full range of motion", "Engage biceps fully"],
        steps: [
            "Grip the bar with an underhand (supinated) grip about shoulder-width.",
            "Hang with shoulders engaged, then pull your chin over the bar.",
            "Pause at the top, then lower slowly to full hang.",
            "Keep chest up and shoulders down during the movement.",
            "Repeat for sets."
        ],
        reps: {
            Beginner: "3 sets x 3–6 (assisted/negative)",
            Intermediate: "4 sets x 6–10",
            Advanced: "4–6 sets x 10–15",
            Elite: "Weighted chin-ups or high-rep sets"
        },
        commonMistakes: [
            "Using momentum/kipping",
            "Shrugging shoulders at top",
            "Partial range of motion",
            "Overgripping and wrist strain"
        ]
    },
    {
        id: "lsit",
        slug: "l-sit",
        title: "L-Sit (Floor)",
        difficulty: "Advanced",
        description: "An isometric hold strengthening the core and hip flexors by supporting the body in an 'L' shape on the floor.",
        image: "/images/l-sit.png",
        targetArea: ["Core", "Hip Flexors", "Shoulders"],
        equipment: "None or parallettes",
        progression: "Tuck sit → One-leg L-sit → Full L-sit",
        tips: ["Keep legs straight", "Press through hands", "Engage hip flexors"],
        steps: [
            "Sit on the floor with hands by your hips or on parallettes.",
            "Press into the hands to lift hips off the floor while keeping legs straight.",
            "Hold legs out in front forming an 'L' with the body.",
            "Breathe steadily and maintain shoulder depression and core tension.",
            "Lower safely and rest before repeating."
        ],
        reps: {
            Beginner: "3 sets of 10–20 seconds (tuck variations)",
            Intermediate: "3–4 sets of 20–40 seconds",
            Advanced: "4–6 sets of 40–60 seconds",
            Elite: "Long holds or L-sit to V-sit work"
        },
        commonMistakes: [
            "Rounded shoulders or shrugged traps",
            "Bent knees or toes pointing down",
            "Collapsing through the chest",
            "Holding breath"
        ]
    },
    {
        id: "pikepushups",
        slug: "pike-push-ups",
        title: "Pike Push-Ups",
        difficulty: "Intermediate",
        description: "Vertical push-up variation targeting shoulders and triceps, mimicking the mechanics of a handstand push-up.",
        image: "/images/pike-push-up.png",
        targetArea: ["Shoulders", "Triceps", "Core"],
        equipment: "None",
        progression: "Standard push-ups → Pike push-ups → Wall handstand push-ups",
        tips: ["Form a V-shape", "Lower head between hands", "Engage core for balance"],
        steps: [
            "Start in a pike position with hips high and body forming an inverted V.",
            "Bend elbows and lower the head toward the ground between your hands.",
            "Pause briefly, then press back up to the starting pike position.",
            "Keep legs straight and core tight throughout.",
            "Repeat for sets."
        ],
        reps: {
            Beginner: "3 sets x 6–8 (modified pike)",
            Intermediate: "3–4 sets x 8–12",
            Advanced: "4–6 sets x 10–15",
            Elite: "Progress to handstand push-up work"
        },
        commonMistakes: [
            "Not creating a steep enough pike angle",
            "Letting elbows flare wide",
            "Using momentum instead of strict control",
            "Neck strain from poor head positioning"
        ]
    },
    {
        id: "wallhandstand",
        slug: "wall-handstand-push-ups",
        title: "Wall Handstand Push-Ups",
        difficulty: "Advanced",
        description: "Strengthens shoulders and triceps while building control for free handstand push-ups.",
        image: "/images/wall-handstand-push-up.png",
        targetArea: ["Shoulders", "Triceps", "Core"],
        equipment: "Wall",
        progression: "Pike push-ups → Wall handstand push-ups → Freestanding handstand push-ups",
        tips: ["Maintain balance with wall support", "Lower slowly", "Keep core tight"],
        steps: [
            "Kick into a handstand with your back to the wall or walk feet up the wall.",
            "Maintain a tight body line and controlled breathing.",
            "Bend elbows to lower your head toward the floor.",
            "Press up to full lockout with shoulder control.",
            "Step down or cartwheel out safely if needed."
        ],
        reps: {
            Beginner: "Practice wall holds and partial ROM",
            Intermediate: "3–5 sets x 3–6 reps (assisted)",
            Advanced: "4–6 sets x 4–8 reps",
            Elite: "Freestanding handstand push-up training or weighted"
        },
        commonMistakes: [
            "Arching the lower back (banana back)",
            "Kicking up haphazardly and losing control",
            "Dropping too quickly on descent",
            "Neck strain from poor alignment"
        ]
    },
    {
        id: "onearmpushup",
        slug: "one-arm-push-ups",
        title: "One-Arm Push-Ups",
        difficulty: "Advanced",
        description: "A high-tension unilateral push-up developing immense chest and triceps strength.",
        image: "/images/one-arm-push-up.png",
        targetArea: ["Chest", "Triceps", "Core"],
        equipment: "None",
        progression: "Archer push-ups → One-arm push-ups → Weighted one-arm push-ups",
        tips: ["Widen feet for balance", "Control the descent", "Engage core fully"],
        steps: [
            "Place feet wide for stability and position one hand centered under the chest.",
            "Keep the other arm by your side or behind your back.",
            "Lower with control on the working arm to chest-level.",
            "Press back up to full lockout while maintaining body tension.",
            "Alternate sides or focus on one side per session."
        ],
        reps: {
            Beginner: "Work on progressions (archer/assisted)",
            Intermediate: "3–4 sets x 3–6 per side",
            Advanced: "4–6 sets x 6–10 per side",
            Elite: "Weighted one-arm push-ups or high-volume singles"
        },
        commonMistakes: [
            "Rotating the torso to cheat",
            "Feet too narrow causing balance issues",
            "Rushing reps and losing control",
            "Dropping shoulder/hip alignment"
        ]
    },
    {
        id: "handstandpushup",
        slug: "handstand-push-ups",
        title: "Handstand Push-Ups",
        difficulty: "Advanced",
        description: "A vertical pressing exercise that builds incredible shoulder and triceps strength.",
        image: "/images/handstand-push-up.png",
        targetArea: ["Shoulders", "Triceps", "Core"],
        equipment: "Wall or floor",
        progression: "Pike push-ups → Wall handstand push-ups → Freestanding handstand push-ups",
        tips: ["Kick up into control", "Keep tight body line", "Avoid arching back"],
        steps: [
            "Kick or walk into a handstand with the wall for support if needed.",
            "Align body into a straight line and brace your core.",
            "Bend elbows and lower toward the floor while controlling breathing.",
            "Push back up to full lockout, maintaining shoulder engagement.",
            "Exit safely onto feet or roll out if needed."
        ],
        reps: {
            Beginner: "Build shoulder strength with pike progressions",
            Intermediate: "3–5 sets x 3–6 (wall-assisted)",
            Advanced: "4–6 sets x 4–8 (freestanding progression)",
            Elite: "High-rep or weighted handstand push-ups"
        },
        commonMistakes: [
            "Arching through the lower back",
            "Kicking up too aggressively and losing balance",
            "Shrugging shoulders at the top",
            "Neglecting strict pressing strength"
        ]
    },
    {
        id: "planchepushups",
        slug: "planche-push-ups",
        title: "Planche Push-Ups",
        difficulty: "Elite",
        description: "The ultimate pushing exercise combining balance, strength, and control — body held parallel to the ground.",
        image: "/images/planche-push-up.png",
        targetArea: ["Shoulders", "Chest", "Triceps", "Core"],
        equipment: "Parallettes (optional)",
        progression: "Pseudo planche push-ups → Tuck planche push-ups → Full planche push-ups",
        tips: ["Protract shoulders", "Lean forward", "Maintain hollow body"],
        steps: [
            "Work static planche progressions (frog stand → tuck → straddle).",
            "Practice pseudo planche push-ups to build leaning pressing strength.",
            "Keep body hollow and protract the shoulders throughout the movement.",
            "Slowly increase tension and time under tension before adding reps.",
            "Prioritize wrist and shoulder conditioning to avoid injury."
        ],
        reps: {
            Beginner: "Planche conditioning and holds (short durations)",
            Intermediate: "Tuck planche holds and pseudo push-ups",
            Advanced: "Straddle/tuck planche push-ups for low reps",
            Elite: "Full planche push-ups — low reps with high control"
        },
        commonMistakes: [
            "Rushing progressions and trying advanced moves too early",
            "Poor wrist preparation and pain",
            "Collapsing through shoulders instead of protracting",
            "Insufficient core tension"
        ]
    },
    {
        id: "pistolsquat",
        slug: "pistol-squat",
        title: "Pistol Squat",
        difficulty: "Advanced",
        description: "A single-leg squat requiring strength, balance, and mobility — works quads, glutes, and core.",
        image: "/images/pistol-squat.png",
        targetArea: ["Quads", "Glutes", "Hamstrings", "Core"],
        equipment: "None",
        progression: "Assisted pistol squat → Full pistol squat → Weighted pistol squat",
        tips: ["Extend free leg forward", "Control the descent", "Use balance support if needed"],
        steps: [
            "Stand on one leg with the other leg extended forward.",
            "Hinge at the hips and lower slowly by bending the standing knee.",
            "Keep the chest upright and descend as low as mobility allows.",
            "Push through the heel to return to standing with control.",
            "Use support or boxes during early progressions."
        ],
        reps: {
            Beginner: "3 sets x 4–6 assisted per leg",
            Intermediate: "3–4 sets x 6–10 per leg",
            Advanced: "4–6 sets x 8–12 per leg",
            Elite: "Weighted pistols or high-volume single-leg sets"
        },
        commonMistakes: [
            "Allowing the heel to lift",
            "Knee valgus (caving in)",
            "Rounding the lower back",
            "Rushing the descent"
        ]
    },
    {
        id: "planche",
        slug: "planche",
        title: "Planche",
        difficulty: "Elite",
        description: "A full-body static hold requiring immense shoulder, chest, and core strength. The planche involves holding your body parallel to the ground, supported only by your hands.",
        image: "/images/planche.png",
        targetArea: ["Shoulders", "Chest", "Core", "Arms", "Back"],
        equipment: "Parallettes or floor",
        progression: "Frog stand → Tuck planche → Straddle planche → Full planche",
        tips: ["Keep arms straight", "Engage core and glutes", "Lean forward for balance"],
        steps: [
            "Begin with static holds (frog stand, tuck planche) to build balance.",
            "Develop forward lean and shoulder protraction with pseudo planche work.",
            "Progress to longer tuck/straddle holds as strength increases.",
            "Maintain hollow body position and steady breathing.",
            "Do short, frequent holds—quality over duration."
        ],
        reps: {
            Beginner: "Short holds (10–20s) of conditioning progressions",
            Intermediate: "Tuck/advanced tuck holds 10–30s",
            Advanced: "Straddle/tuck planche holds 20–60s",
            Elite: "Full planche holds — low reps, long tension training"
        },
        commonMistakes: [
            "Trying full planche too early",
            "Lack of shoulder conditioning",
            "Poor wrist mobility and pain",
            "Relaxing core or hollow position"
        ]
    },
    {
        id: "humanflag",
        slug: "human-flag",
        title: "Human Flag",
        difficulty: "Elite",
        description: "An iconic display of core and shoulder strength. The human flag involves holding your body horizontally while gripping a vertical bar.",
        image: "/images/human-flag.png",
        targetArea: ["Obliques", "Lats", "Shoulders", "Grip", "Core"],
        equipment: "Vertical pole or sturdy bar",
        progression: "Vertical hold → Tuck flag → Straddle flag → Full human flag",
        tips: ["Pull with top arm, push with bottom", "Keep body rigid", "Engage entire core"],
        steps: [
            "Train vertical holds and side pulls to build unilateral strength.",
            "Practice tuck flag holds with bent legs to reduce lever length.",
            "Work negative lowering from assisted holds to strengthen the descent.",
            "Progress to straddle or straight leg positions as strength improves.",
            "Develop strong grip and scapular control for both arms."
        ],
        reps: {
            Beginner: "Short assisted holds and side-pull conditioning",
            Intermediate: "Tuck flag holds 5–15s",
            Advanced: "Straddle or one-leg extended holds 10–30s",
            Elite: "Full human flag holds 10–30s and repetitions"
        },
        commonMistakes: [
            "Relying on momentum rather than strength",
            "Weak grip or poor top-arm pulling",
            "Lack of core rigidity",
            "Poor shoulder/scapular control"
        ]
    }
];

export default Workouts;
