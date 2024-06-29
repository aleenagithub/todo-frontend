import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const backgroundImage = {
    backgroundImage: 'url("https://thumbs.dreamstime.com/b/desk-notepad-to-do-list-pens-light-pink-background-top-view-desk-notepad-to-do-list-pens-light-pink-125175912.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' // Optional: Add text shadow for better readability
  };

  return (
    <div style={backgroundImage}>
      <h1 className="mb-4" style={textStyle}>Welcome ToDo App</h1>
      <div style={linkContainerStyle}></div>
      <h2><Link to="/Login" className="btn btn-primary btn-lg "  style={linkStyle}>Login</Link></h2>
      <h2><Link to="/Signup" className="btn btn-primary btn-lg " style={linkStyle}>Signup</Link></h2>
    </div>
  );
};

const linkContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px', // Space between the links
  
};

const textStyle = {
  padding: '10px',
  marginBottom: '10px', // Space between the label and the input box
  fontSize: '40px', // Font size for the label
  color: 'green'
};

const linkStyle = {
  backgroundColor: 'green', // Background color
  color: 'white', // Text color
  padding: '8px 16px', // Padding
  width:'200px',
  borderRadius: '8px', // Rounded corners
  textDecoration: 'none', // Remove underline
  fontSize: '20px', // Font size
  margin: '10px 5', // Margin
  display: 'inline-block', // Display as inline-block
  transition: 'background-color 0.3s', // Smooth transition for background color
};
export default Home;
