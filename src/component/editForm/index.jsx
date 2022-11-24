import React, {useState} from "react";
import LoginForm from "../loginForm";
import "./index.scss"
import Inputs from "./inputs";

export default function EditForm(){
    const adminUser={
        email : "123@gmail.com",
        password : "123@gmail.com"
    }

    const [user,setUser]=useState({email:"" , password :''})
    const [error,setError] =useState("")

    //for the styling
    const disply=true
    const [errorText,useErrorText] = useState("you have enterd wrong email or password")
    const [background,setBackground] = useState({bodyB : 'grey',formB : 'white',inputB : '#d3cccc' , buttonB : "#d3cccc"})
    const [fontSize,setFontSize] = useState({title : 28,errortext : 18,labels : 18 ,buttonf : 18,inputf:18})
    const [text,setText]=useState({title : 'title' , description : 'Lorem ipsum dolor sit amet, consectetur adipisicing.'})

//classname,spantext,type,iclassname,values,name,onchange,min=0,max=0





    const backChange =(e)=>{
        setBackground({...background,[e.target.name] : e.target.value})
    }
    const fonChange =e=>{
        setFontSize({...fontSize,[e.target.name] : e.target.value})

    }
    const changeText = (e)=>{
        setText({...text,[e.target.name] : e.target.value})
    }

    const login= (details)=>{
        if (details.email === adminUser.email && details.password === adminUser.password){
            setUser({
                email: details.email,
                password:  details.password
            })
        }else {
            setError("you have entered wrong email or password")
        }
    }

    const logout=()=>{
        setError("")
        setUser({email:"" , password :''})
    }
    const [input,setInput]= useState([
        {
            classname :'edit-tool',
            spantext: 'change page background color',
            type:'color',
            iclassname:'G-display-none',
            values :'background.bodyB',
            name: 'bodyB',
            onchange: backChange,
            min :0,
            max : 0,
        },
        {
            classname :'edit-tool',
            spantext: 'change login form background color',
            type:'color',
            iclassname:'"G-display-none',
            values :'background.formB',
            name: 'formB',
            onchange: backChange,
            min :0,
            max : 0,
        },
    ])


    return<>
        {(user.email !== "") ?
        <div className={"G-flex p-container"}>
            <div className={'p-tool-box'}>
                <button onClick={logout} >Save & logout</button>


                    {input.map((input,index)=>(
                        <Inputs input={input}/>

                    ))}

                    <div className={"edit-tool"}>
                        <label>
                            <span className={"p-button-replace"}>change input  background color</span>
                            <input type="color" className={'G-display-none'} value={background.inputB} name={'inputB'} onChange={backChange}/>
                        </label>
                    </div>
                    <div className={"edit-tool"}>
                        <label>
                            <span className={"p-button-replace"}>change button  background color</span>
                            <input type="color" className={'G-display-none'} value={background.inputB} name={'buttonB'} onChange={backChange}/>
                        </label>
                    </div>


                    <div className={"edit-tool"}>
                        <label>
                            <span >change title  font size</span>
                            <input type="range" min={10} max={40} value={fontSize.title} name={'title'} onChange={fonChange}/>
                        </label>
                    </div>
                    <div className={"edit-tool"}>
                        <label>
                            <span >change Error text  font size</span>
                            <input type="range"  min={10} max={25} value={fontSize.errortext} name={'errortext'} onChange={fonChange}/>
                        </label>
                    </div>
                    <div className={"edit-tool"}>
                        <label>
                            <span >change input name  font size</span>
                            <input type="range" min={10} max={25} value={fontSize.labels} name={'labels'} onChange={fonChange}/>
                        </label>
                    </div>
                    <div className={"edit-tool"}>
                        <label>
                            <span >change input   font size</span>
                            <input type="range" min={10} max={25} value={fontSize.inputf} name={'inputf'} onChange={fonChange}/>
                        </label>
                    </div>
                    <div className={"edit-tool"}>
                        <label>
                            <span >change button  font size</span>
                            <input type="range" min={10} max={25} value={fontSize.buttonf} name={'buttonf'} onChange={fonChange}/>
                        </label>
                    </div>

                    <div className={"edit-tool"}>
                        <label>
                            <span className={"p-inout-under"}>edit the title</span>
                            <input type="input"  min={0} max={0} value={text.title} name={'title'} onChange={changeText}/>
                        </label>
                    </div>
                    <div className={"edit-tool"}>
                        <label>
                            <span className={"p-inout-under"}>edit the description</span>
                            <textarea  value={text.description} name={'description'} onChange={changeText}  />
                        </label>
                    </div>

|
            </div>
            <div className={"edeting"}>
                <LoginForm
                    disply={disply}
                    errorText={errorText}
                    background={background}
                    fontSize={fontSize}
                    text={text}
                />
            </div>
        </div> :
        <LoginForm login={login}
                   error={error}
                   background={background}
                   fontSize={fontSize}
                   text={text}
        />}
    </>
}