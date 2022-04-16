import React, { useState } from "react";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from "./Pagination";

import "./style.less"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Swiper= (props)=>{

    let [index, setIndex]=useState(0)

    let handleChangeIndex= (index)=>{
        setIndex(index)
    }

    return (
        

        <div className="swiper">
            <AutoPlaySwipeableViews index={index} onChangeIndex={handleChangeIndex}>
                {
                    props.banners.map((ele, idx)=>{
                        return (
                            <div className="swiper-view" key={idx}>
                                <img src={ele} alt={"banner"+idx} />
                            </div>
                        )
                        
                    })
                }
            </AutoPlaySwipeableViews>
            <Pagination len={props.banners.length} curIndex={index}/>
        </div>
    )
}

export default Swiper