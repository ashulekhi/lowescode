import { Link, Outlet } from "react-router-dom"

function Checkout() {
    return (
        <div>
            <div class="row">
                <div className="col-4">
                    <ul class="nav flex-column">
                       
                        <li class="nav-item">
                            <Link class="nav-link" to="/checkout/address"> Address</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/checkout/payment">Payment Mode</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/checkout/summary" aria-disabled="true">Summary</Link>
                        </li>
                    </ul>

                </div>
                <div className="col-8">
                    <Outlet ></Outlet>
                </div>
            </div>
        </div>
    )
}


export default Checkout