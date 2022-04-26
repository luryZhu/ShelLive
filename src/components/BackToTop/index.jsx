import React, { useEffect, useRef, useState } from "react";
import { useMount } from "../../hooks/useMount";
import {jsThrottle} from "../../utils/throttle";
import './style.less'

const BackToTop=({bottomBias=0})=>{
    const [isVisible, setIsVisible]=useState(false)
    const isMount=useMount()
    
    const ref=useRef()
    function onClickHandle(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
    
    
    useEffect(()=>{
        const scrollHandle=()=>{       
            // console.log(document.documentElement.scrollTop)
            if (!isMount()) return
            if(document.documentElement.scrollTop>document.documentElement.clientHeight){
                // show
                setIsVisible(true)
            } else {
                // hide
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", jsThrottle(scrollHandle, 1000))

        return ()=>{
            console.log("clear");
            window.removeEventListener("scroll", scrollHandle)
        }
    },[])

    useEffect(()=>{
        if (isVisible){
            console.log("show")
            ref.current.style.bottom=`${bottomBias+20}px`
        } else {
            console.log("hide")
            ref.current.style.bottom=`-40px`
        }
    },[isVisible])


    return (
        // <div
        //     onClick={onClickHandle}
        //     className="back2top-container" style={{bottom: `${20+bottomBias}px`, display: isVisible? "block":"none"}}>
        //     <i className="iconfont icon-arrowup"></i>
        // </div>
        <div ref={ref}
            onClick={onClickHandle}
            className="back2top-container">
            <i className="iconfont icon-arrowup"></i>
        </div>
    )
}

export default BackToTop