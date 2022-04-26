import React, { useEffect, useState } from "react";
import StoreAndBuyView from "../StoreAndBuyView";
import { useSelector } from "react-redux";
import "./style.less"
import { useNavigate } from "react-router-dom";

const StoreAndBuy=(props)=>{
    // isStored初始化判断
    // 未登录：未收藏，已登录，查询
    const [isStored, setIsStored]=useState(false)
    const user=useSelector(state=>state.login.user)
    const navigate=useNavigate()

    useEffect(()=>{
        // onMount, check store statue
        // send post to server
        // set isStored
    },[])

    function isLogin(){
        console.log(user)
        return (user.token !== "")
    }

    function storeHandle(){
        if(isLogin()){
            // handle store
            console.log("store");
            if (isStored){
                // remove Store, send post to server
                // promise.then() set
                setIsStored(false)
            } else {
                // add Store, send post to server
                // promise.then() set
                setIsStored(true)
            }
            
            
        } else {
            // handle login
            console.log("to login");
            navigate("/login")
            // check if isStored
            // setIsStored
        }
    }

    return (
        <div className="store-and-buy">
            <StoreAndBuyView isStored={isStored} storeHandle={storeHandle}></StoreAndBuyView>

        </div>
    )
}

export default StoreAndBuy