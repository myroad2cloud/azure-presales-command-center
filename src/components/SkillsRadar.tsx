import { modules } from '../data/modules'
type Skill={name:string;moduleIds:number[];stages:string[];note:string}
const skills:Skill[]=[
{name:'Discovery',moduleIds:[3,4,5,6,8,9,11,13],stages:['qualify','discover'],note:'qualification, workshops and evidence'},
{name:'Architecture',moduleIds:[14,15,16,17,18,19,20,21],stages:['architect'],note:'CAF, landing zone, WAF, network, identity'},
{name:'Migration',moduleIds:[10,12,22,23,24],stages:['assess','shape'],note:'dependencies, complexity and migration strategy'},
{name:'Azure AI',moduleIds:[25,26,27,28,29],stages:['architect'],note:'AI solutioning and agent controls'},
{name:'Consumption',moduleIds:[30,31,32],stages:['consumption'],note:'Azure sizing and consumption ROM'},
{name:'Estimation',moduleIds:[33,34,35,36],stages:['estimate'],note:'WBS, productivity, contingency and ROM'},
{name:'Staffing',moduleIds:[37,38,39],stages:['staff'],note:'resource loading and feasibility'},
{name:'Commercials',moduleIds:[40,41,42,43],stages:['commercials','negotiate'],note:'margin, price and negotiation'},
{name:'SOW & Contract',moduleIds:[44,45,46,47],stages:['propose'],note:'assumptions, acceptance and change control'},
{name:'Microsoft Ecosystem',moduleIds:[48,49,50],stages:['qualify','propose'],note:'co-sell, funding and partner alignment'},
{name:'Solution Defence',moduleIds:[51,52,53],stages:['defend'],note:'objections, executive communication and defence'},
{name:'Delivery Handover',moduleIds:[54,55],stages:['handover','delivery'],note:'transition and governance'}]
const labels=['','Awareness','Understand','Execute','Lead','Defend']
export function SkillsRadar({completedStages,completedModules=[],quizScore=0,scenarioScore=0,artifactsCompleted=0}:{completedStages:string[];completedModules?:number[];quizScore?:number;scenarioScore?:number;artifactsCompleted?:number}){
 const evidence=(s:Skill)=>{const modulePct=s.moduleIds.filter(id=>completedModules.includes(id)).length/s.moduleIds.length*100;const stagePct=s.stages.filter(id=>completedStages.includes(id)).length/s.stages.length*100;const artifactPct=Math.min(100,artifactsCompleted/14*100);const score=Math.round(modulePct*.4+stagePct*.25+quizScore*.15+scenarioScore*.15+artifactPct*.05);return {score,modulePct:Math.round(modulePct),stagePct:Math.round(stagePct)}}
 const level=(score:number)=>score>=90?5:score>=70?4:score>=50?3:score>=25?2:1
 return <section className="panel lab"><p className="eyebrow">SKILLS RADAR 2.0</p><h2>Capability needs evidence, not clicks</h2><p className="lead">Each signal blends relevant module completion, deal-stage practice, knowledge assessment, decision simulation and artifact evidence. It is a learning dashboard, not a certification or performance rating.</p><div className="skills-grid">{skills.map(s=>{const e=evidence(s),l=level(e.score);return <article key={s.name}><div className="skill-head"><strong>{s.name}</strong><span>L{l} · {labels[l]}</span></div><div className="skill-track"><i style={{width:`${e.score}%`}}/></div><small>{e.score}% evidence · modules {e.modulePct}% · deal practice {e.stagePct}%</small><p className="skill-note">Evidence focus: {s.note}. Assessment {quizScore}% · decisions {scenarioScore}%.</p></article>})}</div><div className="framework"><span>L1 Awareness</span><span>L2 Understand</span><span>L3 Execute</span><span>L4 Lead</span><span>L5 Defend</span></div><p className="formula">Model: 40% relevant learning · 25% deal-stage practice · 15% assessment · 15% decision simulation · 5% artifacts. Real customer outcomes remain the strongest evidence and are intentionally not fabricated here.</p></section>
}
