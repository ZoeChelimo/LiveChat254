import React, { useState } from 'react';

function UserRegistration() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to register user with email and password
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8">
    <input 
        type="email" 
        value={email} 
        onChange={handleEmailChange} 
        placeholder="Email" 
        className="block w-full py-2 px-4 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
    />
    <input 
        type="password" 
        value={password} 
        onChange={handlePasswordChange} 
        placeholder="Password" 
        className="block w-full py-2 px-4 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
    />
    <button 
        type="submit" 
        className="block w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
    >
        Register
    </button>
</form>
    );
}

export default UserRegistration;