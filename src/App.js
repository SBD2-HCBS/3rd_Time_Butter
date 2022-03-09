import './App.css';
import AddUser from "./components/AddUser";
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'reactstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
const [style, setStyle] = useState(true)
    const changeStyle=()=>{
    console.log('testing you clicked button')
    setStyle(!style)
    }
  return (
      <div className="App">
       <Link to='/addUser'>
        <Button color='primary' >Enter App</Button>
       </Link>
      </div>
  );
}

export default App;
