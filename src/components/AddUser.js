import React, {useState, useEffect} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {addPerson} from'../ducks/reducer'
import ViewContainer from './ViewContainer'

const AddUser=(props)=>{
    const statePerson = useSelector(state=>state.person);

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
        return()=>setLastName(''),setFirstName(''),setAge(''),setHobbies('')


    },[person])

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewPerson()
        setTimeout(()=>addPerson(person),100)
    }
    return(
        <React.Fragment>
        <form onSubmit={handleSubmit}>
            <title><h2>Hello</h2></title>
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
            <button>Submit Hello</button>

        </form>
            <ViewContainer   />
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