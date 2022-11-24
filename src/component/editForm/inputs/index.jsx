import React from "react";

export default function Inputs({input}){
    //classname,spantext,type,iclassname,values,name,onchange,min=0,max=0
    return <div className={"edit-tool"}>
        <label>
            <span className={input.classname}>{input.spantext}</span>
            <input type={input.type}  min={input.min} max={input.max} className={input.iclassname} value={input.values} name={input.name} onChange={input.onchange}/>
        </label>
    </div>
}