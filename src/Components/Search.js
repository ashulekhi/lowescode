import axios from "axios"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import Cake from "./Cake"
import Loader from "./Loader"

function Search(){
    var [query,setQuery] = useSearchParams()
    var [results,setResults] = useState()
    var [isloading,setIsloading] =  useState(true)
    var text = query.get("q")

        useEffect(()=>{
        setIsloading(true)
            axios({
                method:"get",
                url:"http://apiforreactnative.eu-4.evennode.com/api"+"/searchcakes?q="+text
            }).then((response)=>{
                setIsloading(false)
                setResults(response.data.data)
            })
        },[text])
   if(results){
    return (
        <div>
            {isloading && <Loader />}
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
        else{
            return <Loader />
        }
        
}

export default Search