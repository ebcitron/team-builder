import React, {useState} from 'react';

function Form(props) {
const [nameState, setNameState] = useState();
const handleChange = e => {
    setNameState({ [e.target.name]:e.target.value});
};
return(
    <div className="Form">
        {console.log("Form nameState", nameState)}
        <form  onSubmit = {(e)=>props.handleSubmit(e, nameState)} >
            <label>
                Name: 
                <input type = "text" onChange={e=>handleChange(e)} />
            </label>
{/*             
            <label>
                Email: 
                <input type = "text" onChange={e=>handleChange(e)} />
            </label>
            
            <label>
                Role: 
                <input type = "text" onChange={e=> handleChange(e)} />
            </label> */}
            <button> Add A Team Member</button>
        </form>
    </div>
)
}

export default Form;