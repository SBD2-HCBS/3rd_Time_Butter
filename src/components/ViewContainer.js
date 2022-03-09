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
            {people.length>1? <h3>
                {people.map((person, index) => (

                    <li key={index === index ? index += 1 : index}>`${person.firstName} + ', '${person.lastName} <span>AGE: ${person.age}</span>
                        <p>${person.hobbies}</p>

                        <button onClick={()=>deletePerson(index)} >Delete</button>
                        <button onClick={() => viewPerson(index)}>View Person</button>

                    </li>
                ))}
            </h3>:<div>No People Added Yet</div>}
        </div>
    )
}
export default ViewContainer