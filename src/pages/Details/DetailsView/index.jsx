import React from "react";
import PubHeader from "../../../components/PubHeader";
import Swiper from "../../../components/Swiper";
import StoreAndBuy from "../StoreAndBuy";
import "./style.less"

const DetailsView=(props)=>{
    const {details}=props
    return (
        <div>
            <PubHeader title="详情显示"></PubHeader>
            <Swiper banners={details.imgs}></Swiper>
            <div className="detail-info">
                <h3>{details.title}</h3>
                <div className="box">
                    <ul>
                        <li>
                            <p>租金</p>
                            <span>{details.price} /月</span>
                        </li>
                        <li>
                            <p>房屋类型</p>
                            <span>{details.info.type}</span>
                        </li>
                        <li>
                            <p>面积</p>
                            <span>{details.houseType}</span>                           
                        </li>
                        </ul>
                </div>
                <div className="info">
                    <div className="info-list">
                        <p>类型：{details.info.type}</p>
                        <p>朝向：{details.info.orientation}</p>
                    </div>
                    <div className="info-list">
                        <p>楼层：{details.info.level}</p>
                        <p>装修：{details.info.style}</p>
                    </div>
                    <div className="info-list">
                        <p>年代：{details.info.years}</p>
                    </div>
                </div>
            </div>
            <StoreAndBuy id={props.id}></StoreAndBuy>
        </div>
    )
}

export default DetailsView