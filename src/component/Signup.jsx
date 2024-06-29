import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username || !email || !password || !phone) {
      alert('All fields are required');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/signup', {
        username,
        email,
        password,
        phone
      });
      setMessage(response.data.message);
      setUsername('');
      setEmail('');
      setPassword('');
      setPhone('');
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage('Error: Unable to register');
      }
    }
  };

  return (
    <div style={{ backgroundColor: 'lightblue', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container mt-5">
        <h1 className="text-center mb-6">Sign Up</h1>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="card p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input type="text" className="form-control" style={inputStyle} value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Name" />
                </div>
                <br></br>
                <div className="mb-3">
                  <input type="email" className="form-control" style={inputStyle} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                </div><br></br>
                <div className="mb-3">
                  <input type="password" className="form-control" style={inputStyle} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </div><br></br>
                <div className="mb-3">
                  <input type="tel" className="form-control" style={inputStyle} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" />
                </div><br></br>
                <center>
                  <button type="submit" className="btn btn-primary w-100 mb-3" style={buttonStyle}>Submit</button>
                </center>
                <br></br>
              </form>
              {message && <p className="text-center mt-3">{message}</p>}
              <div className="text-center">
               <center><Link to="/login">Back to Login</Link></center>
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
  width: '180px',
  border: 'none',
  borderRadius: '8px',
  padding: '10px 20px',
  cursor: 'pointer',
  fontSize: '16px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  transition: 'background-color 0.3s',
};

export default Signup;
