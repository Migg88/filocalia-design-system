import React from "react";
const SIZES={sm:{h:"var(--control-h-sm)",px:16,fs:14},md:{h:"var(--control-h-md)",px:22,fs:15},lg:{h:"var(--control-h-lg)",px:28,fs:16}};
const V={
  primary:{bg:"var(--plum)",hover:"var(--plum-hover)",press:"var(--plum-press)",fg:"var(--nude)",bd:"transparent"},
  secondary:{bg:"var(--blush)",hover:"var(--blush-hover)",press:"var(--blush-hover)",fg:"var(--plum)",bd:"transparent"},
  accent:{bg:"var(--coral)",hover:"var(--coral-hover)",press:"var(--coral-hover)",fg:"var(--nude)",bd:"transparent"},
  outline:{bg:"transparent",hover:"var(--plum-a08)",press:"var(--plum-a16)",fg:"var(--plum)",bd:"var(--plum)"},
  ghost:{bg:"transparent",hover:"var(--plum-a08)",press:"var(--plum-a16)",fg:"var(--plum)",bd:"transparent"}
};
export function Button({variant="primary",size="md",icon,iconRight,fullWidth=false,disabled=false,type="button",onClick,children,style,...rest}){
  const [st,setSt]=React.useState("idle");const v=V[variant]||V.primary;const s=SIZES[size]||SIZES.md;
  const bg=disabled?v.bg:st==="press"?v.press:st==="hover"?v.hover:v.bg;
  return <button type={type} disabled={disabled} onClick={onClick}
    onMouseEnter={()=>setSt("hover")} onMouseLeave={()=>setSt("idle")} onMouseDown={()=>setSt("press")} onMouseUp={()=>setSt("hover")}
    onFocus={e=>e.currentTarget.style.boxShadow="var(--focus-ring)"} onBlur={e=>e.currentTarget.style.boxShadow="none"}
    style={{display:fullWidth?"flex":"inline-flex",width:fullWidth?"100%":undefined,alignItems:"center",justifyContent:"center",gap:8,height:s.h,padding:"0 "+s.px+"px",
      borderRadius:"var(--radius-pill)",border:"1.5px solid "+v.bd,background:bg,color:v.fg,fontFamily:"var(--font-body)",fontSize:s.fs,fontWeight:500,letterSpacing:".01em",
      cursor:disabled?"not-allowed":"pointer",opacity:disabled?.45:1,outline:"none",transition:"background var(--dur-fast) var(--ease-standard)",whiteSpace:"nowrap",...style}} {...rest}>
    {icon}{children}{iconRight}
  </button>;
}
