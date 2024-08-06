
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegisterData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });

      const data = await response.json();
      if (response.ok) {
        // Clear form data
        setRegisterData({
          first_name: '',
          last_name: '',
          email: '',
          password: ''
        });
        navigate('/');
      } else {
        console.error('Registration failed:', data.message);
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="registration-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input 
            type="text" 
            id="first_name" 
            name="first_name" 
            value={registerData.first_name} 
            onChange={handleChange} 
            placeholder="First Name" 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name</label>
          <input 
            type="text" 
            id="last_name" 
            name="last_name" 
            value={registerData.last_name} 
            onChange={handleChange} 
            placeholder="Last Name" 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={registerData.email} 
            onChange={handleChange} 
            placeholder="Email" 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={registerData.password} 
            onChange={handleChange} 
            placeholder="Password" 
            required 
          />
        </div>
        <button type="submit">Register</button>
      </form>

      <div className="login-prompt">
        <p>Already have an account?</p> 
        <button onClick={() => navigate('/login')}>Log In</button>
      </div>
    </div>
  );
};

export default RegistrationPage;
