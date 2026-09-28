export type WeekPlan = {
  week: number
  title: string
  focus: string[]
  artifact: string
  outcome: string
}

export const weekPlans: WeekPlan[] = [
  { week: 1, title: 'Enterprise Pre-Sales + Qualification', focus: ['Business drivers', 'Qualification', 'Stakeholders', 'Buying process', 'Win strategy'], artifact: 'Opportunity Qualification Pack', outcome: 'Decide whether and how to pursue an Azure opportunity.' },
  { week: 2, title: 'Discovery + Assessment', focus: ['Discovery workshops', 'Inventory', 'Dependencies', 'NFRs', 'Complexity'], artifact: 'Discovery & Assessment Workbook', outcome: 'Turn incomplete customer data into evidence, unknowns and risks.' },
  { week: 3, title: 'Shape + Architecture', focus: ['CAF', 'Landing Zones', 'WAF', 'Network', 'Identity', 'Security'], artifact: 'Target Azure Architecture', outcome: 'Shape options and defend a supportable target architecture.' },
  { week: 4, title: 'Migration + Modernization + AI', focus: ['6R/7R', 'Migration waves', 'Modernization', 'Azure AI', 'RAG', 'Agents'], artifact: 'Transformation Strategy', outcome: 'Choose migration and modernization paths with business rationale.' },
  { week: 5, title: 'Consumption + Estimation + Staffing', focus: ['ACR', 'Pricing', 'WBS', 'Productivity', 'Resource loading'], artifact: 'ROM + Resource Model', outcome: 'Build a transparent, assumption-led estimate and staffing model.' },
  { week: 6, title: 'Commercials + SOW', focus: ['Revenue', 'Cost', 'GP', 'GM', 'TCV', 'SOW', 'Change control'], artifact: 'Commercial Model + Draft SOW', outcome: 'Protect margin and delivery through explicit commercial boundaries.' },
  { week: 7, title: 'Microsoft Alignment + Proposal', focus: ['Microsoft roles', 'Co-sell', 'Consumption', 'Executive story'], artifact: 'Executive Proposal', outcome: 'Align customer, partner and Microsoft interests without losing deal discipline.' },
  { week: 8, title: 'Defence + Negotiation + Handover', focus: ['Defence', 'Objections', 'Negotiation', 'RAID', 'Handover'], artifact: 'Solution Defence + Handover Pack', outcome: 'Defend the deal and transfer commitments safely to delivery.' },
]

export const memoryCards = [
  { term: 'Discovery', analogy: 'Doctor before surgeon', meaning: 'Ask, test, diagnose and assess risk before prescribing migration.' },
  { term: 'Estimation', analogy: 'Building contractor', meaning: 'You cannot price a house from “make it large”; scope, materials and constraints matter.' },
  { term: 'Assumptions', analogy: 'Estimate insurance policy', meaning: 'State what must remain true for the estimate to stay valid.' },
  { term: 'Contingency', analogy: 'Spare tyre', meaning: 'A deliberate allowance for known uncertainty, not unexplained padding.' },
  { term: 'Gross Margin', analogy: 'Fuel left after the journey', meaning: 'Revenue is not profit. Delivery cost consumes part of the price.' },
  { term: 'ROM', analogy: 'Early map, not turn-by-turn navigation', meaning: 'Useful directional estimate with explicit confidence boundaries.' },
]

export const seniorManagerFramework = ['Problem', 'Business impact', 'Facts', 'Unknowns', 'Options', 'Trade-offs', 'Recommendation', 'Cost', 'Risk', 'Decision required']
