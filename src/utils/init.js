import store from "../redux/store"
import * as actions from "../redux/actions"

if (localStorage.getItem("ShelLive")){
    store.dispatch(actions.userLogin(JSON.parse(localStorage.getItem("ShelLive"))))
}