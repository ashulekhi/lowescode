import axios from "axios"
import { useEffect, useState , useRef } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Loader from "./Loader"
import {Modal} from "bootstrap"

function Cakedetails(){
  var Shaktiman = useRef()
    var params = useParams()
    var navigate = useNavigate()
    var cakeid = params.cakeid
    var [cakedetails,setCakedetails] =  useState()
    var [loginModal,setLoginModal] = useState() 
    var [isAdding,setisAdding] = useState(false)

    function addToCart(){
      console.log("Shaktiman ........" , Shaktiman.current)
      Shaktiman.current.style.backgroundColor="red"
      // if(localStorage.token){
      //   setisAdding(true)
      //   var requestObj = {
      //     cakeid:cakedetails.cakeid,
      //     name:cakedetails.name,
      //     price:cakedetails.price,
      //     image:cakedetails.image,
      //     weight:cakedetails.weight,
      //   }
      //   axios({
      //   url:process.env.REACT_APP_API_BASE_URL+"/addcaketocart",
      //   method:"post",
      //   data:requestObj,
      //   headers:{
      //     Authorization:localStorage.token
      //   }
      //   }).then((response)=>{
      //     console.log("response from add to cart api is" , response.data)
      //     if(response.data.data){
      //       navigate("/cart")
      //     }
      //   }, (error)=>{
      //   setisAdding(false)
      //     console.log("Error from api" , error)
      //   })
      // }
      // else{
      //   // loginModal.show()
      //   navigate("/login")
      // }
    }

    useEffect(()=>{
     setLoginModal(new Modal('#loginModal'))
     console.log(">>>>>>>>>>>" , loginModal)
      axios({
        url:process.env.REACT_APP_API_BASE_URL+"/cake/"+cakeid,
        method:"get"
      }).then((response)=>{
          console.log("Response from api" , response.data)
          setCakedetails(response.data.data)
      })
    },[])
    if(cakedetails){
      return (
        <div class="container mt-5">
        <div class="row">
          {/* <!-- Left column for cake image --> */}
          <div class="col-lg-6">
            <img style={{width:"80%"}} src={cakedetails.image} class="img-fluid" alt="Cake Image" />
          </div>
          {/* <!-- Right column for cake details --> */}
          <div class="col-lg-6">
            <h1>{cakedetails.name}</h1>
            <p>{cakedetails.price} Rs</p>
            {/* <!-- Ratings with star icon --> */}
            <div class="mb-3">
              <span>Ratings: {cakedetails.ratings}</span>
            </div>
            <div class="mb-3">
              <span>Reviews: {cakedetails.reviews}</span>
            </div>
            <div class="mb-3">
              <span>{cakedetails.description} </span>
            </div>
            {/* <!-- Input box for message -->  */}
            <div class="mb-3">
              <label for="message" class="form-label">Message on Cake:</label>
              <input type="text" class="form-control" id="message" placeholder="Enter your message" />
            </div>
            <div class="mb-3 row">
              <button className="btn btn-outline-dark col m-3"> 1Kg</button>
              <button className="btn btn-outline-dark col m-3"> 2Kg</button>
              <button className="btn btn-outline-dark col m-3"> 3Kg</button>
              <button className="btn btn-outline-dark col m-3"> 4Kg</button>
              <button className="btn btn-outline-dark col m-3"> 5Kg</button>
            </div>
            {/* <!-- Buttons for buy now and add to cart --> */}
            <div class="gap-2 row">
           {!isAdding?<button onClick={addToCart} class="btn btn-warning col" type="button">Add to Cart</button>
            :<button disabled class="btn btn-warning col" type="button">Adding to Cart...</button>}
              <button  ref={Shaktiman} class="btn btn-primary col" type="button">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    )
    }
    else{
      return <Loader />
    }
    
}
export default Cakedetails