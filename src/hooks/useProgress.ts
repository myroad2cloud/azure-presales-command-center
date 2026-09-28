import { useEffect, useMemo, useState } from 'react'

export type ProgressState = {
  currentStage: string
  completedStages: string[]
  streak: number
  minutesInvested: number
  artifactsCompleted: number
}

const defaultProgress: ProgressState = {
  currentStage: 'qualify',
  completedStages: [],
  streak: 1,
  minutesInvested: 0,
  artifactsCompleted: 0,
}

const key = 'azure-presales-command-center-progress'

export function useProgress() {
  const [progress, setProgress] = useState<ProgressState>(() => {
    const saved = localStorage.getItem(key)
    return saved ? JSON.parse(saved) : defaultProgress
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(progress))
  }, [progress])

  const completion = useMemo(() => Math.round((progress.completedStages.length / 14) * 100), [progress.completedStages.length])

  const markStageComplete = (stageId: string, nextStage?: string) => {
    setProgress((p) => ({
      ...p,
      completedStages: p.completedStages.includes(stageId) ? p.completedStages : [...p.completedStages, stageId],
      currentStage: nextStage ?? p.currentStage,
    }))
  }

  const resetProgress = () => setProgress(defaultProgress)

  return { progress, setProgress, completion, markStageComplete, resetProgress }
}
