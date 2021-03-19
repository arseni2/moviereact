import React from 'react'
import {useHistory} from "react-router-dom";
import Eror from "./Eror";

type propsType = {
    LoginRealThunk: (email:string, password:string, name:string)=>void
    profile: any
}

const RealLogin = (props: propsType)=>{
    let history = useHistory();

    function handleClick() {
        history.push("/");
    }
    /* можно получать профиль юзера делая запро сна users/me а не в бд
    * нужно получать токен и деалть запрос на users/me
    *
    * */
    return (<>
        <div>
            <input type={'email'} onChange={(e)=>{
                console.log(e.target.value)
                window.email = e.target.value
            }} placeholder={'email'}/> <br/>
            <input type={'password'} onChange={(e)=>{
                console.log(e.target.value)
                window.password = e.target.value
            }} placeholder={'password'}/>
            <input type={'text'} onChange={(e)=>{
                console.log(e.target.value)
                window.name = e.target.value
            }} placeholder={'name'}/>

            <button type={"submit"} onClick={()=>{props.LoginRealThunk(window.email, window.password, window.name);

                    handleClick()

            }}>login</button>

        </div>
    </>)
}

export default RealLogin