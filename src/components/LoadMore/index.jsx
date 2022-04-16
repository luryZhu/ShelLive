import React, { useEffect, useRef, useState } from "react";
import "./style.less"
import Loading from "../Loading"
import useDebounce from "../../utils/debounce";

const LoadMore=(props)=>{
    const more=useRef()
    const [loadTop,setLoadTop]=useState(10000)
    const loadMoreDebounce =useDebounce(()=>{
        console.log("loading");
        props.onLoadMore()
        
    },300)
    // console.log(1111);

    useEffect(()=>{

        function scrollHandle(){
            // console.log(1111);
            
            if (more.current){
                setLoadTop(more.current.getBoundingClientRect().top)
            }
        }

        window.addEventListener("scroll", scrollHandle)

        return ()=>{
            console.log("clear");
            // clearTimeout(timer)
            window.removeEventListener("scroll", scrollHandle)
        }
    },[])

    useEffect(()=>{
        if(document.documentElement.clientHeight>loadTop){
            // 防抖，重复触发，重新计时
            loadMoreDebounce()
        }
        
    },[loadTop])

      

    return (
        <div className="load-more" ref={more}>
            <Loading></Loading>
            
        </div>
    )
}

export default LoadMore