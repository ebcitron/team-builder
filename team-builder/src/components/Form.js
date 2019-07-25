import React, { useState } from 'react';

function Form({ addPerson }) {
    const [value, setValue] = useState('');


    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addPerson(value);
        setValue('');
        { console.log("Form nameState", value) }
    }
    return (
        <div className="Form">
            <form onSubmit={handleSubmit} >
                <label>
                    Name:
                <input type="text" value={value} onChange={e => setValue(e.target.value)} />
                </label>
                <button> Add A Team Member</button>
            </form>
        </div>
    )
    {/*             
    <label>
    Email: 
    <input type = "text" onChange={e=>handleChange(e)} />
    </label>
    
    <label>
    Role: 
    <input type = "text" onChange={e=> handleChange(e)} />
</label> */}

}

export default Form;