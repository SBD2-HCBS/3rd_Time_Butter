import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'


const ViewContainer = (props) => {
    const [people, runningThruPeople] = React.useState([])
    const dispatch = useDispatch()
    const person = useSelector(state=>state.person);

useEffect(()=>{
    runningThruPeople(person)
    console.log(people)

},[person])

    const deletePerson = (id) => {
dispatch({
    type:'VIEW_PERSON',
    payload:id
})
    }
    console.log(person)
    return(
        <div>
            <h3>
            {person.map((person, index) => (

                <li key={index===index?index+=1:index}>`${person.firstName } + ', '${person.lastName}  <span>AGE: ${person.age}</span>
                    <p>${person.hobbies}</p>`
                <button>Add</button>
                <button onClick={()=>deletePerson(index)}>Delete</button>
                    <button>View Person</button>

                </li>
            ))}
            </h3>
        </div>
    )
}
export default ViewContainer