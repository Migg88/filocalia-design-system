import React from "react";
export function Switch({label,checked,defaultChecked,onChange,disabled=false,id}){
  const [c,setC]=React.useState(defaultChecked||false);const on=checked!==undefined?checked:c;const iid=id||React.useId();
  const t=()=>{if(disabled)return;if(checked===undefined)setC(!on);onChange&&onChange(!on);};
  return <div style={{display:"inline-flex",alignItems:"center",gap:12,fontFamily:"var(--font-body)",opacity:disabled?.5:1}}>
    <button id={iid} type="button" role="switch" aria-checked={on} disabled={disabled} onClick={t}
      onFocus={e=>e.currentTarget.style.boxShadow="var(--focus-ring)"} onBlur={e=>e.currentTarget.style.boxShadow="none"}
      style={{width:44,height:26,borderRadius:999,border:"none",padding:3,background:on?"var(--plum)":"var(--plum-a16)",cursor:disabled?"not-allowed":"pointer",outline:"none",transition:"background var(--dur-base) var(--ease-unfurl)"}}>
      <span style={{display:"block",width:20,height:20,borderRadius:"50%",background:on?"var(--champagne)":"var(--nude-raised)",boxShadow:"var(--shadow-sm)",transform:on?"translateX(18px)":"none",transition:"transform var(--dur-base) var(--ease-unfurl)"}}></span>
    </button>
    {label&&<label htmlFor={iid} style={{fontSize:15,color:"var(--text-primary)",cursor:"pointer"}}>{label}</label>}
  </div>;
}
