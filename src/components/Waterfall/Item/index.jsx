import React, { useEffect, useState } from "react";
import loadImageAsync from "../../../utils/loadImage";
import imgDefault from "../../../assets/images/default/imgDefaultSearch.png"
import { Link } from "react-router-dom";

const Item=({data})=>{
    const [img, setImg]=useState(imgDefault)
    useEffect(()=>{
        let isMount=true
        loadImageAsync(data.img).then(res=>{
            isMount && setImg(res)
        }, reason=>{
            console.log(reason)
        })
        return ()=>{
            isMount=false
        }
    },[])
    return (
        
        <div className="item">
            <Link to={"/details/"+data.id}>
           
            <img src={img} alt="image" />
            <p className="title">{data.title}</p>
            <p className="price">{data.price} 元/月</p>
            
          
            </Link>
        </div>
        
    )
}

export default Item