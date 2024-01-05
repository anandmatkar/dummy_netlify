import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Add your authentication logic here
    // For simplicity, let's just check if both username and password are not empty
    if (username !== '' && password !== '') {
      setLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        {loggedIn ? (
          <>
            <p>Welcome, {username}!</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <p>Login</p>
            <form>
              <label>
                Username:
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <br />
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <br />
              <button type="button" onClick={handleLogin}>
                Login
              </button>
            </form>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
