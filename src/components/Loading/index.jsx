import React from "react";
import "./style.less"

const Loading=()=>{
    return (
        <div className="loading clear-fix">
            
            {/* <div>到底了……</div> */}
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    )
}
export default Loading