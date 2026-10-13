import React from "react";
export function Radio({label,description,checked,defaultChecked,onChange,disabled=false,name,value,id}){
  const [c,setC]=React.useState(defaultChecked||false);const on=checked!==undefined?checked:c;const iid=id||React.useId();
  const ch=e=>{if(checked===undefined)setC(e.target.checked);onChange&&onChange(e);};
  return <label htmlFor={iid} style={{display:"flex",gap:12,alignItems:"flex-start",cursor:disabled?"not-allowed":"pointer",opacity:disabled?.5:1,fontFamily:"var(--font-body)"}}>
    <input id={iid} type="radio" name={name} value={value} checked={on} disabled={disabled} onChange={ch} style={{position:"absolute",opacity:0,width:0,height:0}}/>
    <span aria-hidden="true" style={{flex:"none",width:20,height:20,marginTop:2,boxSizing:"border-box",borderRadius:"50%",border:"1.5px solid "+(on?"var(--plum)":"var(--border-strong)"),background:on?"var(--plum)":"var(--surface-card)",display:"flex",alignItems:"center",justifyContent:"center",transition:"all var(--dur-fast)"}}>
      {on&&<span style={{width:8,height:8,transform:"rotate(45deg)",background:"var(--champagne)"}}></span>}
    </span>
    <span style={{display:"flex",flexDirection:"column",gap:2}}>
      <span style={{fontSize:15,color:"var(--text-primary)"}}>{label}</span>
      {description&&<span style={{fontSize:13,color:"var(--text-muted)"}}>{description}</span>}
    </span>
  </label>;
}
