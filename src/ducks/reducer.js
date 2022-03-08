const initialState={
    person:[]
}
let id = 0;
const ADD_PERSON='ADD_PERSON',
    DELETE_PERSON='DELETE_PERSON',
    VIEW_PERSON='VIEW_PERSON';


export function addPerson(person) {
    return {
        type: ADD_PERSON,
        person
    }
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
                return {
                    ...state,
                    person: state.person.filter(person => person.id !== action.payload)
                }
            case 'VIEW_PERSON':
                let found = state.person.length<2?null:state.person.find(person => person.id === action.payload)
                console.log(found,'view person')
                return{
                    found
                }
            default:
                return {
                    ...state
                }
        }
    }

    export default reducer;