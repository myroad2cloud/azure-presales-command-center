import { useMemo, useState } from 'react'
import { dealStages } from './data/dealStages'
import { useProgress } from './hooks/useProgress'

const metrics = [
  ['500', 'VMware VMs'],
  ['75', 'Applications'],
  ['120', 'Databases'],
  ['8', 'SQL Clusters'],
]

export default function App() {
  const { progress, completion, markStageComplete, resetProgress } = useProgress()
  const [selectedStage, setSelectedStage] = useState(progress.currentStage)

  const stage = useMemo(
    () => dealStages.find((item) => item.id === selectedStage) ?? dealStages[0],
    [selectedStage],
  )

  const currentIndex = dealStages.findIndex((item) => item.id === progress.currentStage)
  const nextStage = dealStages[currentIndex + 1]

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">CONTOSO GLOBAL TRANSFORMATION</p>
          <h1>Azure Pre-Sales Command Center</h1>
          <p className="subtitle">Learn. Shape. Estimate. Commercialize. Defend. Win. Deliver.</p>
        </div>
        <div className="topbar-actions">
          <span className="rank">Architect · Week 1 of 8</span>
          <button className="ghost" onClick={resetProgress}>Reset Progress</button>
        </div>
      </header>

      <main>
        <section className="hero-grid">
          <article className="panel mission-card">
            <p className="eyebrow">TODAY'S MISSION</p>
            <h2>Qualify the opportunity before you solution it</h2>
            <div className="mission-steps">
              <div><strong>Learn</strong><span>Business drivers and qualification</span></div>
              <div><strong>Practice</strong><span>Identify 5 deal red flags</span></div>
              <div><strong>Build</strong><span>Opportunity Qualification Pack</span></div>
              <div><strong>Defend</strong><span>Explain why qualification protects delivery</span></div>
            </div>
            <div className="mission-footer">
              <span>Estimated time: 65 min</span>
              <button onClick={() => setSelectedStage(progress.currentStage)}>Start today's mission</button>
            </div>
          </article>

          <article className="panel progress-card">
            <div className="progress-ring" style={{ '--progress': `${completion * 3.6}deg` } as React.CSSProperties}>
              <div><strong>{completion}%</strong><span>complete</span></div>
            </div>
            <div className="progress-copy">
              <p className="eyebrow">YOUR PROGRESS</p>
              <h3>{progress.completedStages.length} of 14 deal stages completed</h3>
              <p>Current stage: <strong>{dealStages[currentIndex]?.label}</strong></p>
              <p>Learning streak: <strong>{progress.streak} day</strong></p>
              <p>Artifacts completed: <strong>{progress.artifactsCompleted}</strong></p>
            </div>
          </article>
        </section>

        <section className="panel deal-map-panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">DEAL SIMULATOR</p>
              <h2>You are leading the Contoso Global Azure transformation</h2>
            </div>
            <span className="stage-chip">YOU ARE HERE → {dealStages[currentIndex]?.label}</span>
          </div>

          <div className="deal-map">
            {dealStages.map((item, index) => {
              const complete = progress.completedStages.includes(item.id)
              const current = item.id === progress.currentStage
              return (
                <button
                  key={item.id}
                  className={`stage ${complete ? 'complete' : ''} ${current ? 'current' : ''}`}
                  onClick={() => setSelectedStage(item.id)}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{item.label}</strong>
                </button>
              )
            })}
          </div>
        </section>

        <section className="content-grid">
          <article className="panel stage-detail">
            <p className="eyebrow">STAGE DETAIL</p>
            <h2>{stage.label}</h2>
            <p className="lead">{stage.summary}</p>

            <div className="detail-grid">
              <div>
                <h3>Who owns it?</h3>
                <p>{stage.owner}</p>
              </div>
              <div>
                <h3>What do we produce?</h3>
                <ul>{stage.outputs.map((output) => <li key={output}>{output}</li>)}</ul>
              </div>
              <div>
                <h3>What could go wrong?</h3>
                <ul>{stage.risks.map((risk) => <li key={risk}>{risk}</li>)}</ul>
              </div>
              <div>
                <h3>Senior Manager action</h3>
                <p>{stage.seniorManagerAction}</p>
              </div>
            </div>

            {stage.id === progress.currentStage && (
              <button
                className="primary-action"
                onClick={() => markStageComplete(stage.id, nextStage?.id)}
              >
                Complete stage {nextStage ? `and move to ${nextStage.label}` : ''}
              </button>
            )}
          </article>

          <aside className="panel case-card">
            <p className="eyebrow">CUSTOMER SNAPSHOT</p>
            <h2>Contoso Global Industries</h2>
            <p>35,000 employees · 18 countries · 3 data centers</p>
            <div className="metric-grid">
              {metrics.map(([value, label]) => (
                <div className="metric" key={label}><strong>{value}</strong><span>{label}</span></div>
              ))}
            </div>
            <div className="red-flag">
              <strong>Deal red flag</strong>
              <p>Customer wants a six-month migration but dependency data is incomplete.</p>
              <span>Ask for evidence before committing migration waves.</span>
            </div>
          </aside>
        </section>

        <section className="panel challenge-card">
          <div>
            <p className="eyebrow">DAILY MICRO-CHALLENGE</p>
            <h2>Sales needs a ROM by Friday. Only 310 of 500 VMs have complete performance data.</h2>
            <p>What is the most defensible next move?</p>
          </div>
          <div className="answers">
            <button>A. Estimate all 500 from the available sample</button>
            <button>B. Refuse to estimate anything</button>
            <button className="recommended">C. Produce a ROM with explicit assumptions and confidence boundaries</button>
            <button>D. Add 30% contingency without explanation</button>
          </div>
        </section>
      </main>

      <footer>
        <span>Azure Pre-Sales Command Center · Build 0.1</span>
        <span>Progress is stored locally in your browser.</span>
      </footer>
    </div>
  )
}
