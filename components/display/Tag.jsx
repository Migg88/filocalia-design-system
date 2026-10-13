import React from "react";
export function Tag({children,selected=false,onClick,onRemove,icon}){
  const [h,setH]=React.useState(false);
  return <span onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} role={onClick?"button":undefined}
    style={{display:"inline-flex",alignItems:"center",gap:8,height:36,padding:onRemove?"0 8px 0 14px":"0 14px",borderRadius:"var(--radius-pill)",boxSizing:"border-box",
      background:selected?"var(--plum)":h&&onClick?"var(--plum-a08)":"transparent",color:selected?"var(--nude)":"var(--plum)",border:"1px solid "+(selected?"var(--plum)":"var(--border-strong)"),
      fontFamily:"var(--font-body)",fontSize:14,cursor:onClick?"pointer":"default",transition:"background var(--dur-fast)"}}>
    {icon}{children}
    {onRemove&&<button type="button" aria-label="Remove" onClick={e=>{e.stopPropagation();onRemove();}} style={{width:22,height:22,borderRadius:"50%",border:"none",background:"transparent",color:"inherit",cursor:"pointer",fontSize:16,lineHeight:1,padding:0}}>×</button>}
  </span>;
}
