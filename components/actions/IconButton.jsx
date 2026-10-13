import React from "react";
const V={solid:["var(--plum)","var(--plum-hover)","var(--nude)","transparent"],soft:["var(--blush-soft)","var(--blush)","var(--plum)","transparent"],outline:["transparent","var(--plum-a08)","var(--plum)","var(--plum-a32)"],ghost:["transparent","var(--plum-a08)","var(--plum)","transparent"]};
export function IconButton({icon,label,variant="ghost",size="md",disabled=false,onClick,style,...rest}){
  const [h,setH]=React.useState(false);const v=V[variant]||V.ghost;const d=size==="sm"?36:size==="lg"?52:44;
  return <button type="button" aria-label={label} title={label} disabled={disabled} onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    onFocus={e=>e.currentTarget.style.boxShadow="var(--focus-ring)"} onBlur={e=>e.currentTarget.style.boxShadow="none"}
    style={{width:d,height:d,borderRadius:"50%",display:"inline-flex",alignItems:"center",justifyContent:"center",background:h&&!disabled?v[1]:v[0],color:v[2],border:"1.5px solid "+v[3],
      cursor:disabled?"not-allowed":"pointer",opacity:disabled?.45:1,outline:"none",padding:0,transition:"background var(--dur-fast) var(--ease-standard)",...style}} {...rest}>{icon}</button>;
}
