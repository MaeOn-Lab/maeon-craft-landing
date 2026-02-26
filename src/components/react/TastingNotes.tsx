import type { Tasting } from "./brewing-config";
import { statusColors, statusTextColors } from "./brewing-config";

interface Props {
  tasting: Tasting;
}

export default function TastingNotes({ tasting }: Props) {
  return (
    <div className="mb-12">
      <h2 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
        Tasting Notes
      </h2>
      <p className="text-[#9a8a74] text-sm mb-6" style={{ fontFamily: "'Sarabun', sans-serif" }}>
        Day {tasting.day} — {tasting.date}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {tasting.scores.map((s) => (
          <div
            key={s.attr}
            className={`rounded-xl p-4 border-l-4 ${statusColors[s.status]}`}
            style={{ background: "var(--theme-glass-bg)", backdropFilter: "blur(20px)", border: "1px solid var(--theme-glass-border)", borderLeftWidth: "4px" }}
          >
            <p className={`text-xs font-medium mb-1 ${statusTextColors[s.status]}`}>{s.attr}</p>
            <p className="text-[#c4b49e] text-sm" style={{ fontFamily: "'Sarabun', sans-serif" }}>{s.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl p-5"
        style={{ background: "var(--theme-glass-amber-bg)", backdropFilter: "blur(20px)", border: "1px solid var(--theme-glass-amber-border)" }}>
        <p className="text-[#d4a03c] text-xs tracking-widest mb-2">ROOT CAUSE</p>
        <p className="text-[#c4b49e] text-sm" style={{ fontFamily: "'Sarabun', sans-serif" }}>{tasting.rootCause}</p>
        <p className="text-[#d4a03c] text-xs tracking-widest mt-4 mb-2">LESSON LEARNED</p>
        <p className="text-[#c4b49e] text-sm" style={{ fontFamily: "'Sarabun', sans-serif" }}>{tasting.lesson}</p>
      </div>
    </div>
  );
}
