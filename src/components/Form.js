import React from 'react';

function Form(props) {
    
    function handleSubmit(event) {
        event.preventDefault();
        let input = document.querySelector('input');
        let name = input.value;
        props.addUserName(name);
    }
    
    return (
        <form onSubmit={handleSubmit} className="user-form">
            <input
                type="text"
                placeholder="Enter name"
                id="new-user"
            /><br/>
            <button type="submit">Dodaj użytkownika</button>
        </form>
    );
}

export default Form;