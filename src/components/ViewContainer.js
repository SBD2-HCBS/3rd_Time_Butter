import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Link  } from "react-router-dom";


const ViewContainer = (props) => {
    const [people, runningThruPeople] = React.useState([])
    const dispatch = useDispatch()
    const person = useSelector(state=>state.person);


    let isMounted=true;
useEffect(()=>{

  if(isMounted) {
      runningThruPeople(person)
      console.log(people)
  }
    return()=> {
       isMounted=false;
    }

},[person, people])


    const viewPerson = (id) => {
dispatch({
    type:'VIEW_PERSON',
    payload:id
})
    }

    const deletePerson = (id) => {
    dispatch({
        type:'DELETE_PERSON',
        payload:id
    })
    }

    return(
        <div>
           <h3>
                {people.map((person, index) => (

                    <li key={index === index ? index += 1 : index}>`${person.firstName} + ', '${person.lastName} <span>AGE: ${person.age}</span>
                        <p>${person.hobbies}</p>

                        <button onClick={()=>deletePerson(index)} >Delete</button>

                        <Link to='/viewSingleUser' state={{from:person}}>
                        <button onClick={() => viewPerson(index)}>View Person</button>
                        </Link>

                    </li>
                ))}
            </h3>

        </div>
    )
}
export default ViewContainer