import React, { useState } from "react";
import "./style.less"

const Tabs=(props)=>{

    const [curIndex, setCurIndex]=useState(0)

    return (
        <div>
            <ul>
                {
                    React.Children.map((element))
                }
            </ul>
            <div></div>
        </div>
    )
}

export default Tabs