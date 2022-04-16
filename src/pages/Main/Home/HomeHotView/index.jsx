import React from "react"
import Item from "./Item"
import "./style.less"

const HomeHotView = (props) => {

    return (
        <div className="hotproduct">
            
            <div className="hot-container">
            <h3>{ props.title }</h3>
                <ul className="clear-fix">
                    {
                        props.data.map((ele, idx) => {
                            return (
                                <Item ele={ele} key={idx}></Item>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default HomeHotView