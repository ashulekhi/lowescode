import { useState } from "react"
import axios from "axios"



function Signup(){
    var user = {}
    var[error,setError] = useState()
    function handleEmail(event){
        user.email = event.target.value
    }

    function handleName(e){
        user.name= e.target.value
    }

    function handlePassword(e){
        user.password = e.target.value
    }

    function registerUser(){
        console.log("Data entered is" , user)
        if(user.email&&user.name&&user.password){
            axios({
                url:"http://apiforreactnative.eu-4.evennode.com/api"+"/register",
                method:"post",
                data:user
            }).then((response)=>{
                console.log("response from api " , response.data)
                if(response.data.message=="User Already Exists"){
                    setError("This Email is already registered with Us!")
                }
                else{
                    setError("Kindly Check Your Inbox for Email verification!!")
                }
            },(error)=>{
                console.log("Error from signup api" , error)
            })
        }
    }
    return (
        <div>
            <div style={{margin:"auto" , width:"30%" , marginTop:"7rem"}}>
                <h1>Signup Here</h1>
                {error && <div className="alert alert-danger">
                    {error}
                </div>}
                <div>
                    <label>Email</label>
                    <input onChange={handleEmail} className="form-control"></input>
                </div>
                <div>
                    <label>Name</label>
                    <input onChange={handleName} className="form-control"></input>
                </div>
                <div>
                    <label>Password</label>
                    <input onChange={handlePassword} type="password" className="form-control"></input>
                </div>
                <div className="mt-3">
                    <button style={{"float":"right"}} onClick={registerUser} className="btn btn-primary">Register</button>
                </div>
            </div>
        </div>
    )
}

export default Signup