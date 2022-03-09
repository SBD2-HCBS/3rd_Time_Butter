import React from 'react'
import {useDispatch } from 'react-redux'
import {useLocation,Link} from 'react-router-dom'
import {Col, Row} from 'reactstrap'
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
    console.log(from)
    return(
        <div>
            <Col>
                <Row><h3>{from.id}</h3></Row>
                <Row><h2>{from.firstName}</h2></Row>
                <Row><h2>{from.lastName}</h2></Row>
                <Row><h2>{from.age}</h2></Row>
                <Row><h3>{from.hobbies}</h3></Row>
                <Link to='/addUser' >Return Back to Form</Link>
            </Col>
        </div>
    )
}
export default ViewSingleUser