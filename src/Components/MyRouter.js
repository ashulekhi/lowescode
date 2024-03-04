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
import LoginModal from "./Loginmodal"
import Cart from "./Cart"
import Test from "./Test"

export var dummycakes = []



function MyRouter(){
    return (
        <div>
        
            <BrowserRouter>
            <Navbar/>
            <LoginModal />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login /> } />
                <Route path="/signup" element={<Signup />} />
                <Route path="/search" element={<Search />} />
                <Route path="/addcake" element={<AddCake />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} >
                    <Route path="address" element={<Address />} />
                    <Route path="payment" element={<Payment />} />
                    <Route path="summary" element={<Sumary />} />
                </Route>
                <Route path="/*" element={<Pagenotfound />} />
                <Route path="/test" element={<Test />} />
                <Route path="/details/:cakeid?" element={<Cakedetails />} />
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default MyRouter