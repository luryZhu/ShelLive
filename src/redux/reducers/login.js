import { USER_LOGIN, USER_LOGOUT } from "../constants";

const defaultState={
    user: {
        nickname: "",
        token: ""
    }
}

export default function login(state=defaultState, action){
    switch (action.type){
        case USER_LOGIN:
            return {
                user: action.user
            }
        case USER_LOGOUT:
            return defaultState
        default:
            // return defaultState
            return state
    }
}