import { useEffect } from "react"

function Greet(props){

    useEffect(()=>{
        console.log(">>>>>>>>>>>>>>>>>>. rendered")
    },[])
   
    
        return (
            
            <div>
                {console.log(">>>>>>>>>>")}
                <h1>Good Afternoon {props.name}</h1>
               
            </div>
        )

    
}
export default Greet