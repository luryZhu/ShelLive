import React from "react";
import "./style.less"

const UserList=(props)=>{
    return (
        <div className="list-container">
            <div className="list-item">
                <i className="iconfont icon-star"></i>
                <p>我的收藏</p>
            </div>
            <div className="list-item">
                <i className="iconfont icon-car"></i>
                <p>我的订单</p>
            </div>
        </div>
    )
}

export default UserList