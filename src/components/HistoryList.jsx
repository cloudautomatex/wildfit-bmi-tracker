export default function HistoryList({ history, onClear }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold">BMI History</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Recent calculations saved on this device.</p>
        </div>
        <button
          type="button"
          onClick={onClear}
          disabled={history.length === 0}
          className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50 disabled:opacity-40 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          Clear
        </button>
      </div>

      {history.length === 0 ? (
        <p className="rounded-xl bg-slate-50 p-4 text-sm text-slate-500 dark:bg-slate-950 dark:text-slate-400">
          No history yet. Your latest BMI checks will appear here.
        </p>
      ) : (
        <div className="grid gap-3 md:grid-cols-2">
          {history.map((item) => (
            <div key={item.id} className="rounded-xl border border-slate-100 p-4 dark:border-slate-800">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{new Date(item.createdAt).toLocaleString()}</p>
                </div>
                <img src={item.animalImage} alt={item.animal} className="h-12 w-12" />
              </div>
              <div className="mt-3 flex items-end justify-between">
                <span className="text-2xl font-black">{item.bmi.toFixed(2)}</span>
                <span className="text-sm font-bold text-slate-500 dark:text-slate-300">{item.animal}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
