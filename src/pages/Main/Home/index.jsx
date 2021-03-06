import React from "react"
import HeaderNav from "./HeaderNav"
import Swiper from "../../../components/Swiper"
import Banner1 from "../../../assets/images/banner1.png"
import Banner2 from "../../../assets/images/banner2.png"
import Banner3 from "../../../assets/images/banner3.png"
import HomeHotList from "./HomeHotList"
// import HomeRecList from "./HomeRecList"
import { useSelector } from "react-redux"
import HomeWaterfall from "./HomeWaterFall"

const Home = () =>{
    const city=useSelector(state => state.city)
    return(
        <div>
            <HeaderNav cityName={city.cityName}/>
            <Swiper banners={[Banner1,Banner2,Banner3]}/>
            <HomeHotList cityName={city.cityName}/>
            <HomeWaterfall cityName={city.cityName}/>

        </div>
    )
}

export default Home