import React from 'react'
import {useLocation,Link} from 'react-router-dom'
import {useSelector}  from "react-redux";

const ViewSingleUser=()=>{
    const location = useLocation()
    const {from} = location.state
const person = useSelector(state=>state.person[from])
console.log(from,'from')
    console.log(person,'who')
    return(
        person.length!==0 ?
    <div className="App-header outSide ">

        <h2>Full Name: {person.firstName} {person.lastName}</h2>
        <h2>Age: {person.age}</h2>
        <h3>Hobbies: {person.hobbies}</h3>
        <Link to='/addUser'>Return Back to Form</Link>

    </div>:<div>
            <h3>The List is Empty</h3>
                <Link to='/addUser'>Return Back to Form</Link>
            </div>

    )
}
export default ViewSingleUser