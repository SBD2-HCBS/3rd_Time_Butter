import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {addPerson} from'../ducks/reducer'
 import {dispatchInfo} from "../ducks/actions";
import '../App.css';
import {Link} from "react-router-dom";

const AddUser=(props)=>{
    const statePerson = useSelector(state=>state.person.id);
    const [submit,setSubmit] = useState(false)
    const dispatch = useDispatch()

    const [firstName,setFirstName] = useState(''),
        [lastName,setLastName] = useState(''),
        [age,setAge] = useState(''),
        [hobbies,setHobbies] = useState(''),
        [id,setID] = useState(),
        [person,setPerson] = useState({
            firstName,
            lastName,
            age,
            hobbies
        }),
        [isMounted,setIsMounted] = useState(false);

    const fixStr=(str)=>{
        let firstLetter = str.substring(0,1).toUpperCase() + str.substring(1).toLowerCase()
        if(firstLetter.length > 50) {
            window.alert(`Max length is 50 characters; will only save the first 50 characters + :${firstLetter}`)
           firstLetter = firstLetter.slice(49)
           // return firstLetter.replace(/\s/g,"")
        }
        return firstLetter.replace(/\s/g,"_")
    },
        fixAge=(age)=>{
        if(age>110) {
            window.alert(`Max age is 110 you put ${age} resetting to max age`)
            age = 110
        }
        return age
        }



    const addNewPerson = async() => {
        await setID(statePerson)
       await setPerson({
          id:id,
            firstName: fixStr(firstName),
            lastName: fixStr(lastName),
            age: fixAge(age),
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
        return async()=> await setIsMounted(false)

    },[person])



    const handleFirstNameChange=(e)=>{
        e.preventDefault();
     // const {firstName, lastName, age, hobbies} = e.target;
        setFirstName(e.target.value)


    },
        handleLastNameChange=(e)=>{
        e.preventDefault();
        setLastName(e.target.value)
        },
        handleAgeChange=(e)=>{
        e.preventDefault();
        setAge(e.target.value)
    },
        handleHobbiesChange=(e)=>{
        e.preventDefault();
        setHobbies(e.target.value)
        }


    const handleSubmit = async(e) => {
        e.preventDefault();
        await setIsMounted(true)

       await addNewPerson()
        setSubmit(true);
             addPerson(person)

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
                onChange={handleFirstNameChange}
                required
                value={firstName}

            />
            <input
                type='text'
                name={lastName}
                placeholder="last Name"
                onChange={handleLastNameChange}
                required
                value={lastName}
            />
            <input
                type={'number'}
                name={age}
                placeholder="age"
                onChange={handleAgeChange}
                required
                value={age}
            />
            <input
                type={'text'}
                name={hobbies}
                placeholder="Hobbies"
                onChange={handleHobbiesChange}
                required
                value={hobbies}
            />
    </div>

            <button >Submit Form</button>
        </form>
            <Link to='/viewContainer'  >
            <button>See List</button>
            </Link>
            {submit?(<div className='green'><h2>You Have Successfully added a Person!</h2></div>):null}
        </div>
    )
}


export default AddUser