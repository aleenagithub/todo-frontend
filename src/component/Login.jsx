import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        console.log('Login successful', data);
        // Redirect to list page after successful login
        navigate('/list');
      } else {
        console.log('Login failed', data);
        alert(data.message); // Display error message from backend
      }
    } catch (error) {
      console.error('Error logging in', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div style={{ backgroundColor: 'lightblue', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="container">
        <h1 className="text-center mb-4">User Login</h1>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="card p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    size={25}
                    style={inputStyle}
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <br></br>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    size={25}
                    style={inputStyle}
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <br></br>
                <center><button type="submit" className="btn btn-primary w-100 mb-3" style={buttonStyle}>Login</button></center>
              </form>
              <div className="text-center">
                <center><Link to="/signup">Register New User</Link></center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  borderRadius: '8px',
  padding: '10px 15px',
  border: '1px solid #ced4da',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

const buttonStyle = {
  backgroundColor: '#28a745',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  padding: '10px 20px',
  cursor: 'pointer',
  fontSize: '16px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  transition: 'background-color 0.3s',
};

export default Login;
