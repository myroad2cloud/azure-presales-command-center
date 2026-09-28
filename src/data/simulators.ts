export const discoveryQuestions = [
  ['Business', 'What business event makes this transformation necessary now?'],
  ['Applications', 'Which applications are business critical and who owns each one?'],
  ['Infrastructure', 'Is the 500-VM inventory authoritative and how current is utilization data?'],
  ['Database', 'Which databases are clustered, licensed, latency-sensitive or unsupported?'],
  ['Network', 'What are the traffic flows, latency constraints, egress patterns and connectivity dependencies?'],
  ['Identity', 'Which workloads depend on AD, legacy authentication, service accounts or certificates?'],
  ['Security', 'What controls, data classifications and regulatory obligations are mandatory?'],
  ['DR', 'What RTO and RPO are required per application tier?'],
  ['Operations', 'Who will operate Azure after migration and what tooling must integrate?'],
  ['Commercials', 'Is the customer optimizing for deadline, cost, modernization, risk reduction or a combination?'],
] as const

export const defenceQuestions = [
  ['Architecture', 'Why does this design need a landing zone before workload migration?', 'Tie governance, identity, network, policy and operations to scale and risk.'],
  ['Migration', 'Why can’t all 500 VMs move in one wave?', 'Use dependency, business criticality, testing, rollback and operational capacity evidence.'],
  ['Networking', 'Why hub-spoke instead of vWAN?', 'Compare scale, branch connectivity, operational model, routing and cost.'],
  ['Security', 'Why private endpoints for this workload?', 'Link data exposure, compliance, DNS, operations and cost rather than saying “more secure”.'],
  ['AI', 'Why RAG rather than fine-tuning?', 'Separate knowledge grounding from model behavior and discuss freshness, governance and cost.'],
  ['DR', 'Why is one region insufficient for this stated requirement?', 'Map business availability target to failure domains, RTO/RPO and budget.'],
  ['Estimation', 'Why do you need eight migration engineers?', 'Show WBS, productivity, wave concurrency, complexity distribution and timeline.'],
  ['Commercials', 'Why does a 10% discount materially change the deal?', 'Show price, unchanged delivery cost, GP and GM before and after discount.'],
  ['SOW', 'Why is “migrate all applications” unsafe wording?', 'Expose missing counts, patterns, acceptance criteria, dependencies and responsibilities.'],
  ['Handover', 'What must delivery explicitly accept before kickoff?', 'Scope, assumptions, exclusions, decisions, RAID, commercials and customer dependencies.'],
]

export const redFlags = [
  ['Inventory incomplete + fixed price requested', 'Estimation risk'],
  ['Dependencies unknown + migration dates committed', 'Delivery risk'],
  ['99.99% target + single-region budget', 'Architecture risk'],
  ['Price reduced + delivery cost unchanged', 'Margin risk'],
  ['AI use case approved + data access unresolved', 'Security and feasibility risk'],
]
