import React from "react";
import {Field,controlStyle} from "./Field.jsx";
export function Select({label,hint,error,options=[],placeholder,id,disabled=false,style,...rest}){
  const [f,setF]=React.useState(false);const iid=id||React.useId();
  return <Field label={label} hint={hint} error={error} htmlFor={iid}>
    <div style={{position:"relative"}}>
      <select id={iid} disabled={disabled} onFocus={()=>setF(true)} onBlur={()=>setF(false)} style={{...controlStyle(f,error,disabled),appearance:"none",paddingRight:40,cursor:"pointer",...style}} {...rest}>
        {placeholder&&<option value="">{placeholder}</option>}
        {options.map(o=>typeof o==="string"?<option key={o} value={o}>{o}</option>:<option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      <span aria-hidden="true" style={{position:"absolute",right:16,top:"50%",width:7,height:7,borderRight:"1.5px solid var(--plum)",borderBottom:"1.5px solid var(--plum)",transform:"translateY(-70%) rotate(45deg)",pointerEvents:"none"}}></span>
    </div>
  </Field>;
}
