import React from "react";
import {Field,controlStyle} from "./Field.jsx";
export function Input({label,hint,error,id,disabled=false,style,...rest}){
  const [f,setF]=React.useState(false);const iid=id||React.useId();
  return <Field label={label} hint={hint} error={error} htmlFor={iid}>
    <input id={iid} disabled={disabled} onFocus={()=>setF(true)} onBlur={()=>setF(false)} style={{...controlStyle(f,error,disabled),...style}} {...rest}/>
  </Field>;
}
