export default function StatCard({ label, value, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/15 p-4 backdrop-blur">
      <Icon size={21} className="mb-3 text-cyan-100" />
      <p className="text-2xl font-black">{value}</p>
      <p className="text-sm text-cyan-50">{label}</p>
    </div>
  );
}
