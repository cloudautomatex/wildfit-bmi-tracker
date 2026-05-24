import { Sparkles } from 'lucide-react';
import { getSuggestions } from '../utils/bmi.js';

export default function ResultCard({ result }) {
  if (!result) {
    return (
      <div className="flex min-h-[390px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center dark:border-slate-700 dark:bg-slate-950">
        <img src="/animals/wolf.svg" alt="Wolf placeholder" className="mb-5 h-36 w-36 opacity-80" />
        <h3 className="text-2xl font-black">Ready for your animal match?</h3>
        <p className="mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
          Complete the form and your BMI card will appear here with a profile, message, and suggestions.
        </p>
      </div>
    );
  }

  const suggestions = getSuggestions(result.category);

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <div className={`bg-gradient-to-br ${result.accent} p-5 text-white`}>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/80">{result.name}'s BMI</p>
            <div className="mt-2 flex items-end gap-3">
              <span className="text-5xl font-black">{result.bmi.toFixed(2)}</span>
              <span className="pb-2 text-lg font-bold">{result.category}</span>
            </div>
          </div>
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-bold backdrop-blur">{result.animal}</span>
        </div>
      </div>

      <div className="grid gap-5 p-5 sm:grid-cols-[180px_1fr]">
        <div className="flex items-center justify-center rounded-2xl bg-slate-100 p-4 dark:bg-slate-900">
          <img src={result.animalImage} alt={result.animal} className="h-40 w-40 object-contain" />
        </div>

        <div>
          <p className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${result.tone}`}>{result.gender}, age {result.age}</p>
          <p className="mt-4 text-base font-semibold leading-7 text-slate-700 dark:text-slate-200">{result.message}</p>

          <div className="mt-5 rounded-2xl bg-slate-50 p-4 dark:bg-slate-900">
            <div className="mb-3 flex items-center gap-2 text-sm font-bold">
              <Sparkles size={17} className="text-teal-500" />
              AI-style suggestions
            </div>
            <ul className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {suggestions.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
