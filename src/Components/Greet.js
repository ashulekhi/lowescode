import { useEffect, useState } from "react"

function Greet(){
    var [company,setCompany] = useState("Lowes")
    var [userdetails,setUserdetails] =  useState({})
    // var [data,handlerfunctionofthatdata] =  useState(initialvalue)
    var [inhand,setInhand] = useState(50000)
    useEffect(()=>{
        alert("Yay!!! Partyeeeyyyyyyyyyyyy")
    } , [userdetails.company])

    function changeJob(){
        setCompany("SOme new company")
    }

    function increment(){
        setInhand(inhand+inhand*0.2)
    }

    return (
        <div>
            <h1>Salary {inhand}</h1>
            <h1>Compaby {company}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={changeJob}>Change Job</button>
    
        </div>
    )
}
export default Greet