import {
  Overview,
  Accounts,
  Allocation,
  AllocationMap,
  Pipeline,
  Briefing,
  Principles,
  Guardrails,
  Rituals,
  Metrics,
} from "@/components/sections";

export const playbookSections = {
  overview: Overview,
  accounts: Accounts,
  allocation: Allocation,
  map: AllocationMap,
  pipeline: Pipeline,
  briefing: Briefing,
  principles: Principles,
  guardrails: Guardrails,
  rituals: Rituals,
  metrics: Metrics,
} as const;