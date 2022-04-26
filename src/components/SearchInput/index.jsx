import React, { useEffect, useRef, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";

import "./style.less"

const SearchInput=()=>{
    const navigate=useNavigate()

    const params=useParams()

    const [keywords, setKeywords]= useState("")

    const input=useRef()

    function keyUpHandle(e){        
        if (e.keyCode===13){
            // console.log(13);
            if (keywords.length>0){
                console.log(keywords);
                navigate('/search/'+keywords)
                e.target.value=keywords
            }          
        }
    }

    useEffect(()=>{
        if (params.keywords){
            // dispatch(searchKeywords(params.keywords))
            setKeywords(params.keywords)
            input.current.value=params.keywords
        } else {
            // dispatch(searchKeywords(""))
            input.current.value=""
        }
        
        

    },[params.keywords])

    function changeHandle(e){
        setKeywords(e.target.value)
    }

    return (
        <input type="text" 
            className="search-input"
            onKeyUp={keyUpHandle}
            onChange={changeHandle}
            ref={input}
            value={keywords}
        />
    )
}

export default SearchInput