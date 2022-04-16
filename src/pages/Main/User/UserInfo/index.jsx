import React, { useEffect, useState } from "react";
import "./style.less"
import avatarDefault from "../../../../assets/images/default/avatarDefault.png"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as actions from "../../../../redux/actions"

const UserInfo=(props)=>{
    
    const user=useSelector(state=>state.login.user)
    const [isLogin, setIsLogin]=useState(false)
    const navigate=useNavigate()
    const dispatch=useDispatch()

    useEffect(()=>{
        if (user.token !== "") setIsLogin(true)
    },[])

    function loginHandle(){
        navigate('/login')
    }

    function logoutHandle(){
        if(window.confirm('你确定要退出登录吗？')){
            alert("退出登录");
            setIsLogin(false)
            dispatch(actions.userLogout())
            localStorage.removeItem('ShelLive')
            //return true;
        }
    }

    return (
        <div className="main-container">
            <div className="left-container">
                <img className="avatar" src={avatarDefault} alt="avatar" />
            </div>
            <div className="middle-container">
                {isLogin?
                <div>
                    <h3 className="username">{user.nickname}</h3>
                    {/* <p>用户名：{user.username}</p> */}
                </div>
                :
                <h3 className="username link" onClick={loginHandle}>登录/注册</h3>}
                
            </div>
            <div className="right-container">
                {isLogin?
                <p onClick={logoutHandle}>退出登录</p>:""
                }
            </div>
        </div>
    )
}

export default UserInfo