import Cake from "./Cake"
import { useEffect, useState } from "react"
import axios from "axios"
import Loader from "./Loader"
import { useSelector , useDispatch } from "react-redux"

function Cakelist(){
    var cakes = useSelector(state=>state.cakes)
    var dispatch = useDispatch()
        if(!cakes){
            axios({
                method:"get",
                url:"http://apiforreactnative.eu-4.evennode.com/api"+"/allcakes"
            }).then((response)=>{
               dispatch({
                type:"INITIALISE_CAKES",
                payload:response.data.data
               })
            })
            return (
                <Loader />
            )
        }
    return (
        <div className="row mt-3">
            {
                cakes?.map((each)=>{
                    return <Cake data={each} />
                })
            }
            
        </div>
    )
}

export default Cakelist