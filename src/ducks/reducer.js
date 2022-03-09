const initialState={
    person:[]
}


const ADD_PERSON='ADD_PERSON',
    DELETE_PERSON='DELETE_PERSON',
    VIEW_PERSON='VIEW_PERSON';


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


const founder = (id, arr)=>{
    let newArray=[];
    newArray= arr.find(item=>item.id===id)
    return newArray
}

const filtered = (id,arr)=>{
    let newArray= arr.filter(item=>item.id!==id)
    return  newArray;
}

  const reducer = (state = initialState, action) => {
        console.log(state, "state")
        // const {type, payload} = action
        switch (action.type) {
            case 'ADD_PERSON':
                console.log('hit')
                return {
                    ...state,
                    person: [...state.person, action.payload]
                }
            case 'DELETE_PERSON':
                let filteredList = filtered(action.payload,state.person)
                console.log(filteredList)
                return {
                    ...state,
                    person:[...filteredList]
                }
                return {
                    ...state,
                    person: state.person.filter(person => person.id !== action.payload)
                }
            case 'VIEW_PERSON':
               // let found = state.person.length<2?null:state.person.find(person => person.id === action.payload)
                    let found = founder(action.payload,state.person)
                // let found = state.find(person => person.id === action.payload)
                console.log(found,'view person')
                return {
                    ...state,
                    person:[found]
                }
            default:
                return {
                    ...state
                }
        }
    }

    export default reducer;