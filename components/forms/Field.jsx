import React from "react";
export function Field({label,hint,error,htmlFor,children}){
  return <div style={{display:"flex",flexDirection:"column",gap:6,fontFamily:"var(--font-body)"}}>
    {label&&<label htmlFor={htmlFor} style={{fontSize:14,fontWeight:500,color:"var(--text-primary)"}}>{label}</label>}
    {children}
    {(error||hint)&&<div style={{fontSize:13,color:error?"var(--status-error)":"var(--text-muted)"}}>{error||hint}</div>}
  </div>;
}
export const controlStyle=(focus,error,disabled)=>({height:"var(--control-h-md)",padding:"0 14px",borderRadius:"var(--radius-sm)",background:disabled?"var(--surface-sunken)":"var(--surface-card)",
  border:"1.5px solid "+(error?"var(--status-error)":focus?"var(--plum)":"var(--border-strong)"),boxShadow:focus?"0 0 0 3px var(--blush-soft)":"none",color:"var(--text-primary)",
  fontFamily:"var(--font-body)",fontSize:15,outline:"none",width:"100%",boxSizing:"border-box",transition:"border-color var(--dur-fast), box-shadow var(--dur-fast)",opacity:disabled?.6:1});
