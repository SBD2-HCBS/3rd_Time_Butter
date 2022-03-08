import './App.css';
import AddUser from "./components/AddUser";
import React from 'react'


function Test(props){
  console.log(props)
  return(
      <div>
        Hello Person
      </div>
  )
}

function App() {
  return (
      <div className="App">
        <AddUser />
      </div>
  );
}

export default App;
