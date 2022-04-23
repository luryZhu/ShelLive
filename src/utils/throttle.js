import { useCallback, useRef } from "react";

function useThrottle(fn, delay=300){
    const timer=useRef()
    timer.current=null

    function fnThrottle(...args) {
        if (!timer.current){
            timer.current=setTimeout(()=>{
                // console.log("throttle fn")
                fn(...args)
                timer.current=null
            },delay)
            
        }

        
    }

    return [fnThrottle]
}

export function jsThrottle(fn, delay=300){
    let timer=null

    function fnThrottle(...args) {
        // console.log(timer)
        if (!timer){
            timer=setTimeout(()=>{
                // console.log("throttle fn")
                fn(...args)
                timer=null
            },delay)
            
        }

        
    }

    return fnThrottle
}

export default useThrottle