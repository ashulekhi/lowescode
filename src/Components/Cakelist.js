import Cake from "./Cake"
import { useEffect, useState } from "react"
import axios from "axios"
import Loader from "./Loader"

function Cakelist(){
    var [cakes,setCakes] = useState([])
    useEffect(()=>{
        axios({
            method:"get",
            url:"http://apiforreactnative.eu-4.evennode.com/api"+"/allcakes"
        }).then((response)=>{
            setCakes(response.data.data)
        })
    },[])
    if(!cakes.length){
        return (
            <Loader />
        )
    }
    return (
        <div className="row mt-3">
            {
                cakes.map((each)=>{
                    return <Cake data={each} />
                })
            }
            
        </div>
    )
}

export default Cakelist