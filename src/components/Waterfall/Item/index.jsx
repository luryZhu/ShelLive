import React, { useEffect, useState } from "react";
import loadImageAsync from "../../../utils/loadImage";
import imgDefault from "../../../assets/images/default/imgDefaultSearch.png"
const Item=({data})=>{
    const [img, setImg]=useState(imgDefault)
    useEffect(()=>{
        loadImageAsync(data.img).then(res=>{
            setImg(res)
        }, reason=>{
            console.log(reason)
        })
    },[])
    return (
        <div className="item">
            <img src={img} alt="image" />
            <p className="title">{data.title}</p>
            <p className="price">{data.price} 元/月</p>
        </div>
    )
}

export default Item