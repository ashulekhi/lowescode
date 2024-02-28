import { useContext } from "react"
import { MyContext } from "../App"

function Mybutton({loginMechanism}){
    var value = useContext(MyContext)
    return (
        <div>
            <h1>{value}</h1>
        <button className="btn btn-primary">Login With {loginMechanism}</button>

        </div>
    )
}

export default Mybutton