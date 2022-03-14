import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Link  } from "react-router-dom";
import {deleteFunction} from "../ducks/actions";

const ViewContainer = () => {
    const [people, runningThruPeople] = React.useState([])
    const dispatch = useDispatch()
    const person = useSelector(state=>state.person);
const [isMounted,setIsMounted] = useState(true)
const id = useSelector(state=>state.person.id)

useEffect(()=>{

  if(isMounted) {
      runningThruPeople(person)

  }
    return async()=> {
      runningThruPeople([])
       await setIsMounted(false);
    }

},[person])

    const deletePerson = (id) =>{

        if (person.length >0) {
            dispatch( deleteFunction(id))
        }else {
            window.alert('You cannot delete an empty list')
        }
    }


    return(
        <div  className="App-header outSide ">
           <h3>
                {people.length !== 0?people.map((person={}, index) => (

                    <li key={index === index ? index += 1 : index}>Full Name: {person.firstName} {person.lastName}
                        <p>AGE: {person.age}</p>
                        <p>{person.hobbies}</p>

                        <button onClick={()=>deletePerson(person.id)} >Delete</button>

                        <Link to='/viewSingleUser' state={{from:index}}>
                        <button >View Person</button>

                        </Link>

                    </li>
                )):<div><b>Just Waiting On you to add  to the list</b></div>}
            </h3>
            {people.id === 0 || people.length === 0 ?
                <Link to='/addUser'>
                    <button>Return to Form</button>
                </Link>
                : null}
        </div>
    )
}
export default ViewContainer