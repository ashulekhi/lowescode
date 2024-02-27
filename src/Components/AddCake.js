
var cakes = []

export default function AddCake() {
    var cake = {}
    function handleName(event) {
        cake.name = event.target.value
    }
    function handlePrice(event) {
        cake.price = event.target.value
    }
    function add() {
        cakes.push(cake)
        console.log("Cakes added ", cakes)
    }
    return (
        <div>
            <div style={{ margin: "auto", width: "30%" }}>
                <h1>Add Cake</h1>
                <div className="mt-3" >
                    <input onChange={handleName} placeholder="Name" className="form-control"></input>
                </div>
                <div className="mt-3">
                    <input onChange={handlePrice} placeholder="Price" className="form-control"></input>
                </div>
                <div  className="mt-3">
                    <button style={{"float":"right"}} onClick={add} className="btn btn-primary">Add Cake</button>
                </div>
            </div>
        </div>
    )
}