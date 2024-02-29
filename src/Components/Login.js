import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login({loginDone}){
    var user = {}
    var [error,setError] = useState()
    var navigate = useNavigate()

    function handleEmail(e){
        user.email= e.target.value;
    }

    function handlePassword(e){
        user.password = e.target.value
    }

    function signin(){
       if(user.email && user.password){
        axios({
            url:"http://apiforreactnative.eu-4.evennode.com/api"+"/login",
            method:"post",
            data:user
        }).then((response)=>{
            console.log("response from api " , response.data)
            if(response.data.token){
                localStorage.token = response.data.token
                loginDone()
                navigate("/")
            }
            else{
                setError("Invalid Credentials")
            }
        },(error)=>{
            console.log("Error from login api" , error)
        })
       }
       else{
        setError("Enter Details")
       }
    }

    return (
        <div>
            <div style={{margin:"auto" , width:"30%"}}>
                <h1>Login Here</h1>
                {error && <div className="alert alert-danger">
                    {error}
                </div>}
                <div>
                    <label>Email</label>
                    <input onChange={handleEmail} className="form-control"></input>
                </div>
                <div>
                    <label>Password</label>
                    <input onChange={handlePassword} type="password" className="form-control"></input>
                </div>
                <div className="mt-3">
                    <Link to="/forgot">Forgot Password?</Link>
                    <Link style={{"float":"right"}} to="/signup">New  User? Register Here</Link>
                </div>
                <div className="mt-3">
                    <button style={{"float":"right"}} onClick={signin} className="btn btn-primary">SignIn</button>
                </div>
            </div>
        </div>
    )
}

export default Login