import React from "react";
import Item from "./Item";


const SearchListView=(props)=>{
    // console.log("listview");
    // console.log(props.list);
    return (  
        <div>
            {
                props.list.map((ele,idx)=>{
                    return <Item item={ele} key={idx}></Item>
                })
            }
    
        </div>
    )
}

export default SearchListView