import React, {useState, useEffect, useRef} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {addPerson} from'../ducks/reducer'
 import {dispatchInfo} from "../ducks/actions";
import '../App.css';
import {Link} from "react-router-dom";


let san = "secondary";
const AddUser=(props)=>{
    const statePerson = useSelector(state=>state.person);
    const [submit,setSubmit] = useState(false)
    const dispatch = useDispatch()

    const [firstName,setFirstName] = useState(''),
        [lastName,setLastName] = useState(''),
        [age,setAge] = useState(''),
        [hobbies,setHobbies] = useState(''),
        [id,setID] = useState(0),
        [person,setPerson] = useState({
            id,
            firstName,
            lastName,
            age,
            hobbies
        }),
        [isMounted,setIsMounted] = useState(false);

    const addNewPerson = async() => {
        await setID(id=>id++)
        setPerson({
          id:id,
            firstName: firstName,
            lastName: lastName,
            age: age,
            hobbies:hobbies
        })

    }


    useEffect(()=>{

if(isMounted) {
    dispatch(dispatchInfo("ADD_PERSON",person))
    setTimeout(() => {
        setSubmit(false)
    }, 1500)
}
        return async()=> {
          await setIsMounted(false)

        }
    },[person])


    const handleSubmit = async(e) => {
        e.preventDefault();
        await setIsMounted(true)
        addNewPerson()
        setSubmit(true);

        setTimeout(()=>addPerson(person),100)
        setFirstName('')
        setLastName('')
        setAge('')
        setHobbies('')

    }



    return(
        <div className="App-header outSide " >
        <form onSubmit={handleSubmit}>
                    <span id='spans' ><h2>Fill Out Form</h2></span>

    <div id='form' >
            <input
                type='text'
                name={firstName}
                placeholder="First Name"
                onChange={(e)=>setFirstName(e.target.value)}
                required

                value={firstName}

            />
            <input
                type='text'
                name={lastName}
                placeholder="last Name"
                onChange={(e)=>setLastName(e.target.value)}
                required
                value={lastName}
            />
            <input
                type={'number'}
                name={age}
                placeholder="age"
                onChange={(e)=>setAge(e.target.value)}
                required
                value={age}
            />
            <input
                type={'text'}
                name={hobbies}
                placeholder="Hobbies"
                onChange={(e)=>setHobbies(e.target.value)}
                required
                value={hobbies}
            />
    </div>

            <button variant={san}>Submit Form</button>
        </form>
            <Link to='/viewContainer'  >
            <button>See List</button>
            </Link>
            {submit?(<div className='green'><h2>You Have Successfully added a Person!</h2></div>):null}
        </div>
    )
}


export default AddUser