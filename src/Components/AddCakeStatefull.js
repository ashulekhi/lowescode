import { Component } from "react"

class NewAddCake extends Component {
    cake = {}
    constructor(){
        super()
        this.state = {
            cakes:[]
        }
    }

    handleName = (e)=>{
        this.cake.name = e.target.value
    }
    handlePrice = (e)=>{
        this.cake.price = e.target.value

    }

    addCakes = ()=>{
        this.state.cakes.push({...this.cake})
        console.log("Adding cakes" , this.state.cakes)
        this.setState({cakes:[...this.state.cakes]})
    }

    render(){
        return (
            <div>
                <input onChange={this.handleName}></input>
                <input onChange={this.handlePrice}></input>
                <button onClick={this.addCakes}>Add Cake</button>

                {
                    <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">price</th>
                        <th scope="col">Handle</th>
                      </tr>
                    </thead>
                    <tbody>
                     {
                        this.state.cakes.map((each,index)=>{
                            return (
                                <tr>
                                    <td>{index+1}</td>
                                <th scope="row">{each.name}</th>
                                <td colspan="2">{each.price}</td>
                                <td><button className="btn btn-danger">X</button></td>
                              </tr>
                            )
                        })
                     
    }
                    </tbody>
                  </table>
                }
            </div>
        )
    }
}

export default NewAddCake