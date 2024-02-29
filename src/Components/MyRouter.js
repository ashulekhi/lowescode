import { BrowserRouter , Routes , Route} from "react-router-dom"
import Login from "./Login"
import Signup from "./Signup"
import AddCake from "./AddCake"
import Home from "./Home"
import Navbar from "./Navbar"
import Pagenotfound from "./Pagenotfound"
import Search from "./Search"
import Cakedetails from "./Cakedetails"
import Checkout from "./Checkout"
import Address from "./Address"
import Payment from "./Payment"
import Sumary from "./Summary"
import { useState } from "react"

export var dummycakes = []



function MyRouter(){
    function loginDone(){
        setIsloggedin(true)
    }

    var [isloggedin,setIsloggedin] = useState(localStorage.token?true:false)
    return (
        <div>
            <BrowserRouter>
            <Navbar isloggedin={isloggedin} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login loginDone={loginDone}/>} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/search" element={<Search />} />
                <Route path="/addcake" element={<AddCake />} />
                <Route path="/checkout" element={<Checkout />} >
                    <Route path="address" element={<Address />} />
                    <Route path="payment" element={<Payment />} />
                    <Route path="summary" element={<Sumary />} />
                </Route>
                <Route path="/*" element={<Pagenotfound />} />
                <Route path="/details/:cakeid?" element={<Cakedetails />} />
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default MyRouter