import React, { useEffect, useState } from "react";
import loadImageAsync from "../../../../../utils/loadImage"
import imgDefaultHome from "../../../../../assets/images/default/imgDefaultHome.png"

const Item=function(props){
    const [img, setImg]=useState(imgDefaultHome)
    
    const {ele}=props

    useEffect(()=>{
        let isMount=true
        loadImageAsync(ele.img).then((url)=>{
            isMount && setImg(url)
        }).catch((reason)=>{
            console.log(reason);
        })
        return ()=>{
            isMount=false
        }
    },[])
    
    return (
        <li>
            <a href={ele.link}>
                <img src={img} alt="" />
                <span>{ele.title}</span>
            </a>
        </li>
    )
}
export default Item