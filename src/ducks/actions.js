


 export const dispatchInfo=(type={},payload={})=>{
    return {type, payload}
 }

 export const deleteFunction=(id)=>({
     type:"DELETE_PERSON",
     payload:id
 })

