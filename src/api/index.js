import axios from "../utils/request";

/**
 * 路径地址
 */
const base= {
    baseUrl: "http://127.0.0.1:3001",
    homehot1: "/api/home/hot1",
    homehot2: "/api/home/hot2",
    homehot3: "/api/home/hot3",
    cityUrl: "/api/aj/getcitycode",
    search: "/api/search",
    details: "/api/details",
    login: "/api/login"
}

/**
 * 请求方法
 */
const api={
    getHomeHot1(params){
        return axios.get(base.baseUrl+base.homehot1,{
            params
        })
    },
    getHomeHot2(params){
        return axios.get(base.baseUrl+base.homehot2,{
            params
        })
    },
    getHomeHot3(params){
        return axios.get(base.baseUrl+base.homehot3,{
            params
        })
    },
    getCity(){
        return axios.get(base.cityUrl)
    },
    getSearchResult(params){
        return axios.get(base.baseUrl+base.search,{
            params
        })
    },
    getDetails(params){
        return axios.get(base.baseUrl+base.details,{
            params
        })
    },
    postLogin(params){
        // console.log(params);
        return axios.post(base.baseUrl+base.login, params)
    }
}

export default api;