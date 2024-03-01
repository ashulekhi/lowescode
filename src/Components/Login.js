import axios from "axios";
import { Modal } from "bootstrap";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import $ from "jquery"

function Login({ modal }) {
    var dispatch = useDispatch()
    var user = {}
    var [error, setError] = useState()
    var navigate = useNavigate()
    var [loginModal, setLoginModal] = useState()
    var [isloading, setIsloading] = useState(false)

    useEffect(() => {
        setLoginModal(new Modal("#loginModal"))
    }, [])

    function handleEmail(e) {
        user.email = e.target.value;
    }

    function handlePassword(e) {
        user.password = e.target.value
    }

    function signin() {


        if (user.email && user.password) {
            setIsloading(true)
            axios({
                url: "http://apiforreactnative.eu-4.evennode.com/api" + "/login",
                method: "post",
                data: user
            }).then((response) => {
                setIsloading(false)

                console.log("response from api ", response.data)
                if (response.data.token) {
                    localStorage.token = response.data.token
                    dispatch({
                        type: "LOGIN_SUCCESS"
                    })
                    navigate("/")

                }
                else {
                    setIsloading(false)
                    setError("Invalid Credentials")
                }
            }, (error) => {
                console.log("Error from login api", error)
            })
        }
        else {
            setError("Enter Details")
        }
    }

    return (
        <div>
            <div style={{ margin: "auto", width: "30%" }}>
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
                    <Link style={{ "float": "right" }} to="/signup">New  User? Register Here</Link>
                </div>
                <div className="mt-3">
                    {!isloading && <button style={{ "float": "right" }} onClick={signin} className="btn btn-primary">SignIn</button>}
                    {isloading && <button disabled style={{ "float": "right" }} className="btn btn-primary">Signing In... Please Wait</button>}                </div>
            </div>
        </div>
    )
}

export default Login