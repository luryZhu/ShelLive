import React from "react";
import { useParams } from "react-router-dom";
import SearchList from "./SearchList";
import SearchHeader from "./SeachHeader";

const Search=()=>{
    const params=useParams()
    return (
        <div>
            <SearchHeader></SearchHeader>
            <SearchList keywords={params.keywords}></SearchList>
           
        </div>
    )
}

export default Search