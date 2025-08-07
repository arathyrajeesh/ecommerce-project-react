import React from 'react'
import { useState } from 'react';
function LoginForm() {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const handleSubmit = (event) => {
            event.preventDefault();
            console.log('Login attempt:', { email, password });
        };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input type = "email"  
                id = "email" 
                // value={email}
                onChange = {() => { }} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password"
                // value = {password} 
                onChange={() => { }} />
            </div>
            <button type="submit">Login</button>
        </form>
    )
}
export default LoginForm
