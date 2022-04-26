import React, { useEffect, useRef } from "react";

// const getMount=useMount()
export function useMount(){
    const ref=useRef(false)
    useEffect(()=>{
        ref.current=true
        return ()=>{
            ref.current=false
        }
    },[])
    return ()=>ref.current
}