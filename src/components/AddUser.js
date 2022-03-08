import React, {useState, useEffect} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {addPerson} from'../ducks/reducer'
import ViewContainer from './ViewContainer'
import {Button} from 'reactstrap';
import '../App.css';

let id=0
let san;
const AddUser=(props)=>{
    const statePerson = useSelector(state=>state.person);
    const [submit,setSubmit] = useState(false)
    const dispatch = useDispatch()

    const [firstName,setFirstName] = useState(''),
        [lastName,setLastName] = useState(''),
        [age,setAge] = useState(''),
        [hobbies,setHobbies] = useState(''),
        [person,setPerson] = useState({
            firstName,
            lastName,
            age,
            hobbies
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
    useEffect(()=>{

        console.log(props.person + "hello")

        dispatch({
            type:'ADD_PERSON',
            payload:person
        })
       setSubmit(true);
        setTimeout(()=>{setSubmit(false)},1500)

        return()=>setLastName(''),setFirstName(''),setAge(''),setHobbies(''),san=''


    },[person])

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewPerson()

        setTimeout(()=>addPerson(person),100)
    }
    console.log(props.style)
    return(
        <React.Fragment>
        <form onSubmit={handleSubmit}>
            <span><h2>Hello</h2></span>
            <input
                type='text'
                name={firstName}
                placeholder="First Name"
                onChange={(e)=>setFirstName(e.target.value)}
            />
            <input
                type='text'
                name={lastName}
                placeholder="last Name"
                onChange={(e)=>setLastName(e.target.value)}
            />
            <input
                type={'number'}
                name={age}
                placeholder="age"
                onChange={(e)=>setAge(e.target.value)}
            />
            <input
                type={'text'}
                name={hobbies}
                placeholder="Hobbies"
                onChange={(e)=>setHobbies(e.target.value)}
            />
            <Button color={san}>Submit Hello</Button>

        </form>
            <ViewContainer />
            {submit?(<div className='green'><h2>Congrats</h2></div>):null}
        </React.Fragment>
    )
}
const mapDispatchToProps = dispatch => {
    return{addPerson:person => dispatch(addPerson(person))}
}
const mapStateToProps=(state) => ({
    person:state.person
})

export default connect(mapStateToProps,mapDispatchToProps)(AddUser)