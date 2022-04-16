import React from "react";
import { useDispatch } from "react-redux";
import LoginView from "./LoginView";
import PubHeader from "../../components/PubHeader";
import * as loginAction from "../../redux/actions"
import "./style.less"

const Login=(props)=>{
    const dispatch=useDispatch()

    function loginEventHandle(user){
        console.log("handle login!");
        dispatch(loginAction.userLogin(user))
        localStorage.setItem('ShelLive', JSON.stringify(user))
        window.history.back()
    }
    return (
        <div>
            <PubHeader title="登录"></PubHeader>
            <LoginView onLoginEvent={loginEventHandle}></LoginView>
        </div>
            
    
    )
}

export default Login