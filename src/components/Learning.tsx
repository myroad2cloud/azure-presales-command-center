import { useState } from 'react'
import { memoryCards, seniorManagerFramework, weekPlans } from '../data/curriculum'
import { defenceQuestions } from '../data/simulators'

export function LearningJourney(){return <section className="panel lab"><p className="eyebrow">8-WEEK JOURNEY</p><h2>Every week produces a deal artifact</h2><div className="week-grid">{weekPlans.map(w=><article key={w.week}><span>WEEK {w.week}</span><h3>{w.title}</h3><p>{w.outcome}</p><ul>{w.focus.map(x=><li key={x}>{x}</li>)}</ul><strong>Build: {w.artifact}</strong></article>)}</div></section>}

export function MemoryPalace(){return <section className="panel lab"><p className="eyebrow">MEMORY PALACE</p><h2>Remember the concept, not the definition</h2><div className="memory-grid">{memoryCards.map(c=><article key={c.term}><span>{c.term}</span><h3>{c.analogy}</h3><p>{c.meaning}</p></article>)}</div><h3>Senior Manager decision frame</h3><div className="framework">{seniorManagerFramework.map((x,i)=><span key={x}>{i+1}. {x}</span>)}</div></section>}

export function DefenceLab(){const [open,setOpen]=useState<number|null>(null);return <section className="panel lab"><p className="eyebrow">SOLUTION DEFENCE</p><h2>Practice evidence-led answers</h2><div className="defence-list">{defenceQuestions.map(([cat,q,a],i)=><button key={q} onClick={()=>setOpen(open===i?null:i)}><small>{cat}</small><strong>{q}</strong>{open===i&&<p><b>Director-level structure:</b> {a}</p>}</button>)}</div></section>}
