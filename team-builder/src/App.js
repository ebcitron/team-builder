import React, {useState} from 'react';
import Form from './components/Form';
import Data, { data } from './data';
import Person from './components/Person';
import './App.css';

function App() {
  const [list, setList] = useState(data);

//   const handleSubmit = (e, nameState2) =>{
//     e.preventDefault();
//     setState({...state + nameState2})
  
//     console.log("App handleSubmit state: ", state);
// }

const addPerson = name => {
const newPerson = [...list, {name}];
setList(newPerson);

}

  return (
    <div className="App">
      <div className="list">
        <p> "State"</p>
        {list.map((person, index)=> (
          <Person key={index} index={index} person={person} />

        ))}        
      </div>
      <div className= "form">
       <Form  addPerson = {addPerson}/> 
      </div>
    
    </div>
  );
}

export default App;
