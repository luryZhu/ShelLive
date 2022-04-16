import React from "react";
import "./style.less"

const CityList=(props)=>{


    return (
        <div className="city-list-container clear-fix">
            <h3></h3>
            <ul>
                <li onClick={()=>props.onEvent("北京")}><span>北京</span></li>
                <li onClick={()=>props.onEvent("上海")}><span>上海</span></li>
            </ul>
        </div>
    )
}

export default CityList