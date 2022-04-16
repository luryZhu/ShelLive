import React, { useEffect, useState } from "react";
import "./style.less"
import CitySelect from "react-city-select"
import data from '../../../data/data.json'
import api from '../../../api'

const CityLists=(props)=>{

    const [cityLists,setCityLists]=useState(
        {
            // 结构化城市列表数据
            citysData: data.indexCitys, 
            // 对某项数据定制化配置
            config: {
              pos: {
                title: '定位城市',
              },
              hot: {
                title: '热门城市',
                key: '热门',
                style: 'grid', // 展示形式（ line || grid）
              }
            }
        }
    )

    useEffect(()=>{
        api.getCity().then((res)=>{
            // console.log(res.data);
            if (res.status===200){
                setCityLists(res.data.result)
            }
        })
    },[])

    // 选中城市回调
    function handleSelectCity(cityData) {
        console.log('选中数据项:', cityData);
        props.onEvent(cityData.name)
    }

    return (
        <div className="city-lists-container">
            <CitySelect
                // 传入数据
                data={cityLists.citysData}
                // 传入配置
                config={cityLists.config}
                // 传入回调
                onSelectItem={handleSelectCity}>
            </CitySelect>
        </div>
        
    )
}

export default CityLists
