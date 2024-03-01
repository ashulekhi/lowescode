import axios from "axios"

export function mymiddleware(state) {
    return function (next) {
        return function (action) {
            console.log(">>>>>>>>>>>>>>>>>>>. coming here ")
            next(action)
            if (action.type == "FETCH_CART_ITEMS") {
                //api call
                axios({
                    method: "get",
                    url: process.env.REACT_APP_API_BASE_URL + "/cakecart",
                    headers: {
                        Authorization: localStorage.token
                    }
                }).then((response) => {
                    next({
                        type: "CART_ITEMS_SUCCESS",
                        payload: response.data.data
                    })
                }, (error) => {
                    next({
                        type: "CART_ITEMS_ERROR"
                    })
                })
            }
            else {
                next(action)
            }
        }
    }
}