const initialState={
    person:[],
    id:0
}


const ADD_PERSON='ADD_PERSON',
    DELETE_PERSON='DELETE_PERSON',
    VIEW_PERSON='VIEW_PERSON',
    INITALIZED='INITALIZED'


export function addPerson(person) {
    return {
        type: ADD_PERSON,
        person
    }
}

export function viewPerson(id){
    return{
        type:VIEW_PERSON,
        id
    }
}
const fixStr=(str)=>{
    let firstLetter = str.substring(0,1).toUpperCase() + str.substring(1).toLowerCase()

    return firstLetter.replace(/\s/g,"")
}
const addPersonObj=(person)=>{
    let clone = JSON.parse(JSON.stringify(person))
    clone.id=initialState.id
    clone.firstName = fixStr(person.firstName)
    clone.lastName = fixStr(person.lastName)
    return clone
}
const founder = (id, arr)=>{
    let newArray=[];
    newArray= arr.find(item=>item.id===id)
    return newArray
}

const filtered = (id,arr)=>{
    let clone = JSON.parse(JSON.stringify(arr))
    // let newArray= arr.filter(item=>item.id!==id)
 if (id>-1) clone.splice(id,1);

    return  clone;
}

  const reducer = (state = initialState, action) => {
        switch (action.type) {
            case 'INITALIZED':
                return{
                    ...state
                }
            case 'ADD_PERSON':
                let people = addPersonObj(action.payload)
                initialState.id=++initialState.id
                return {
                    ...state,
                    id:initialState.id,
                    person: [...state.person, people]
                }
            case 'DELETE_PERSON':
                let filteredList = filtered(action.payload,state.person)
                return {

                    person:[...filteredList]
                }

            case 'VIEW_PERSON':
               // let found = state.person.length<2?null:state.person.find(person => person.id === action.payload)
                    let found = founder(action.payload,state.person)
                // let found = state.find(person => person.id === action.payload)
                return {
                    person:[found]
                }
            default:
                return {
                    ...state
                }
        }
    }

    export default reducer;