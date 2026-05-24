import { Activity, BrainCircuit, Download, Moon, RotateCcw, Share2, Sun } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import BmiForm from './components/BmiForm.jsx';
import BmiGauge from './components/BmiGauge.jsx';
import FitnessTips from './components/FitnessTips.jsx';
import HistoryList from './components/HistoryList.jsx';
import ResultCard from './components/ResultCard.jsx';
import StatCard from './components/StatCard.jsx';
import { calculateBmi, getBmiProfile } from './utils/bmi.js';
import { validateForm } from './utils/validation.js';
import { useDarkMode } from './hooks/useDarkMode.js';
import { useLocalStorage } from './hooks/useLocalStorage.js';

const initialForm = {
  name: '',
  age: '',
  gender: '',
  height: '',
  weight: ''
};

export default function App() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);
  const [history, setHistory] = useLocalStorage('wildfit-bmi-history', []);
  const [isDark, setIsDark] = useDarkMode();
  const resultRef = useRef(null);

  const heroStats = useMemo(
    () => [
      { label: 'Wildlife profiles', value: '5', icon: Activity },
      { label: 'Offline ready', value: 'PWA', icon: BrainCircuit },
      { label: 'BMI insights', value: 'AI-style', icon: Sun }
    ],
    []
  );

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validateForm(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setResult(null);
      return;
    }

    const bmi = calculateBmi(Number(form.weight), Number(form.height));
    const profile = getBmiProfile(bmi);
    const nextResult = {
      id: crypto.randomUUID(),
      ...form,
      bmi,
      ...profile,
      createdAt: new Date().toISOString()
    };

    setResult(nextResult);
    setHistory((current) => [nextResult, ...current].slice(0, 6));
  }

  function resetTracker() {
    setForm(initialForm);
    setErrors({});
    setResult(null);
  }

  async function downloadResult() {
    if (!resultRef.current) return;
    const dataUrl = await toPng(resultRef.current, { cacheBust: true, pixelRatio: 2 });
    const link = document.createElement('a');
    link.download = `${result?.name || 'wildfit'}-bmi-result.png`;
    link.href = dataUrl;
    link.click();
  }

  async function shareResult() {
    if (!result) return;
    const text = `${result.name}'s BMI is ${result.bmi.toFixed(2)}: ${result.category} (${result.animal}). ${result.message}`;

    if (navigator.share) {
      await navigator.share({ title: 'WildFit BMI Tracker', text });
      return;
    }

    await navigator.clipboard.writeText(text);
    alert('Result copied to clipboard.');
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#2dd4bf_0,#2563eb_34%,#111827_72%)] px-4 py-6 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_420px] lg:items-center">
          <div className="animate-rise py-6 sm:py-10">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                Fitness + AI + Wildlife
              </span>
              <button
                type="button"
                onClick={() => setIsDark((value) => !value)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white transition hover:bg-white/25"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              WildFit BMI Tracker
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-cyan-50 sm:text-lg">
              Calculate BMI, reveal your animal fitness profile, save recent results, and install the tracker as a fast offline app.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {heroStats.map((item) => (
                <StatCard key={item.label} {...item} />
              ))}
            </div>
          </div>

          <div className="hidden min-h-[360px] items-center justify-center lg:flex">
            <div className="relative h-80 w-80 animate-float rounded-full bg-white/15 p-8 shadow-soft backdrop-blur">
              <img
                src="/animals/tiger.svg"
                alt="Tiger mascot"
                className="h-full w-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[420px_1fr] lg:px-8">
        <div className="space-y-6">
          <BmiForm form={form} errors={errors} onChange={handleChange} onSubmit={handleSubmit} />
          <FitnessTips />
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-bold">Your BMI Dashboard</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Result, gauge, animal card, and quick actions.</p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={shareResult}
                  disabled={!result}
                  className="icon-button"
                  aria-label="Share result"
                  title="Share result"
                >
                  <Share2 size={18} />
                </button>
                <button
                  type="button"
                  onClick={downloadResult}
                  disabled={!result}
                  className="icon-button"
                  aria-label="Download result"
                  title="Download result"
                >
                  <Download size={18} />
                </button>
                <button type="button" onClick={resetTracker} className="icon-button" aria-label="Reset tracker" title="Reset">
                  <RotateCcw size={18} />
                </button>
              </div>
            </div>

            <div className="grid gap-5 xl:grid-cols-[1fr_280px]">
              <div ref={resultRef}>
                <ResultCard result={result} />
              </div>
              <BmiGauge bmi={result?.bmi} />
            </div>
          </div>

          <HistoryList history={history} onClear={() => setHistory([])} />
        </div>
      </section>
    </main>
  );
}
