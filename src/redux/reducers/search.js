import { SEARCH_KEYWORDS } from "../constants";

const defaultState={
    keywords: ""
}

export default function search(state=defaultState,action){
    switch (action.type){
        case SEARCH_KEYWORDS:
            return {
                keywords: action.keywords
            }
        default:
            return state
    }
}