import React from "react";
export function Card({media,arch=false,eyebrow,title,children,footer,interactive=false,tone="light",style,onClick}){
  const [h,setH]=React.useState(false);const dark=tone==="inverse";
  return <article onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{display:"flex",flexDirection:"column",background:dark?"var(--surface-inverse)":"var(--surface-card)",color:dark?"var(--text-on-inverse)":"var(--text-primary)",
      border:dark?"none":"1px solid var(--border-subtle)",borderRadius:arch?"var(--radius-arch)":"var(--radius-md)",overflow:"hidden",
      boxShadow:interactive&&h?"var(--shadow-md)":"none",transform:interactive&&h?"translateY(-2px)":"none",transition:"all var(--dur-base) var(--ease-unfurl)",cursor:interactive?"pointer":"default",fontFamily:"var(--font-body)",...style}}>
    {media&&<div style={{aspectRatio:arch?"4/5":"4/3",background:"var(--surface-sunken)",overflow:"hidden"}}>{media}</div>}
    <div style={{padding:"var(--space-5)",display:"flex",flexDirection:"column",gap:8,flex:1}}>
      {eyebrow&&<div style={{fontFamily:"var(--font-mono)",fontSize:"var(--text-label)",letterSpacing:"var(--tracking-label)",textTransform:"uppercase",color:dark?"var(--champagne)":"var(--coral)"}}>{eyebrow}</div>}
      {title&&<h3 style={{margin:0,fontFamily:"var(--font-display)",fontWeight:400,fontSize:"var(--text-title)",lineHeight:"var(--lh-title)"}}>{title}</h3>}
      {children&&<div style={{fontSize:"var(--text-body-s)",lineHeight:"var(--lh-body-s)",opacity:.85}}>{children}</div>}
      {footer&&<div style={{marginTop:"auto",paddingTop:12,display:"flex",alignItems:"center",justifyContent:"space-between",gap:12}}>{footer}</div>}
    </div>
  </article>;
}
