import { createStore } from "redux";


function Ashu(state={},action){

    switch(action.type){
        case 'GET_BEERS' : {
            state = {...state}
            state.beers = 10
            return state
        }
        
        case 'GET_CHANKHNA' :{
            state = {...state}
            state.chakhna = 20
            return state
        }
        default : return state
    }

}

var store = createStore(Ashu)

store.dispatch({
    type:"GET_BEERS"
})

console.log("items we have for party are" , store.getState())