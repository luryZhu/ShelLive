import React from "react";
import "./style.less"
import { useNavigate } from "react-router-dom"

const PubHeader=(props)=>{
    const navigate=useNavigate()

    function backHandle(props){
        // 返回上一页的方案：
        // 1. go
        // window.history.back()
        // 2. useNavigate
        navigate(-1)

    }
    return (
        <div>
            <div id="common-header">
                <h1>{props.title}</h1>
                <span className="back-icon" onClick={backHandle}>
                    <i className="iconfont icon-chevron-left" ></i>
                </span>
               
            </div>
        </div>
    )
}

export default PubHeader