import Cake from "./Cake"
import {cakesdata} from "../data"
var cake = {
    name:"Choco Truffle",
    price:499,
    image:"chocotruffle.webp",
    tag:"Must try"
}
var cake2 = {
    name:"Choco  Dark Truffle",
    price:599,
    image:"chocotruffle.webp",
    tag:"Best Seller"
}

function updateCake(){
  alert("Called by cake but present in cakelist component")
}


function Cakelist(){
    return (
        <div className="row">
            {
                cakesdata.map((each)=>{
                    return <Cake updateCake={updateCake} data={each} />
                })
            }
            
        </div>
    )
}

export default Cakelist