import { INIT_CITY, CHANGE_CITY, SEARCH_KEYWORDS, USER_LOGIN, USER_LOGOUT } from "../constants";

export function initCity(cityName){
    return{
        type: INIT_CITY,
        cityName
    }
}

export function changeCity(cityName){
    return{
        type: CHANGE_CITY,
        cityName
    }
}

export function searchKeywords(keywords){
    return{
        type: SEARCH_KEYWORDS,
        keywords
    }
}

export function userLogin(user){
    return {
        type: USER_LOGIN,
        user
    }

}

export function userLogout(){
    return {
        type: USER_LOGOUT
    }
}