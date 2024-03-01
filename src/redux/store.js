import {configureStore} from "@reduxjs/toolkit"
import { AuthReducer } from "./reducers"
import { mymiddleware } from "./middleware"


var store = configureStore({
    reducer:AuthReducer,
    middleware:()=>[mymiddleware]
})

export default store