import React, { useState } from 'react';

const UserAuthentication = () => {
    // State variables for storing input values
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle login
    const handleLogin = () => {
        // Implement login logic here (e.g., send login request to backend)
        console.log('Logging in with username:', username, 'and password:', password);
    };

    // Function to handle registration
    const handleRegistration = () => {
        // Implement registration logic here (e.g., send registration request to backend)
        console.log('Registering with username:', username, 'and password:', password);
    };

    // Function to handle logout
    const handleLogout = () => {
        // Implement logout logic here (e.g., clear authentication tokens)
        console.log('Logging out');
    };

    return (
        <div>
            {/* Login Form */}
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username or Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>

            {/* Registration Form */}
            <h2>Register</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegistration}>Register</button>

            {/* Logout Button */}
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default UserAuthentication;
