import React, {useState} from 'react';


function Person({person, index}){
    return <div className = "Person">
           {person.name}
        <br />
       <div className="Stats">
        Email: {person.email};
           </div>
        <br />
         </div>

}

export default Person;