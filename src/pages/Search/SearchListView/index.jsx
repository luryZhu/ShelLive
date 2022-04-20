import React from "react";
import Item from "./Item";


const SearchListView=(props)=>{
    // console.log("listview");
    // console.log(props.list);
    return (  
        <div>
            {
                props.list.map((ele)=>{
                    return <Item item={ele} key={ele.id}></Item>
                })
            }
    
        </div>
    )
}

export default SearchListView