import { useCallback, useRef } from "react";

function useDebounce(fn, delay=300){
    const timer=useRef()

    const cancel=useCallback(()=>{
        // console.log("cancel");
        timer.current && clearTimeout(timer.current)
    },[])

    function fnDebounce() {
        cancel()
        timer.current=setTimeout(()=>{
            fn()            
        }, delay)
        
    }
    
    // console.log(timer);
    // console.log(typeof fnDebounce);
    return fnDebounce
}

export default useDebounce