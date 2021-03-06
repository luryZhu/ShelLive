import React, { useEffect, useState } from "react";
import Item from "./Item";
import BackToTop from "../BackToTop";
import "./style.less"
import { useMount } from "../../hooks/useMount";

const Waterfall=({resultList})=>{
    const [leftList, setLeftList]=useState([])
    const [rightList, setRightList]=useState([])
    const isMount=useMount()

    useEffect(()=>{
        if (!isMount()) return
        let lHight=0, rHight=0
        let left=[], right=[]
        console.log(1, resultList)
        resultList.forEach(ele=>{
            // "http://dummyimage.com/800x600/797ff2/FFF&text=ShelLive"
            let hight=parseInt(ele.img.replace("http://dummyimage.com/","").split("/")[0].split("x")[1])
            if (lHight<=rHight){
                lHight+=hight
                left.push(ele)
            } else {
                rHight+=hight
                right.push(ele)
            }
            // console.log(lHight,rHight)
           
        })
        // console.log("l",left)
        // console.log("r",right)
        setLeftList(left)
        setRightList(right)
    },[resultList])

    return (
        <div id="waterfall-container">
            <BackToTop bottomBias={50}></BackToTop>
            <div className="container">
                {   
                    leftList.map(ele=>{
                        return <Item data={ele} key={ele.id}></Item>
                    })
                }
            </div>
            <div className="container">
                {
                    rightList.map(ele=>{
                        return <Item data={ele} key={ele.id}></Item>
                    })
                }
            </div>
        </div>
    )
}

export default Waterfall