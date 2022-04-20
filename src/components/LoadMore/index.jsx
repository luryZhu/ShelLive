import React, { useEffect, useRef, useState } from "react";
import "./style.less"
import Loading from "../Loading"
// import useDebounce from "../../utils/debounce";
import useThrottle from "../../utils/throttle";

const LoadMore=(props)=>{
    const more=useRef()
    // const [loadTop,setLoadTop]=useState(10000)
    
    // const loadMoreDebounce =useDebounce(()=>{
    //     console.log("loading");
    //     props.onLoadMore()
        
    // },1000)
    // console.log(1111);
    const onLoadMoreThrottle=useThrottle(props.onLoadMore,1000)

    useEffect(()=>{
        let timer=null
        const scrollHandle=()=>{       
            if (more.current){
                // setLoadTop(more.current.getBoundingClientRect().top)
                if(document.documentElement.clientHeight>more.current.getBoundingClientRect().top){
                    // 防抖，重复触发，重新计时
              
                    // loadMoreDebounce()
                    // if (!timer){
                    //     console.log("load more")
                    //     timer=setTimeout(()=>{
                    //         props.onLoadMore()
                    //         timer=null
                    //     },1000)
                    // }
                    onLoadMoreThrottle()
                    
                }
            }
        }

        window.addEventListener("scroll", scrollHandle)

        return ()=>{
            console.log("clear");
            // clearTimeout(timer)
            window.removeEventListener("scroll", scrollHandle)
        }
    },[])

    // useEffect(()=>{
    //     if(document.documentElement.clientHeight>loadTop){
    //         // 防抖，重复触发，重新计时
    //         // loadMoreDebounce()
    //         setTimeout(props.onLoadMore,1000)
    //     }
        
    // },[loadTop])

      

    return (
        <div className="load-more" ref={more}>
            {
                props.hasMore
                    ?<Loading></Loading>
                    :<p>到底了……</p>
            }
            
        </div>
    )
}

export default LoadMore

