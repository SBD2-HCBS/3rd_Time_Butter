import React from 'react'
import {useDispatch } from 'react-redux'
import {useLocation,Link} from 'react-router-dom'

const ViewSingleUser=(props)=>{
    const dispatch = useDispatch()
    const location = useLocation()
    const {from} = location.state
    const viewPerson = (id) => {
        dispatch({
            type:'VIEW_PERSON',
            payload:id
        })
    }
    return(
        <div className="App-header outSide ">

                <row><h2>Full Name: {from.firstName} {from.lastName}</h2></row>
                <row><h2>Age: {from.age}</h2></row>
                <row><h3>Hobbies: {from.hobbies}</h3></row>
                <Link to='/addUser'>Return Back to Form</Link>

        </div>
    )
}
export default ViewSingleUser