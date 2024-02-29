import { Link } from "react-router-dom"
import SocialLogin from "./Social"
import { useState } from "react"

function Navbar({ isloggedin }) {
   var [searchtext,setSearchtext] = useState()
  function handleSearchtext(e){
    setSearchtext(e.target.value)

  }

  function logout(){
    localStorage.clear()
    window.location.href = "/"
  }
  

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">Ashu's Cake gallery</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            <form class="d-flex" role="search">
              <input onChange={handleSearchtext} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <Link to={"/search?q="+searchtext}><button class="btn btn-outline-success" type="submit">Search</button></Link>
            </form>

          </ul>
          <div class="d-flex" role="search">
            {!isloggedin && <Link to="/login"><button class="btn btn-primary" type="submit">Login</button></Link>}
            {isloggedin && <button onClick={logout} class="btn btn-danger" type="submit">Logout</button>}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar