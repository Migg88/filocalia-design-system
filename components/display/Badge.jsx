import React from "react";
const T={plum:["var(--plum)","var(--nude)"],blush:["var(--blush)","var(--plum)"],coral:["var(--coral)","var(--nude)"],champagne:["var(--champagne)","var(--plum)"],outline:["transparent","var(--plum)"],soft:["var(--blush-soft)","var(--plum)"]};
export function Badge({tone="soft",children,dot=false}){
  const t=T[tone]||T.soft;
  return <span style={{display:"inline-flex",alignItems:"center",gap:6,height:24,padding:"0 10px",borderRadius:"var(--radius-pill)",background:t[0],color:t[1],border:tone==="outline"?"1px solid var(--border-strong)":"none",
    fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:".08em",textTransform:"uppercase",whiteSpace:"nowrap",boxSizing:"border-box"}}>
    {dot&&<span style={{width:6,height:6,transform:"rotate(45deg)",background:"currentColor"}}></span>}{children}</span>;
}
