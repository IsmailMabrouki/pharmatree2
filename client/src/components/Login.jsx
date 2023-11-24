import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  // State to manage the form input values
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    // Perform your login logic here, such as making an API request to authenticate the user.
    // You should check the credentials and handle success and error cases.
    const { username, password } = formData;
    if (username === 'demo' && password === 'password') {
      // Simulate a successful login
      // Replace this with your actual API request for authentication
      // For now, we'll just redirect to the dashboard on success
      console.log("login accessed")
      navigate('/Dashboard');
    } else {
      // Handle login failure (show error message, etc.)
      alert('Invalid username or password');
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;

