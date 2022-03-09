import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'
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
                <Row>{from.id}</Row>
                <Row>{from.firstName}</Row>
                <Row>{from.lastName}</Row>
                <Row>{from.age}</Row>
                <Row>{from.hobbies}</Row>
            </Col>
        </div>
    )
}
export default ViewSingleUser