function Login({loginSuccess}){
    var user = {}

    function handleEmail(e){
        user.email= e.target.value;
    }

    function handlePassword(e){
        user.password = e.target.value
    }

    function signin(){
       if(user.email=="test" && user.password=="test"){
        loginSuccess()
       }
    }

    return (
        <div>
            <div style={{margin:"auto" , width:"30%"}}>
                <h1>Login Here</h1>
                <div>
                    <label>Email</label>
                    <input onChange={handleEmail} className="form-control"></input>
                </div>
                <div>
                    <label>Password</label>
                    <input onChange={handlePassword} type="password" className="form-control"></input>
                </div>
                <div>
                    <button onClick={signin} className="btn btn-primary">SignIn</button>
                </div>
            </div>
        </div>
    )
}

export default Login