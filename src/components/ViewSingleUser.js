import React from 'react'
import {useLocation,Link} from 'react-router-dom'
import {useSelector}  from "react-redux";

const ViewSingleUser=()=>{
    const location = useLocation()
    const {from} = location.state
const person = useSelector(state=>state.person[from])

    const isObjectEmpty=(obj={})=>{
        return Object.keys(obj).length === 0
    }
    return(
       !isObjectEmpty(person) ?
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