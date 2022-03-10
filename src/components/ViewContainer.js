import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Link  } from "react-router-dom";
import {dispatchInfo} from "../ducks/actions";

const ViewContainer = () => {
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
      runningThruPeople([])
       isMounted=false;
    }

},[person])

const viewPerson=(id)=>{
    dispatch(dispatchInfo("VIEW_PERSON",id))
}

    const deletePerson = (id) =>{
        console.log(id)
        if (person.length >0) {
            dispatch( dispatchInfo('DELETE_PERSON',id))
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

                        <button onClick={()=>deletePerson(index)} >Delete</button>

                        <Link to='/viewSingleUser' state={{from:person}}>
                        <button onClick={() => viewPerson(index)}>View Person</button>

                        </Link>

                    </li>
                )):null}
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