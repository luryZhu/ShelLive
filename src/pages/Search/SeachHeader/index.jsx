import React from "react";
import "./style.less";
import SearchInput from "../../../components/SearchInput"

const SearchHeader=()=>{
    function handleBack() {
        window.history.back()
    }

    return (
        <div id="search-header" className="clear-fix">
            <span className="back-icon float-left" onClick={handleBack}>
                <i className="iconfont icon-chevron-left"></i>
            </span>
            <div className="input-container">
                <i className="iconfont icon-search"></i>
                <SearchInput />
            </div>
        </div>
    )
}

export default SearchHeader