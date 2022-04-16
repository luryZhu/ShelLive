import React from "react";
import './style.less'
import classnames from "classnames";

const Pagination= (props)=>{
    const arr=new Array(props.len).fill(1)
    const {curIndex}=props
    // console.log(curIndex);

    return (
        <div className="swiper-pagination">
            <ul>
                {
                    arr.map((ele,idx)=>{
                        return (
                            // <li className={curIndex===idx? 'selected': '' } key={idx}></li>
                            <li className={classnames({'selected':curIndex===idx})} key={idx}></li>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default Pagination;