import React from "react";
import "./style.less"
import SearchList from "../../../Search/SearchList";

const HomeRecList=()=>{
    return (
        <div className="rec-container">
            <h3>好房推荐</h3>
            <SearchList keywords="推荐"></SearchList>
        </div>
    )
}

export default HomeRecList