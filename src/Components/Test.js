import React ,{ useState } from "react"
import Greet from "./Greet"

 var Greet1 = React.memo(Greet)

function Test(){
    
    var [name,setName] = useState()
    var [address,setAddress] = useState()

    function handleName(e){
        setName(e.target.value)
    }

    function handleAddress(e){
        setAddress(e.target.value)
    }
    return (
        <div>
            <h1>test COmponent</h1>
            <input placeholder="name" onChange={handleName}></input>
            <input placeholder="address" onChange={handleAddress}></input>
            <Greet1 name={name} />
            

        </div>
    )
}

export default Test