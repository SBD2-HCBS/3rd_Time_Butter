const initialState={
    person:[],
    id:0
}


const ADD_PERSON='ADD_PERSON',
    DELETE_PERSON='DELETE_PERSON',
    VIEW_PERSON='VIEW_PERSON',
    INITIALIZED="INITIALIZED"


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
    let firstLetter = str.length>0?str.substring(0,1).toUpperCase() + str.substring(1).toLowerCase():''
if(firstLetter !== '') {
    return firstLetter.replace(/\s/g, "")
}else{
    return ''
}
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

const replaceItemsById =async(newArray)=>{
    let newArray33= await JSON.parse(JSON.stringify(newArray))
    let originalArray = await JSON.parse(JSON.stringify(initialState.person))
    // const id = newArray33.id
    console.log(initialState )
    console.log(newArray33,'33')
    if(originalArray.length===0){
      addPerson(newArray33)
    }
    const newItems= originalArray.findIndex(p=>p.id===newArray33.id)
    console.log(newItems)

    let rest = await originalArray.slice(0,newItems)
    rest.push(newArray)

    console.log(rest,'rest')
    //console.log(newObject)
    return rest

}
const filtered = (id,arr)=>{
    let clone = JSON.parse(JSON.stringify(arr))
    let newArray;
    //clone.splice(id,1);
 if (id!==-1)  newArray=clone.filter((item,index)=>item.id!==id)

    return  newArray;
}

  const reducer = (state = initialState, action) => {
        switch (action.type) {
            case 'INITIALIZED':
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
            case 'UPDATE_PERSON':
                let answer = replaceItemsById(action.payload)
                console.log(answer)
                return{
                    ...state,
                    person:[answer]
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