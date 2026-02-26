import type { BatchInfo } from "./brewing-config";

interface Props {
  batch: BatchInfo;
}

export default function BatchSummary({ batch }: Props) {
  return (
    <div className="rounded-2xl p-8 flex flex-col items-center justify-center border border-[#d4a03c]/30"
      style={{ background: "var(--theme-glass-bg)", backdropFilter: "blur(20px)" }}>
      <p className="text-[#d4a03c] text-xs tracking-widest mb-3">BATCH COMPLETE</p>
      <p className="text-6xl md:text-7xl font-black text-[#d4a03c] tabular-nums"
        style={{ fontFamily: "'Inter', sans-serif" }}>
        {batch.abv}
      </p>
      <p className="text-[#9a8a74] text-sm mt-2" style={{ fontFamily: "'Sarabun', sans-serif" }}>
        ABV &bull; FG {batch.actualFg} &bull; {batch.ibu} IBU
      </p>
      <div className="mt-4 px-4 py-2 rounded-full bg-[#d4a03c]/10 border border-[#d4a03c]/20">
        <p className="text-[#d4a03c] text-xs" style={{ fontFamily: "'Sarabun', sans-serif" }}>
          Brewed {batch.brewDate} &bull; Tasted {batch.tasting?.date}
        </p>
      </div>
    </div>
  );
}
