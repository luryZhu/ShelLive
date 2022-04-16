import React from "react";
import "./style.less"

const StoreAndBuyView=(props)=>{
    function onclickHandle(){
        // console.log(props.storeHandle);
        props.storeHandle()
    }
    return (
        <div className="store-and-buy-container">
            <div className="item-container">
                <button onClick={onclickHandle}>{props.isStored?"已收藏":"收藏"}</button>
                
            </div>
            <div className="item-container">
                <button>购买</button>
            </div>
        </div>
    )
}

export default StoreAndBuyView