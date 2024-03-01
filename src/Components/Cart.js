import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"


function Cart(){
    var dispatch = useDispatch()
    var cartitems = useSelector(state=>state.cartitems)
    console.log("Cart items we got are" , cartitems)
    useEffect(()=>{
        dispatch({
            type:"FETCH_CART_ITEMS"
        })
    },[])
    return (
        <div>
            <h1>Cart Items </h1>
        </div>
    )
}

export default Cart