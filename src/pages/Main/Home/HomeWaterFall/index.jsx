import React, { Fragment, useEffect, useRef, useState } from "react";
import Waterfall from "../../../../components/Waterfall";
import LoadMore from "../../../../components/LoadMore";
import api from "../../../../api";

const HomeWaterfall=(props)=>{
    const [resultList,setResultList]=useState([])
    const resultRef=useRef()

    function getList(){
        console.log("get list")
        api.getHomeHot3({cityName: props.cityName}).then((result)=>{
            // console.log(result.data.result)
            setResultList(resultRef.current.concat(result.data.result))
        })
    }

    function onLoadMore(){
        getList()
    }

    useEffect(()=>{
        getList()
    },[])

    useEffect(()=>{
        // console.log(resultList)
        resultRef.current=resultList
    },[resultList])

    return (
        <Fragment>
            {
                resultList.length>0
                ? <Waterfall resultList={resultList}></Waterfall>
                : null
            }
            
            <LoadMore hasMore={true} onLoadMore={onLoadMore}></LoadMore>
            <div style={{height: "50px"}}></div>
        </Fragment>

    )
}

export default HomeWaterfall