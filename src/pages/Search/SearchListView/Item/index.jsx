import React, { useEffect, useState } from "react";
import loadImageAsync from "../../../../utils/loadImage"
import imgDefaultSearch from "../../../../assets/images/default/imgDefaultSearch.png"
import { Link } from "react-router-dom";
import "./style.less"

const Item=(props)=>{
    const {item}=props
    // console.log(item);
    const [img, setImg]=useState(imgDefaultSearch)

    useEffect(()=>{
        let isMount=true
        loadImageAsync(item.img).then((url)=>{
            isMount && setImg(url)
        }).catch((reason)=>{
            console.log(reason);
        })

        return ()=>{
            isMount=false
        }
    },[])
    
    return (
        <Link to={"/details/"+item.id}>
            <div className="list-item">
            <img src={img} alt="house" />
            <div className="mask">
                <div className="left">
                    <p>{item.title}</p>
                    <p>{item.houseType}</p>
                </div>
                <div className="right">
                    <div className="btn">{item.rentType}</div>
                    <p dangerouslySetInnerHTML={{ __html:item.price + "元/月" }}></p>
                </div>
            </div>
        </div>
        </Link>       
    )
}

export default Item