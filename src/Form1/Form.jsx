import React, { useRef } from 'react';

const Form = () => {
    
    const name = useRef();
    const age = useRef();
    const submit=(e)=>{
        e.preventDefault()
        const name2 =name.current.value;
        const age2= age.current.value;
        const user = {name2, age2};
        console.log(user);
    }
    
    
    return (
        <form onSubmit={submit}>
            <div> <label>Name: <input type="text" ref={name} /> </label> </div>
            <div> <label>Age: <input type="number" ref={age}/> </label> </div>
            <button>save</button>
        </form>
    );
};

export default Form;