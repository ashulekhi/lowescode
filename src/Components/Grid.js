
function Grid({ data }) {
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((each, index) => {
                        return <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{each.name}</td>
                            <td><img src={each.image}></img></td>
                            <td>{each.price}</td>
                            <td><button className="btn btn-danger">Delete</button></td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default Grid