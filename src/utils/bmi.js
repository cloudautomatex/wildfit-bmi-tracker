export function calculateBmi(weightKg, heightCm) {
  const heightMeters = heightCm / 100;
  return weightKg / (heightMeters * heightMeters);
}

export function getBmiProfile(bmi) {
  if (bmi < 18.5) {
    return {
      category: 'Underweight',
      animal: 'Wolf',
      animalImage: '/animals/wolf.svg',
      message: 'Lean and agile like a wolf. Focus on healthy weight gain.',
      accent: 'from-sky-500 to-cyan-400',
      tone: 'bg-sky-50 text-sky-800 dark:bg-sky-950 dark:text-sky-100'
    };
  }

  if (bmi <= 24.9) {
    return {
      category: 'Healthy',
      animal: 'Tiger',
      animalImage: '/animals/tiger.svg',
      message: 'Strong and balanced like a tiger. Keep maintaining your fitness.',
      accent: 'from-emerald-500 to-lime-400',
      tone: 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-100'
    };
  }

  if (bmi <= 29.9) {
    return {
      category: 'Overweight',
      animal: 'Bull',
      animalImage: '/animals/bull.svg',
      message: 'Powerful like a bull. Focus on balanced diet and activity.',
      accent: 'from-amber-500 to-yellow-300',
      tone: 'bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-100'
    };
  }

  if (bmi <= 34.9) {
    return {
      category: 'Obesity Class I',
      animal: 'Bear',
      animalImage: '/animals/bear.svg',
      message: 'Strong but needs control. Start regular exercise and mindful eating.',
      accent: 'from-orange-500 to-red-400',
      tone: 'bg-orange-50 text-orange-800 dark:bg-orange-950 dark:text-orange-100'
    };
  }

  return {
    category: 'Obesity Class II+',
    animal: 'Lion',
    animalImage: '/animals/lion.svg',
    message: 'Lead your health journey like a lion. Take action with discipline.',
    accent: 'from-rose-500 to-fuchsia-500',
    tone: 'bg-rose-50 text-rose-800 dark:bg-rose-950 dark:text-rose-100'
  };
}

export function getSuggestions(category) {
  const suggestions = {
    Underweight: [
      'Add calorie-dense whole foods such as nuts, yogurt, eggs, and legumes.',
      'Use strength training to build muscle steadily.',
      'Track meals for a week to spot missing protein or skipped meals.'
    ],
    Healthy: [
      'Keep your current exercise rhythm and review progress monthly.',
      'Mix cardio, mobility, and strength for balanced fitness.',
      'Protect sleep and hydration because they support weight stability.'
    ],
    Overweight: [
      'Start with daily walks and two simple strength sessions per week.',
      'Build plates around protein, fiber-rich carbs, and colorful vegetables.',
      'Reduce liquid calories and highly processed snacks gradually.'
    ],
    'Obesity Class I': [
      'Set small weekly goals that are easy to repeat.',
      'Choose low-impact activity first, then increase duration over time.',
      'Consider guidance from a qualified health professional.'
    ],
    'Obesity Class II+': [
      'Prioritize consistency over intensity for the first month.',
      'Ask a clinician for a personalized and safe health plan.',
      'Use habit tracking to build discipline one action at a time.'
    ]
  };

  return suggestions[category] ?? suggestions.Healthy;
}
