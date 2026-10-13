import React from "react";
export function Dialog({open,title,children,actions,onClose,width=480,inline=false}){
  if(!open)return null;
  return <div onClick={onClose} style={{position:inline?"relative":"fixed",inset:inline?undefined:0,background:"var(--overlay)",display:"flex",alignItems:"center",justifyContent:"center",padding:24,zIndex:1000,minHeight:inline?"100%":undefined,boxSizing:"border-box"}}>
    <div role="dialog" aria-modal="true" onClick={e=>e.stopPropagation()} style={{width:"100%",maxWidth:width,background:"var(--surface-card)",borderRadius:"var(--radius-lg)",boxShadow:"var(--shadow-lg)",padding:"var(--space-6)",fontFamily:"var(--font-body)",color:"var(--text-primary)",display:"flex",flexDirection:"column",gap:16,position:"relative"}}>
      {onClose&&<button type="button" aria-label="Close" onClick={onClose} style={{position:"absolute",top:16,right:16,width:36,height:36,borderRadius:"50%",border:"none",background:"transparent",color:"var(--plum)",fontSize:22,cursor:"pointer"}}>×</button>}
      {title&&<h2 style={{margin:0,fontFamily:"var(--font-display)",fontWeight:400,fontSize:"var(--text-display-s)",lineHeight:"var(--lh-display-s)",paddingRight:32}}>{title}</h2>}
      <div style={{fontSize:15,lineHeight:1.55,color:"var(--text-secondary)"}}>{children}</div>
      {actions&&<div style={{display:"flex",justifyContent:"flex-end",gap:12,marginTop:8}}>{actions}</div>}
    </div>
  </div>;
}
