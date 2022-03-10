


 export const dispatchInfo=(type={},payload={})=>{
    return {type, payload}
 }

 export const deleteFunction=(id)=>({
     type:"DELETE_PERSON",
     payload:id
 })

export const viewPersonFunction=(id)=>({
    type:"VIEW_PERSON",
    payload:id
})