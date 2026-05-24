import { Dumbbell, HeartPulse, Salad } from 'lucide-react';

const tips = [
  { title: 'Move daily', icon: HeartPulse, text: 'A short walk after meals can make activity feel natural.' },
  { title: 'Build strength', icon: Dumbbell, text: 'Two weekly strength sessions help support long-term fitness.' },
  { title: 'Eat balanced', icon: Salad, text: 'Pair protein, fiber, and hydration for steadier energy.' }
];

export default function FitnessTips() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <h2 className="text-xl font-bold">Fitness Tips</h2>
      <div className="mt-4 grid gap-3">
        {tips.map(({ title, icon: Icon, text }) => (
          <div key={title} className="flex gap-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-950">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-700 dark:bg-teal-400/15 dark:text-teal-300">
              <Icon size={19} />
            </span>
            <div>
              <h3 className="font-bold">{title}</h3>
              <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
