import type { OracleAnalysis as OracleAnalysisType } from "./brewing-config";

interface Props {
  analysis: OracleAnalysisType;
}

export default function OracleAnalysis({ analysis }: Props) {
  return (
    <div className="mb-12">
      <h2 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
        Oracle Analysis
      </h2>
      <p className="text-[#9a8a74] text-sm mb-6" style={{ fontFamily: "'Sarabun', sans-serif" }}>
        Research from {analysis.date} — Cryo Hops + Dry Hop Science
      </p>

      {/* Cryo Hops */}
      <div className="mb-6">
        <p className="text-[#4a8c3f] text-xs tracking-widest mb-4">CRYO HOPS — CAN THEY FIX THIS?</p>
        <div className="space-y-3">
          {analysis.cryoHops.map((c, i) => (
            <div key={i} className="rounded-xl p-4 border-l-4 border-[#2d5a27]"
              style={{ background: "var(--theme-glass-bg)", backdropFilter: "blur(20px)", border: "1px solid var(--theme-glass-border)", borderLeftWidth: "4px", borderLeftColor: "#2d5a27" }}>
              <p className="text-[#4a8c3f] text-sm font-medium mb-1">{i + 1}. {c.point}</p>
              <p className="text-[#c4b49e] text-sm" style={{ fontFamily: "'Sarabun', sans-serif" }}>{c.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dry Hop Science */}
      <div className="mb-6">
        <p className="text-[#d4a03c] text-xs tracking-widest mb-4">DRY HOP vs OXIDIZED BITTERNESS</p>
        <div className="rounded-xl p-5 space-y-4"
          style={{ background: "var(--theme-glass-amber-bg)", backdropFilter: "blur(20px)", border: "1px solid var(--theme-glass-amber-border)" }}>
          <div>
            <p className="text-[#d4a03c] text-xs tracking-widest mb-1">ISO-ALPHA ACID</p>
            <p className="text-[#c4b49e] text-sm" style={{ fontFamily: "'Sarabun', sans-serif" }}>{analysis.dryHop.isoAlpha}</p>
          </div>
          <div>
            <p className="text-red-400 text-xs tracking-widest mb-1">HULUPONE (OXIDIZED BETA ACID)</p>
            <p className="text-[#c4b49e] text-sm" style={{ fontFamily: "'Sarabun', sans-serif" }}>{analysis.dryHop.hulupone}</p>
          </div>
          <div>
            <p className="text-[#d4a03c] text-xs tracking-widest mb-1">VERDICT</p>
            <p className="text-[#c4b49e] text-sm" style={{ fontFamily: "'Sarabun', sans-serif" }}>{analysis.dryHop.verdict}</p>
          </div>
        </div>
      </div>

      {/* Next Batch */}
      <div className="rounded-xl p-5 border border-[#2d5a27]/30 bg-[#2d5a27]/5">
        <p className="text-[#4a8c3f] text-xs tracking-widest mb-2">NEXT BATCH PLAN</p>
        <p className="text-white text-sm font-medium" style={{ fontFamily: "'Sarabun', sans-serif" }}>{analysis.nextBatch}</p>
      </div>

      {/* Sources */}
      <div className="mt-4 flex flex-wrap gap-2">
        {analysis.sources.map((s) => (
          <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer"
            className="text-xs text-[#9a8a74] hover:text-[#d4a03c] transition-colors underline underline-offset-2">
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}
