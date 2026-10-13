import React from "react";
export function Tooltip({content,children,placement="top"}){
  const [o,setO]=React.useState(false);const top=placement==="top";
  return <span style={{position:"relative",display:"inline-flex"}} onMouseEnter={()=>setO(true)} onMouseLeave={()=>setO(false)} onFocus={()=>setO(true)} onBlur={()=>setO(false)}>
    {children}
    <span role="tooltip" style={{position:"absolute",left:"50%",[top?"bottom":"top"]:"calc(100% + 8px)",transform:"translateX(-50%) translateY("+(o?0:(top?4:-4))+"px)",opacity:o?1:0,pointerEvents:"none",
      background:"var(--plum)",color:"var(--nude)",fontFamily:"var(--font-body)",fontSize:13,lineHeight:1.35,padding:"6px 10px",borderRadius:"var(--radius-sm)",whiteSpace:"nowrap",transition:"all var(--dur-fast) var(--ease-unfurl)",zIndex:10}}>{content}</span>
  </span>;
}
