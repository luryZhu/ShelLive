import React, { useState } from "react";
import validatorInput from "../../../utils/validator";
import api from "../../../api";
import "./style.less"

const LoginView=(props)=>{
    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")
    const [err, setErr]=useState({})

    function onchangeHandle(e){
        if (e.target.name==="username"){
            // console.log(e.target.value);
            setUsername(e.target.value)
        } else if (e.target.name==="password"){
            // console.log(e.target.value);
            setPassword(e.target.value)
        }
    }

    function onsubmitHandle(e){
        e.preventDefault()
        const {isValid, errors}=validatorInput({username, password})
        console.log(isValid, errors);
        if (isValid){        
            api.postLogin({
                username,
                password
            }).then((res)=>{
                // console.log(res);
                if (res.data.status===200){
                    console.log(res.data.nickname);
                    props.onLoginEvent({
                        nickname: res.data.nickname,
                        token: res.data.token
                    })                    
                } else {
                    console.log(res.data.msg);
                }
            })
        } else {
            console.log(errors);
            setErr(errors)
        }
    }

    return (
        <div id="login-container">
            <form onSubmit={onsubmitHandle}>
                <div className={err.username?"input-container phone-container error-container": "input-container phone-container"}>
                    
                    <i className="iconfont icon-tablet"></i>
                    <input 
                        type="text"
                        name="username"
                        placeholder={err.username?err.username:"用户名"}
                        onChange={onchangeHandle} />
                </div>
                <div className={err.password?"input-container password-container error-container":"input-container password-container"}>
                    
                    <i className="iconfont icon-key"></i>
                    <button>获取验证码</button>
                    <input 
                        type="password"
                        name="password"
                        placeholder={err.password?err.password:"密码"}
                        onChange={onchangeHandle}
                        autoComplete="true" />
                    
                    
                </div>
                
                <button className="btn-login">登录</button>
            </form>
        </div>
    )
}

export default LoginView