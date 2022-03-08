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
    console.log(person)
    return(
        <div>
            <h3>
            {person.map((person, index) => (

                <li key={index===index?index+=1:index}>`${person.firstName } + ', '${person.lastName} `
                <button>Add</button>
                <button>Delete</button>
                    <button>View Person</button>

                </li>
            ))}
            </h3>
        </div>
    )
}
export default ViewContainer