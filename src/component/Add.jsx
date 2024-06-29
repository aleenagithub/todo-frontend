import React, { useState } from 'react';


const Add = () => {
  const [task, setTask] = useState('');
  const [status, setStatus] = useState('In Progress');
  const [startDate, setStartDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Task:', task);
    console.log('Status:', status);
    console.log('Start Date:', startDate);
    // You can add more logic here such as sending data to backend or updating state
  };

  return (
    
    <div style={{ backgroundColor: 'lightblue', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    
      <div className="container mt-5">
        <h1 className="text-center mb-4">Add Task</h1>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="task" className="form-label" style={labelStyle}>Task</label>
                <input
                  type="text"
                  className="form-control"
                  id="task"
                  style={inputStyle}
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  required
                />
              </div>
              <br></br>
              
              <div className="mb-3">
                <label htmlFor="startDate" className="form-label" style={labelStyle}> Date</label>
                <input type="date"
                  className="form-control"
                  style={inputStyle}
                  id="startDate"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div><br></br>
              <div className="mb-3">
                <label htmlFor="status" className="form-label" style={labelStyle}>Status</label>
                <select
                  className="form-select"
                  style={inputStyle}
                  id="status"
                
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <br></br>
              <center><button type="submit" className="btn btn-success w-100" style={buttonStyle}>Add</button></center>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const labelStyle = {
  padding: '10px',
  marginBottom: '10px', // Space between the label and the input box
  fontSize: '16px', // Font size for the label
  
};

const inputStyle = {
  borderRadius: '8px', // Rounded corners
  padding: '10px 15px', // Padding inside the input
  border: '1px solid #ced4da', // Border color
  width:'170px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Box shadow for a subtle depth
};

const buttonStyle = {
  backgroundColor: '#28a745', // Custom background color
  color: '#fff', // Text color
  border: 'none', // No border
  width:'160px',
  borderRadius: '8px', // Rounded corners
  padding: '10px 20px', // Padding
  cursor: 'pointer', // Pointer cursor on hover
  fontSize: '16px', // Font size
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Box shadow for a subtle depth
  transition: 'background-color 0.3s', // Smooth background-color transition
};
export default Add;
