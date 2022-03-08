import './App.css';
import AddUser from "./components/AddUser";
import React, {useState} from 'react'


function App() {
const [style, setStyle] = useState(true)
    const changeStyle=()=>{
    console.log('testing you clicked button')
    setStyle(!style)
    }
  return (
      <div className="App">
        <AddUser changeStyle={changeStyle} style={style} />
      </div>
  );
}

export default App;
