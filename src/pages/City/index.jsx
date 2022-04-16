import React from "react";
import PubHeader from "../../components/PubHeader";
import CurrentCity from "./CurrentCity";
import CityList from "./CityList";
import CityLists from "./CityLists";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeCity } from "../../redux/actions";

const City=()=>{
    const navigate=useNavigate()
    // const [city,setCity]=useState(["北京"])
    const city=useSelector(state => state.city)
    const dispatch=useDispatch()
    // console.log(city);

    function onCityEvent(city){
        
        dispatch(changeCity(city))
        // setCity(city)
        // 点击城市后转跳
        navigate('/')
    }
    return (
        <div>
            <PubHeader title="当前城市"></PubHeader>
            <CurrentCity city={city.cityName}></CurrentCity>
            {/* <CityList onEvent={onCityEvent}></CityList> */}
            <CityLists onEvent={onCityEvent}></CityLists>
        </div>
    )
}

export default City