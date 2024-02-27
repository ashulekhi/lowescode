import AddCake from "./Components/AddCake"
import Cakelist from "./Components/Cakelist"
import Grid from "./Components/Grid"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import Signup from "./Components/Signup"
import {cakesdata} from "./data"

var users = ["User1", "user2", "user3"]
var newusers = [{ name: "User1", role: "Developer" }, { name: "User2", role: "Manager" }, { name: "User3", role: "QA" }]



function App() {
  return (
    <div>
      <AddCake />
      {/* <Signup /> */}
      {/* <Grid data={cakesdata} /> */}
      {/* <Cakelist /> */}
    </div>

  )
}


export default App
