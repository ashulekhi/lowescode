import axios from "axios"

export function Adnan(cakeid, index) {

    return function (dispatch) {
        // api call 
        axios({
            url: process.env.REACT_APP_API_BASE_URL + "/removecakefromcart",
            method: "post",
            data: {
                cakeid: cakeid
            },
            headers: {
                Authorization: localStorage.token
            }
        }).then((response) => {
            dispatch({
                type: "REMOVE_ITEM_SUCCESS",
                payload: index
            })
        }).catch((error) => {
            dispatch({
                type: "REMOVE_ITEM_ERROR"
            })
        })
        // axios().then(){ dispatch()}
    }
}