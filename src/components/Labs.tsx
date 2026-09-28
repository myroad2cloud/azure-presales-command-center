import { useMemo, useState } from 'react'
import { discoveryQuestions, redFlags } from '../data/simulators'

export function DiscoveryLab() {
  const [selected, setSelected] = useState<string[]>([])
  const toggle = (q: string) => setSelected((s) => s.includes(q) ? s.filter(x => x !== q) : [...s, q])
  const score = Math.round((selected.length / discoveryQuestions.length) * 100)
  return <section className="panel lab"><p className="eyebrow">DISCOVERY SIMULATOR</p><h2>Customer: “500 servers. Move everything in six months.”</h2><p className="lead">Choose the questions you would insist on answering before committing the plan.</p><div className="choice-grid">{discoveryQuestions.map(([cat,q]) => <button className={selected.includes(q) ? 'selected' : ''} onClick={()=>toggle(q)} key={q}><small>{cat}</small>{q}</button>)}</div><div className="scorebar"><span style={{width:`${score}%`}}/><strong>{score}% discovery coverage</strong></div>{score < 70 && <p className="warning">Coverage is still weak. Missing questions can change architecture, effort, cost or risk.</p>}</section>
}

export function EstimationLab() {
  const [apps,setApps]=useState(75), [low,setLow]=useState(35), [medium,setMedium]=useState(30), [high,setHigh]=useState(10), [cont,setCont]=useState(15)
  const effort = useMemo(()=>Math.round((low*2 + medium*5 + high*10)*(1+cont/100)),[low,medium,high,cont])
  const fte = Math.max(1, Math.ceil(effort/(8*20)))
  return <section className="panel lab"><p className="eyebrow">ESTIMATION LAB</p><h2>Turn complexity into transparent effort</h2><div className="input-grid"><label>Applications<input type="number" value={apps} onChange={e=>setApps(+e.target.value)}/></label><label>Low complexity<input type="number" value={low} onChange={e=>setLow(+e.target.value)}/></label><label>Medium<input type="number" value={medium} onChange={e=>setMedium(+e.target.value)}/></label><label>High<input type="number" value={high} onChange={e=>setHigh(+e.target.value)}/></label><label>Contingency %<input type="number" value={cont} onChange={e=>setCont(+e.target.value)}/></label></div><div className="result-grid"><div><strong>{effort}</strong><span>person-days</span></div><div><strong>{fte}</strong><span>indicative FTE for 8 months</span></div><div><strong>{apps-(low+medium+high)}</strong><span>unclassified apps</span></div></div><p className="formula">Learning formula: Low 2d + Medium 5d + High 10d, then contingency. This is a teaching ROM, not a validated customer estimate.</p></section>
}

export function CommercialLab() {
  const [price,setPrice]=useState(32000000), [cost,setCost]=useState(22000000), [discount,setDiscount]=useState(0)
  const revenue=price*(1-discount/100), gp=revenue-cost, gm=revenue ? gp/revenue*100 : 0
  return <section className="panel lab"><p className="eyebrow">COMMERCIAL LAB</p><h2>See the margin consequence before conceding price</h2><div className="input-grid"><label>Customer price ₹<input type="number" value={price} onChange={e=>setPrice(+e.target.value)}/></label><label>Delivery cost ₹<input type="number" value={cost} onChange={e=>setCost(+e.target.value)}/></label><label>Discount %<input type="number" value={discount} onChange={e=>setDiscount(+e.target.value)}/></label></div><div className="result-grid"><div><strong>₹{(revenue/10000000).toFixed(2)} Cr</strong><span>Revenue</span></div><div><strong>₹{(gp/10000000).toFixed(2)} Cr</strong><span>Gross profit</span></div><div><strong>{gm.toFixed(1)}%</strong><span>Gross margin</span></div></div><p className="formula">GP = Revenue − Delivery Cost. GM% = GP ÷ Revenue × 100. Discounting price without changing cost compresses margin.</p></section>
}

export function SowLab() {
  const [reveal,setReveal]=useState(false)
  return <section className="panel lab"><p className="eyebrow">SOW RISK LAB</p><h2>“Partner will migrate customer applications to Azure.”</h2><p>Would you allow this sentence into a fixed-price SOW?</p><button className="primary-action" onClick={()=>setReveal(!reveal)}>{reveal?'Hide review':'Review the risk'}</button>{reveal&&<div className="review"><h3>Why this is unsafe</h3><p>No application count, complexity boundary, migration pattern, downtime assumption, acceptance criteria, dependency boundary, customer responsibility or exclusion.</p><h3>Stronger structure</h3><p>Define the named/inventory-bounded workloads, agreed migration pattern, prerequisites, customer dependencies, acceptance evidence and explicit change triggers.</p></div>}<div className="flag-list">{redFlags.map(([f,r])=><div key={f}><strong>{r}</strong><span>{f}</span></div>)}</div></section>
}
