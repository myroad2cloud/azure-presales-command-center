import { useMemo, useState } from 'react'
import { memoryCards, seniorManagerFramework, weekPlans } from '../data/curriculum'
import { defenceQuestions } from '../data/defenceQuestions'

export function LearningJourney(){return <section className="panel lab"><p className="eyebrow">8-WEEK JOURNEY</p><h2>Every week produces a deal artifact</h2><div className="week-grid">{weekPlans.map(w=><article key={w.week}><span>WEEK {w.week}</span><h3>{w.title}</h3><p>{w.outcome}</p><ul>{w.focus.map(x=><li key={x}>{x}</li>)}</ul><strong>Build: {w.artifact}</strong></article>)}</div></section>}

export function MemoryPalace(){return <section className="panel lab"><p className="eyebrow">MEMORY PALACE</p><h2>Remember the concept, not the definition</h2><div className="memory-grid">{memoryCards.map(c=><article key={c.term}><span>{c.term}</span><h3>{c.analogy}</h3><p>{c.meaning}</p></article>)}</div><h3>Senior Manager decision frame</h3><div className="framework">{seniorManagerFramework.map((x,i)=><span key={x}>{i+1}. {x}</span>)}</div></section>}

export function DefenceLab(){
 const [open,setOpen]=useState<number|null>(null),[query,setQuery]=useState(''),[category,setCategory]=useState('All')
 const categories=['All',...Array.from(new Set(defenceQuestions.map(x=>x.category)))]
 const filtered=useMemo(()=>defenceQuestions.filter(x=>(category==='All'||x.category===category)&&(`${x.question} ${x.strongAnswer}`.toLowerCase().includes(query.toLowerCase()))),[query,category])
 return <section className="panel lab"><p className="eyebrow">SOLUTION DEFENCE</p><h2>100-question evidence-led defence bank</h2><p className="lead">Do not memorize scripts. Practice the structure: fact, assumption, evidence, risk, recommendation and decision required.</p><div className="defence-tools"><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search questions, answers or topics"/><select value={category} onChange={e=>setCategory(e.target.value)}>{categories.map(c=><option key={c}>{c}</option>)}</select><span>{filtered.length} questions</span></div><div className="defence-list">{filtered.map((item,i)=><button key={`${item.question}-${i}`} onClick={()=>setOpen(open===i?null:i)}><small>{item.category}</small><strong>{item.question}</strong>{open===i&&<div className="defence-answer"><p><b>Strong answer:</b> {item.strongAnswer}</p><p><b>Trap to avoid:</b> {item.trap}</p></div>}</button>)}</div></section>
}
