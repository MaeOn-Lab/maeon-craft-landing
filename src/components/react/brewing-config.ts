// Shared types and config for Maeon Craft brewing components

export interface TastingScore {
  attr: string;
  status: "good" | "warn" | "bad";
  note: string;
}

export interface CryoPoint {
  point: string;
  detail: string;
}

export interface DryHopAnalysis {
  isoAlpha: string;
  hulupone: string;
  verdict: string;
}

export interface AnalysisSource {
  label: string;
  url: string;
}

export interface OracleAnalysis {
  date: string;
  cryoHops: CryoPoint[];
  dryHop: DryHopAnalysis;
  nextBatch: string;
  sources: AnalysisSource[];
}

export interface Tasting {
  date: string;
  day: number;
  scores: TastingScore[];
  rootCause: string;
  lesson: string;
}

export interface BatchInfo {
  id: string;
  name: string;
  style: string;
  brewDate: string;
  og: string;
  actualFg: string;
  abv: string;
  ibu: string;
  volume: string;
  system: string;
  yeast: string;
  brewer: string;
  team: string[];
  status: "fermenting" | "complete" | "planning";
  tasting?: Tasting;
  analysis?: OracleAnalysis;
}

export interface TimelineEvent {
  date: string;
  time: string;
  event: string;
}

export interface Milestone {
  day: number;
  date: string;
  status: "done" | "active" | "upcoming";
  label: string;
  detail: string;
}

export const statusColors: Record<string, string> = {
  good: "border-[#2d5a27]",
  warn: "border-[#d4a03c]",
  bad: "border-red-500",
};

export const statusTextColors: Record<string, string> = {
  good: "text-[#4a8c3f]",
  warn: "text-[#d4a03c]",
  bad: "text-red-400",
};

export const milestoneColors: Record<string, string> = {
  done: "bg-[#2d5a27]/20 text-[#4a8c3f] border-[#2d5a27]/30",
  active: "bg-[#d4a03c]/20 text-[#d4a03c] border-[#d4a03c]/30",
  upcoming: "bg-[#c4b49e]/10 text-[#9a8a74] border-[#c4b49e]/20",
};
