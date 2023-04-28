import React from 'react';

const studentForm = (props) => {
    return (
        <form id="student">
            <h2>Login</h2>
            <label>Username:
                <input 
                type="text" 
                id="username" 
                name="username"/>
            </label>

            <label>Password:
                <input 
                type="password" 
                id="pwd" 
                name="pwd"/>
            </label>
            
            <input type="submit" value="Submit"></input>
        </form>
    )
}