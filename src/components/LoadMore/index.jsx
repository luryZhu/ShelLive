import React, { useEffect, useRef } from "react";
import "./style.less"
import Loading from "../Loading"
// import useDebounce from "../../utils/debounce";
// import useThrottle from "../../utils/throttle";
import {jsThrottle} from "../../utils/throttle";

const LoadMore=(props)=>{
    const more=useRef()
    // const [onLoadMoreThrottle]=useThrottle(props.onLoadMore,1000)

    useEffect(()=>{
        const onLoadMoreThrottle=jsThrottle(props.onLoadMore,1000)

        const scrollHandle=()=>{       
            if (more.current){
                
                if(document.documentElement.clientHeight>more.current.getBoundingClientRect().top){
                    // 节流，强制执行
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
                    :<div className="middle">到底了……</div>
            }
            
        </div>
    )
}

export default LoadMore

