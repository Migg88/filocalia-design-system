import React from "react";
export function Tabs({items=[],value,defaultValue,onChange}){
  const [v,setV]=React.useState(defaultValue??(items[0]&&(items[0].value??items[0])));const cur=value??v;
  return <div role="tablist" style={{display:"flex",gap:28,borderBottom:"1px solid var(--border-subtle)",fontFamily:"var(--font-body)"}}>
    {items.map(it=>{const val=it.value??it,lab=it.label??it,on=val===cur;
      return <button key={val} role="tab" aria-selected={on} type="button" onClick={()=>{setV(val);onChange&&onChange(val);}}
        style={{position:"relative",background:"none",border:"none",padding:"12px 0 14px",cursor:"pointer",fontSize:15,fontFamily:"inherit",fontWeight:on?500:400,color:on?"var(--plum)":"var(--text-muted)"}}>
        {lab}
        <span style={{position:"absolute",left:0,right:0,bottom:-1,height:2,background:on?"var(--plum)":"transparent"}}></span>
        {on&&<span style={{position:"absolute",left:"50%",bottom:-5,width:8,height:8,marginLeft:-4,transform:"rotate(45deg)",background:"var(--champagne)",border:"1.5px solid var(--plum)",boxSizing:"border-box"}}></span>}
      </button>;})}
  </div>;
}
