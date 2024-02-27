function Cake({data ,updateCake}) {
    var cardstyle = {"width":"18rem"}
    var element 
    if(data?.tag){
        element = <label>{data?.tag}</label>
    }
    if(data){
        return (
            <div className="col">
                <div class="card" style={cardstyle}>
                    <img src={data.image} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{data.name}</h5>
                            <p class="card-text">{data.price}</p>
                            {data?.tag && <label>{data.tag}</label>}
                            <button onClick={updateCake}>I dont want this</button>
                        </div>
                </div>
            </div>
        )
    }
    else{
        return null
    }
    
}
export default Cake