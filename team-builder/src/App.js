import React, {useState} from 'react';
import Form from './components/Form';
import Data, { data } from './data';
import './App.css';

function App() {
  const [state, setState] = useState(data);

  const handleSubmit = (e, nameState2) =>{
    e.preventDefault();
    setState({...state + nameState2})
  
    console.log("App handleSubmit state: ", state);
}

  return (
    <div className="App">
      <div className="list">
        <p> "State"</p>
        {state.map((state, index))}        
      </div>
    
      <Form handleSubmit = {handleSubmit} />
    </div>
  );
}

export default App;
