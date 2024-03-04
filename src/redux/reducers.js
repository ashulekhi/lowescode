export function AuthReducer(state = {
    isloggedin:localStorage.token?true:false
}, action){
  switch(action.type){
    case "LOGIN_SUCCESS":{
        state= {...state}
        state.isloggedin = true
        return state
    }

    case "INITIALISE_CAKES":{
        state= {...state}
        state.cakes = action.payload
        return state
    }

    case "REMOVE_ITEM_SUCCESS":{
      state = {...state}
      state.cartitems.splice(action.payload,1)
      state.cartitems = [...state.cartitems]
      return state
    }

    case "CART_ITEMS_SUCCESS" :{
      state= {...state}
      state.cartitems = action.payload
      return state
    }

    case "CART_ITEMS_ERROR" :{
      state = {...state}
      state.errorincart = true
      return state
    }


    default : return state
  }
}


export function MobileReducer(state={},action){

}