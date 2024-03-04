import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Adnan } from "../redux/thunks"


function Cart() {
    var dispatch = useDispatch()
    var cartitems = useSelector(state => state.cartitems)
    console.log("Cart items we got are", cartitems)
    useEffect(() => {
        dispatch({
            type: "FETCH_CART_ITEMS"
        })
    }, [])


    function  removeFromCart(id,index){
        dispatch(Adnan(id,index))
    }
    return (
        <div className="container">
            <h1>Cart Items </h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cartitems?.map((each, index) => {
                        return (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{each.name}</td>
                                <td><img src={each.image} style={{ width: "5rem", height: "5rem" }}></img></td>
                                <td>{each.price}</td>
                                <td><button className="btn btn-secondary">+</button>{each.quantity}<button className="btn btn-secondary">-</button></td>
                                <td><button onClick={removeFromCart.bind(this,each.cakeid , index)} className="btn btn-danger">X</button></td>
                            </tr>
                        )
                    })}


                </tbody>
            </table>
        </div>
    )
}

export default Cart