export type DealStage = {
  id: string
  label: string
  summary: string
  owner: string
  outputs: string[]
  risks: string[]
  seniorManagerAction: string
}

export const dealStages: DealStage[] = [
  { id: 'qualify', label: 'QUALIFY', summary: 'Decide whether the opportunity is worth pursuing.', owner: 'Sales + Pre-Sales', outputs: ['Qualification summary', 'Stakeholder map', 'Win themes'], risks: ['Weak business driver', 'No decision process', 'Unclear budget'], seniorManagerAction: 'Challenge weak qualification before solutioning starts.' },
  { id: 'discover', label: 'DISCOVER', summary: 'Gather the facts needed to shape a defensible solution.', owner: 'Pre-Sales + Customer SMEs', outputs: ['Discovery questionnaire', 'Requirements log', 'Unknowns list'], risks: ['Incomplete inventory', 'Hidden dependencies', 'Unvalidated NFRs'], seniorManagerAction: 'Protect the team from premature commitments.' },
  { id: 'assess', label: 'ASSESS', summary: 'Convert discovery data into complexity, readiness and risk findings.', owner: 'Architecture + Migration', outputs: ['Assessment', 'Complexity matrix', 'Dependency view'], risks: ['Bad source data', 'False precision', 'Unsupported assumptions'], seniorManagerAction: 'Validate evidence and confidence level.' },
  { id: 'shape', label: 'SHAPE', summary: 'Turn findings into solution options and a recommended path.', owner: 'Lead Architect', outputs: ['Options', 'Trade-off analysis', 'Recommendation'], risks: ['Elegant but impractical design', 'Ignoring customer maturity'], seniorManagerAction: 'Frame choices in business, risk and cost terms.' },
  { id: 'architect', label: 'ARCHITECT', summary: 'Define the target Azure architecture and control model.', owner: 'Solution Architecture', outputs: ['Target architecture', 'Security model', 'Operational model'], risks: ['Over-engineering', 'Under-designed resilience'], seniorManagerAction: 'Ensure architecture is supportable and commercial.' },
  { id: 'estimate', label: 'ESTIMATE', summary: 'Translate scope into effort, duration and productivity assumptions.', owner: 'Solutioning + Delivery', outputs: ['WBS', 'Effort estimate', 'ROM'], risks: ['Hidden effort', 'Bad productivity assumptions'], seniorManagerAction: 'Make every assumption visible and defensible.' },
  { id: 'consumption', label: 'CONSUMPTION', summary: 'Estimate Azure consumption and economic options.', owner: 'Cloud Economics + Architecture', outputs: ['Consumption model', 'ACR view', 'Cost options'], risks: ['Using retail price as final commercial truth', 'Missing network/backup/monitoring cost'], seniorManagerAction: 'Separate learning ROM from validated pricing.' },
  { id: 'staff', label: 'STAFF', summary: 'Build the resource plan required to deliver the solution.', owner: 'Delivery + Solutioning', outputs: ['Resource loading', 'Role mix', 'Onshore/offshore split'], risks: ['Understaffing', 'No stabilization capacity'], seniorManagerAction: 'Check feasibility before price is committed.' },
  { id: 'commercials', label: 'COMMERCIALS', summary: 'Convert effort into price, margin and deal economics.', owner: 'Sales + Finance + Solutioning', outputs: ['Price', 'GM', 'TCV', 'Commercial assumptions'], risks: ['Margin erosion', 'Discount without scope change'], seniorManagerAction: 'Protect margin without creating delivery exposure.' },
  { id: 'propose', label: 'PROPOSE', summary: 'Turn the solution into a clear executive proposal and SOW.', owner: 'Sales + Pre-Sales', outputs: ['Proposal', 'SOW', 'Executive story'], risks: ['Ambiguous scope', 'Weak acceptance criteria'], seniorManagerAction: 'Review customer promise versus delivery reality.' },
  { id: 'defend', label: 'DEFEND', summary: 'Defend architecture, estimate, commercials and delivery feasibility.', owner: 'Pre-Sales Lead', outputs: ['Defence pack', 'Evidence set', 'Objection responses'], risks: ['Unsupported numbers', 'Inconsistent answers'], seniorManagerAction: 'Lead the narrative and anchor answers in evidence.' },
  { id: 'negotiate', label: 'NEGOTIATE', summary: 'Resolve scope, price, risk and contractual trade-offs.', owner: 'Sales + Leadership + Legal', outputs: ['Negotiated terms', 'Decision log', 'Change log'], risks: ['Silent scope growth', 'Margin concessions'], seniorManagerAction: 'Trade scope, risk and price consciously.' },
  { id: 'handover', label: 'HANDOVER', summary: 'Transfer assumptions, commitments and risks to delivery.', owner: 'Pre-Sales + Delivery', outputs: ['Handover pack', 'RAID', 'Decision log'], risks: ['Lost assumptions', 'Commercial blind spots'], seniorManagerAction: 'Ensure delivery accepts the deal knowingly.' },
  { id: 'delivery', label: 'DELIVERY', summary: 'Execute the committed transformation with governance.', owner: 'Delivery', outputs: ['Execution', 'Governance', 'Change control'], risks: ['Scope drift', 'Operational readiness gaps'], seniorManagerAction: 'Stay connected to major deviations and change triggers.' },
]
