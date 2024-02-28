import React, { useState } from "react"
import AddCake from "./Components/AddCake"
import NewAddCake from "./Components/AddCakeStatefull"
import Cakelist from "./Components/Cakelist"
import Greet from "./Components/Greet"
import Grid from "./Components/Grid"
import Home from "./Components/Home"
import Login from "./Components/Login"
import Navbar from "./Components/Navbar"
import NewGreet from "./Components/NewGreet"
import Signup from "./Components/Signup"
import {cakesdata} from "./data"

var users = ["User1", "user2", "user3"]
var newusers = [{ name: "User1", role: "Developer" }, { name: "User2", role: "Manager" }, { name: "User3", role: "QA" }]

export var MyContext = React.createContext()

function App() {

  var [isuserloggedin,setIsuserloggedin] = useState(false)
  function loginSuccess(){
    setIsuserloggedin(true)
  }
  var loginMechanism = "faceBook"
  return (
    <div>
      <MyContext.Provider value="1Kg Gold">
      <Navbar loginMechanism={loginMechanism} isuserloggedin={isuserloggedin} />

      </MyContext.Provider>
      <Login loginSuccess={loginSuccess} />
      {/* <Greet /> */}
      {/* <NewAddCake /> */}
      {/* <AddCake /> */}
      {/* <Signup /> */}
      {/* <Grid data={cakesdata} /> */}
      {/* <Cakelist /> */}
    </div>

  )
}


export default App
