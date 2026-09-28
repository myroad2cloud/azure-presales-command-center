import { useEffect, useMemo, useState } from 'react'
export type ProgressState = { currentStage:string; completedStages:string[]; completedModules:number[]; completedArtifactIds:string[]; streak:number; minutesInvested:number; artifactsCompleted:number; quizScore:number; scenarioScore:number }
const defaultProgress:ProgressState={currentStage:'qualify',completedStages:[],completedModules:[],completedArtifactIds:[],streak:1,minutesInvested:0,artifactsCompleted:0,quizScore:0,scenarioScore:0}
const key='azure-presales-command-center-progress'
export function useProgress(){
 const [progress,setProgress]=useState<ProgressState>(()=>{try{const saved=localStorage.getItem(key);const parsed=saved?JSON.parse(saved):{};return {...defaultProgress,...parsed,completedArtifactIds:Array.isArray(parsed.completedArtifactIds)?parsed.completedArtifactIds:[]}}catch{return defaultProgress}})
 useEffect(()=>localStorage.setItem(key,JSON.stringify(progress)),[progress])
 const stageCompletion=useMemo(()=>Math.round((progress.completedStages.length/14)*100),[progress.completedStages.length])
 const moduleCompletion=useMemo(()=>Math.round((progress.completedModules.length/55)*100),[progress.completedModules.length])
 const completion=useMemo(()=>Math.round((stageCompletion+moduleCompletion+progress.quizScore+progress.scenarioScore)/4),[stageCompletion,moduleCompletion,progress.quizScore,progress.scenarioScore])
 const markStageComplete=(stageId:string,nextStage?:string)=>setProgress(p=>p.completedStages.includes(stageId)?{...p,currentStage:nextStage??p.currentStage}:{...p,completedStages:[...p.completedStages,stageId],currentStage:nextStage??p.currentStage,minutesInvested:p.minutesInvested+60})
 const toggleModuleComplete=(moduleId:number)=>setProgress(p=>{const done=p.completedModules.includes(moduleId);return {...p,completedModules:done?p.completedModules.filter(id=>id!==moduleId):[...p.completedModules,moduleId],minutesInvested:Math.max(0,p.minutesInvested+(done?-20:20))}})
 const recordQuizScore=(score:number)=>setProgress(p=>({...p,quizScore:Math.max(p.quizScore,score),minutesInvested:p.minutesInvested+15}))
 const recordScenarioScore=(score:number)=>setProgress(p=>({...p,scenarioScore:Math.max(p.scenarioScore,score)}))
 const completeArtifact=(id:string)=>setProgress(p=>p.completedArtifactIds.includes(id)?p:{...p,completedArtifactIds:[...p.completedArtifactIds,id],artifactsCompleted:p.artifactsCompleted+1,minutesInvested:p.minutesInvested+30})
 const resetProgress=()=>setProgress(defaultProgress)
 const exportProgress=()=>{const blob=new Blob([JSON.stringify(progress,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='azure-presales-progress.json';a.click();URL.revokeObjectURL(url)}
 const importProgress=(file:File)=>{const reader=new FileReader();reader.onload=()=>{try{const parsed=JSON.parse(String(reader.result));setProgress({...defaultProgress,...parsed,completedModules:Array.isArray(parsed.completedModules)?parsed.completedModules:[],completedArtifactIds:Array.isArray(parsed.completedArtifactIds)?parsed.completedArtifactIds:[]})}catch{alert('Invalid progress file')}};reader.readAsText(file)}
 return{progress,setProgress,completion,stageCompletion,moduleCompletion,markStageComplete,toggleModuleComplete,recordQuizScore,recordScenarioScore,completeArtifact,resetProgress,exportProgress,importProgress}
}
