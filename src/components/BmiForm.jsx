import { Calculator } from 'lucide-react';

const genderOptions = ['Female', 'Male', 'Non-binary', 'Prefer not to say'];

export default function BmiForm({ form, errors, onChange, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="mb-5">
        <h2 className="text-xl font-bold">Profile Inputs</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Enter your details to unlock your animal profile.</p>
      </div>

      <div className="grid gap-4">
        <label>
          <span className="field-label">Name</span>
          <input
            className="field-input"
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Alex"
            autoComplete="name"
          />
          <p className="field-error">{errors.name}</p>
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label>
            <span className="field-label">Age</span>
            <input
              className="field-input"
              name="age"
              type="number"
              min="1"
              value={form.age}
              onChange={onChange}
              placeholder="28"
            />
            <p className="field-error">{errors.age}</p>
          </label>

          <label>
            <span className="field-label">Gender</span>
            <select className="field-input" name="gender" value={form.gender} onChange={onChange}>
              <option value="">Select</option>
              {genderOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <p className="field-error">{errors.gender}</p>
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label>
            <span className="field-label">Height (cm)</span>
            <input
              className="field-input"
              name="height"
              type="number"
              min="1"
              step="0.1"
              value={form.height}
              onChange={onChange}
              placeholder="170"
            />
            <p className="field-error">{errors.height}</p>
          </label>

          <label>
            <span className="field-label">Weight (kg)</span>
            <input
              className="field-input"
              name="weight"
              type="number"
              min="1"
              step="0.1"
              value={form.weight}
              onChange={onChange}
              placeholder="68"
            />
            <p className="field-error">{errors.weight}</p>
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-teal-600 dark:bg-teal-400 dark:text-slate-950 dark:hover:bg-teal-300"
      >
        <Calculator size={18} />
        Calculate BMI
      </button>
    </form>
  );
}
