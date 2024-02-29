import { useState  , useEffect} from "react"



export default function AddCake() {
    var [cake,setCake] =  useState({})
    useEffect(()=>{
        // api data fetching 
    }, []) // list of dependencies 
    var [cakes,setCakes] = useState([])
    function handleName(event) {
        setCake({...cake,
        name:event.target.value})
    }
    function handlePrice(event) {
        setCake({...cake,
        price:event.target.value})
    }
    function add() {
        cakes.push({...cake})
        console.log("Cakes added ", cakes)
        setCake({name:"",price:""})
        setCakes([...cakes])
    }

   function editCake(index){
    setCake({...cakes[index]})
   }

    function deleteCake(index){
        console.log("this cake has to be removed" , index)
        cakes.splice(index,1)
        setCakes([...cakes])  
    }
    return (
        <div>
            <div style={{ margin: "auto", width: "30%" }}>
                <h1>Add Cake</h1>
                <div className="mt-3" >
                    <input value={cake.name} onChange={handleName} placeholder="Name" className="form-control"></input>
                </div>
                <div className="mt-3">
                    <input value={cake.price} onChange={handlePrice} placeholder="Price" className="form-control"></input>
                </div>
                <div  className="mt-3">
                    <button style={{"float":"right"}} onClick={add} className="btn btn-primary">Add Cake</button>
                </div>
            </div>


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
                        cakes.map((each,index)=>{
                            return (
                                <tr>
                                    <td>{index+1}</td>
                                <th scope="row">{each.name}</th>
                                <td colspan="2">{each.price}</td>
                                <td><button onClick={deleteCake.bind(null,index)} className="btn btn-danger">X</button></td>
                                <td><button onClick={editCake.bind(null,index)} className="btn btn-primary">Edit</button></td>
                              </tr>
                            )
                        })
                     
    }
                    </tbody>
                  </table>
        </div>
    )
    
}