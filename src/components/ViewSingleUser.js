import React from 'react'
import {useLocation,Link} from 'react-router-dom'

const ViewSingleUser=()=>{
    const location = useLocation()
    const {from} = location.state

    return(
        <div className="App-header outSide ">

                <h2>Full Name: {from.firstName} {from.lastName}</h2>
                <h2>Age: {from.age}</h2>
                <h3>Hobbies: {from.hobbies}</h3>
                <Link to='/addUser'>Return Back to Form</Link>

        </div>
    )
}
export default ViewSingleUser