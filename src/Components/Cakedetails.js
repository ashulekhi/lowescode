import { useParams } from "react-router-dom"

function Cakedetails(){
    var params = useParams()
    var cakeid = params.cakeid
    return (
        <div>
            <h1>Showing Details for this {cakeid}</h1>
        </div>
    )
}
export default Cakedetails