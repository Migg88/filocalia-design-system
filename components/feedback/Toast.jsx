import React from "react";
const T={info:"var(--plum)",success:"var(--champagne)",error:"var(--coral)"};
export function Toast({tone="info",title,children,onClose}){
  return <div role="status" style={{display:"flex",gap:14,alignItems:"flex-start",width:360,maxWidth:"100%",boxSizing:"border-box",padding:"14px 16px",borderRadius:"var(--radius-md)",background:"var(--surface-inverse)",color:"var(--text-on-inverse)",boxShadow:"var(--shadow-lg)",fontFamily:"var(--font-body)"}}>
    <span aria-hidden="true" style={{flex:"none",width:10,height:10,marginTop:6,transform:"rotate(45deg)",background:T[tone]||T.info,border:"1.5px solid var(--nude)",boxSizing:"border-box"}}></span>
    <div style={{flex:1,display:"flex",flexDirection:"column",gap:2}}>
      {title&&<div style={{fontSize:15,fontWeight:500}}>{title}</div>}
      {children&&<div style={{fontSize:14,opacity:.82}}>{children}</div>}
    </div>
    {onClose&&<button type="button" aria-label="Dismiss" onClick={onClose} style={{background:"none",border:"none",color:"inherit",fontSize:18,cursor:"pointer",padding:0,lineHeight:1}}>×</button>}
  </div>;
}
