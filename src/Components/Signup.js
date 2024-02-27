function Signup(){
    var email
    function handleEmail(event){
        email = event.target.value
        console.log("Event"  , event.target.value)
    }

    function getStarted(){
        console.log("Email entered is" , email)
    }
    return (
        <div>
            <div style={{margin:"auto" , width:"50%" , marginTop:"20rem"}}  className="row">
                <div className="col-6">
                    <input onChange={handleEmail} placeholder="Email" className="form-control"></input>
                </div>
                <div className="col">
                <button  onClick={getStarted} className="btn btn-danger">Get Started</button>

                </div>
            </div>
        </div>
    )
}

export default Signup