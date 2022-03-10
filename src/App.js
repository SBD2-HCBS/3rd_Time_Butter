import './App.css';

import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
      <div className="App">
       <Link to='/addUser'>
        <Button color='primary' >Enter App</Button>
       </Link>
      </div>
  );
}

export default App;
