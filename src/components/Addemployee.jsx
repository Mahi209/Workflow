import React, { useState } from 'react';
import axios from 'axios';
import '../css/AddEmployee.css';
import CharacterImg from '../images/Group.svg';

const AddEmployeeForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    department: '',
    status: 'Active' // Default status
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/addemployee', formData);
      console.log("Employee added:", response.data);
      onClose(); 
      window.location.reload();
    } catch (err) {
      console.error("Error adding employee:", err);
      alert("Failed to add employee. Check console for details.");
    }
  };

  return (
    <div className="form-overlay">
      <div className="form-wrapper">
        <div className="form-left">
          <img src={CharacterImg} alt="Character" />
        </div>
        <div className="form-right">
          <h2>Add New Employee</h2>
          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
            />

            <div className="form-row">
              <div>
                <label>Role</label>
                <select name="role" onChange={handleChange} value={formData.role} required>
                  <option value="">Select role</option>
                  <option value="Admin">Admin</option>
                  <option value="Intern">Intern</option>
                  <option value="User">User</option>
                </select>
              </div>

              <div>
                <label>Department</label>
                <select name="department" onChange={handleChange} value={formData.department} required>
                  <option value="">Select department</option>
                  <option value="Engineering">Engineering</option>
                  <option value="HR">HR</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Operations">Operations</option>
                  <option value="IT">IT</option>
                  <option value="HSEQ">HSEQ</option>
                  <option value="Maintenance">Maintenance</option>
                </select>
              </div>
            </div>

            <div className="form-buttons">
              <button type="submit" className="btn-primary">Add Employee</button>
              <button type="button" className="btn-secondary" onClick={onClose}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeForm;
