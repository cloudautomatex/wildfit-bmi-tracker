export default function BmiGauge({ bmi }) {
  const safeBmi = bmi ?? 0;
  const progress = Math.min(Math.max((safeBmi / 40) * 100, 0), 100);

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
      <h3 className="text-lg font-bold">BMI Gauge</h3>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Range guide from lean to high risk.</p>

      <div className="mt-7">
        <div className="relative h-5 overflow-hidden rounded-full bg-gradient-to-r from-sky-400 via-emerald-400 via-amber-400 to-rose-500">
          <div
            className="absolute top-1/2 h-8 w-1.5 -translate-y-1/2 rounded-full bg-slate-950 shadow-lg transition-all duration-500 dark:bg-white"
            style={{ left: `calc(${progress}% - 3px)` }}
          />
        </div>
        <div className="mt-3 flex justify-between text-xs font-bold text-slate-500 dark:text-slate-400">
          <span>15</span>
          <span>18.5</span>
          <span>25</span>
          <span>30</span>
          <span>35+</span>
        </div>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-3 text-sm">
        {['Wolf', 'Tiger', 'Bull', 'Bear', 'Lion'].map((animal) => (
          <div key={animal} className="rounded-xl bg-white p-3 font-semibold shadow-sm dark:bg-slate-900">
            {animal}
          </div>
        ))}
      </div>
    </div>
  );
}
