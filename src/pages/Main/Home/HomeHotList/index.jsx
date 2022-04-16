import React,{ useState,useEffect } from "react"
import api from "../../../../api"
import HomeHotView from "../HomeHotView"
import Loading from "../../../../components/Loading"

const HomeHotList = (props) =>{

    const [hot1List,setHot1List] = useState([])
    const [hot2List,setHot2List] = useState([])

    /**
     * 获取hot1
     */
    useEffect(() =>{
        api.getHomeHot1({cityName: props.cityName}).then(res =>{
            if(res.data.status === 200){
                setHot1List(res.data.result)
            }
        })
    },[props.cityName])

    /**
     * 获取hot2
     */
    useEffect(() =>{
        api.getHomeHot2({cityName: props.cityName}).then(res =>{
            if(res.data.status === 200){
                setHot2List(res.data.result)
            }
        })
    },[props.cityName])

    return(
        <div>
            {
                hot1List.length > 0 ?
                <HomeHotView data={ hot1List } title={ '热门租房' }/> :
                <Loading></Loading>
            }
            {
                hot2List.length > 0 ?
                <HomeHotView data={ hot2List } title={ '热销房源' }/> :
                <Loading></Loading>
            }
        </div>
    )
}

export default HomeHotList