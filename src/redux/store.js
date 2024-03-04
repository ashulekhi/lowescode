import {combineReducers, configureStore} from "@reduxjs/toolkit"
import { AuthReducer , MobileReducer } from "./reducers"
import { mymiddleware } from "./middleware"
import {thunk} from "redux-thunk"


var allmyresource = combineReducers({AuthReducer,MobileReducer})


var store = configureStore({
    reducer:AuthReducer,
    middleware:()=>[ thunk, mymiddleware]
})

export default store