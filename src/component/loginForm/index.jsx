import React, {useState} from "react";

export default function LoginForm({login,error,disply,errorText,background,fontSize,text}){
    const [details,setDetails]=useState({email:'',password : ""})

    const imputs=(e)=>{
        setDetails({...details,[e.target.name] : e.target.value})
    }

    const submit=()=>{
        login(details)
    }
    return <div className={'login-form'} style={{backgroundColor : background.bodyB}}>
            <form className={"form-inner"} style={{backgroundColor : background.formB}}>
                <h2 style={{fontSize : `${fontSize.title}px` }}>Login</h2>
                {error ?  <p style={{fontSize : `${fontSize.errortext}px` }}>{error}</p>  : null}
                {disply ? <p style={{fontSize : `${fontSize.errortext}px` }}>{errorText}</p> : null}
                <div className={'form-group'}>
                    <label style={{fontSize : `${fontSize.labels}px` }}>
                        Email :
                        <input type="text" name={'email'} onChange={imputs} value={details.email} style={{backgroundColor : background.inputB , fontSize :`${fontSize.inputf}px` }}/>
                    </label>
                </div>
                <div className={'form-group'}>
                    <label style={{fontSize : `${fontSize.labels}px` }}>
                        Password :
                        <input type="password" name={'password'} onChange={imputs} value={details.password} style={{backgroundColor : background.inputB , fontSize :`${fontSize.inputf}px` }}/>
                    </label>
                </div>
                <button onClick={submit} type={"button"} style={{backgroundColor : background.buttonB, fontSize :`${fontSize.buttonf}px` }}>Login</button>
            </form>
            <div className={"p-text"} style={{backgroundColor : 'white'}}>
                <h1>{text.title}</h1>
                    <p>{text.description}</p>
            </div>
        </div>
}