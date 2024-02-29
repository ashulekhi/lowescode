import axios from "axios"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import Cake from "./Cake"

function Search(){
    var [query,setQuery] = useSearchParams()
    var [results,setResults] = useState()
    var text = query.get("q")

   
        useEffect(()=>{
            axios({
                method:"get",
                url:"http://apiforreactnative.eu-4.evennode.com/api"+"/searchcakes?q="+text
            }).then((response)=>{
                setResults(response.data.data)
            })
        },[])

    return (
        <div>
            <h1>Showing Results for {text} </h1>
            <div className="row mt-3">
            {
                results?.map((each)=>{
                    return <Cake data={each} />
                })
            }
            
        </div>
        </div>
    )
}

export default Search