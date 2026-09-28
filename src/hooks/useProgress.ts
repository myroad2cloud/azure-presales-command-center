import { useEffect, useMemo, useState } from 'react'

export type ProgressState = { currentStage:string; completedStages:string[]; streak:number; minutesInvested:number; artifactsCompleted:number; quizScore:number; scenarioScore:number }
const defaultProgress:ProgressState={currentStage:'qualify',completedStages:[],streak:1,minutesInvested:0,artifactsCompleted:0,quizScore:0,scenarioScore:0}
const key='azure-presales-command-center-progress'

export function useProgress(){
 const [progress,setProgress]=useState<ProgressState>(()=>{try{const saved=localStorage.getItem(key);return saved?{...defaultProgress,...JSON.parse(saved)}:defaultProgress}catch{return defaultProgress}})
 useEffect(()=>localStorage.setItem(key,JSON.stringify(progress)),[progress])
 const completion=useMemo(()=>Math.round((progress.completedStages.length/14)*100),[progress.completedStages.length])
 const markStageComplete=(stageId:string,nextStage?:string)=>setProgress(p=>({...p,completedStages:p.completedStages.includes(stageId)?p.completedStages:[...p.completedStages,stageId],currentStage:nextStage??p.currentStage,minutesInvested:p.minutesInvested+60,artifactsCompleted:p.artifactsCompleted+1}))
 const resetProgress=()=>setProgress(defaultProgress)
 const exportProgress=()=>{const blob=new Blob([JSON.stringify(progress,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='azure-presales-progress.json';a.click();URL.revokeObjectURL(url)}
 const importProgress=(file:File)=>{const reader=new FileReader();reader.onload=()=>{try{setProgress({...defaultProgress,...JSON.parse(String(reader.result))})}catch{alert('Invalid progress file')}};reader.readAsText(file)}
 return{progress,setProgress,completion,markStageComplete,resetProgress,exportProgress,importProgress}
}
