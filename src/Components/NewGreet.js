import { Component } from "react";

class NewGreet extends Component {
  constructor(){
    super()
    this.state = {
        salary : 100000
    }
  }

  increment = ()=>{
    // Here we will change the salary
    console.log("Value of this" , this)
    this.state.cakes.push(this.cake)
    this.setState({
        salary:this.state.salary*0.1+this.state.salary
    })
  }
  render(){
    return (
        <div>
            <h1>Salary : {this.state.salary}</h1>
            <button onClick={this.increment}>Increment</button>
        </div>
    )
  }
}

export default NewGreet