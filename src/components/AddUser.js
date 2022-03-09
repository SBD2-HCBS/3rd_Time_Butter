import React, {useState, useEffect} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {addPerson} from'../ducks/reducer'
import ViewContainer from './ViewContainer'
import {Button, Col, Row} from 'reactstrap';
import '../App.css';
import {Link} from "react-router-dom";

let id=0;
let san = "secondary";
const AddUser=(props)=>{
    const statePerson = useSelector(state=>state.person);
    const [submit,setSubmit] = useState(false)
    const dispatch = useDispatch()

    const [firstName,setFirstName] = useState(''),
        [lastName,setLastName] = useState(''),
        [age,setAge] = useState(''),
        [hobbies,setHobbies] = useState(''),
        [person,setPerson] = useState({
            id,
            firstName:'',
            lastName:'',
            age,
            hobbies:''
        });

    const addNewPerson = () => {
        setPerson({
          id:++id,
            firstName: firstName,
            lastName: lastName,
            age: age,
            hobbies:hobbies
        })
    }
    let isMounted=true;
    useEffect(()=>{

if(isMounted) {
    console.log(props.person + "hello")

    dispatch({
        type: 'ADD_PERSON',
        payload: person
    })
    setSubmit(true);
    setTimeout(() => {
        setSubmit(false)
    }, 1500)
}
        return()=>  isMounted=false

    },[person])

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewPerson()
        isMounted=true
        setTimeout(()=>addPerson(person),100)
    }

    return(
        <React.Fragment>
        <form onSubmit={handleSubmit}>
            <Col>
                <Row>
                    <span><h2>Fill Out Form</h2></span>
                </Row>


<Row>
            <input
                type='text'
                name={firstName}
                placeholder="First Name"
                onChange={(e)=>setFirstName(e.target.value)}
                required
            />
            <input
                type='text'
                name={lastName}
                placeholder="last Name"
                onChange={(e)=>setLastName(e.target.value)}
                required
            />
            <input
                type={'number'}
                name={age}
                placeholder="age"
                onChange={(e)=>setAge(e.target.value)}
                required
            />
            <input
                type={'text'}
                name={hobbies}
                placeholder="Hobbies"
                onChange={(e)=>setHobbies(e.target.value)}
                required
            />
</Row>
            <Button variant={san}>Submit Form</Button>
            </Col>
        </form>
            <Link to='/viewContainer'  >
            <Button>See List</Button>
            </Link>
            {submit?(<div className='green'><h2>Congrats</h2></div>):null}

        </React.Fragment>
    )
}


export default AddUser