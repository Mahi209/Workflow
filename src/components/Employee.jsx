import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import '../css/employee.css';
import axios from "axios";
import AddEmployeeForm from "./Addemployee"; 

const Employee = () => {
  const [showForm, setShowForm] = useState(false);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/employees")
      .then(res => setEmployees(res.data))
      .catch(err => console.error("Error fetching employees:", err));
  }, []);

  return (
    <div id="emp-outer">
      <Navbar />
      <div id="emp-o">
        <div id="employees">
          <h1 id="emp-txt">Employees</h1>
          <div id="emp-elements">
            <button id="add-emp" onClick={() => setShowForm(true)}>Add an employee</button>
            <input type="search" placeholder="Search Employees" />
            <select id="sort-btn" name="sortby">
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
            <button id="export-btn">Export</button>
          </div>
        </div>

        <div id="employee-card">
          <div className="employee-row header">
            <span>Name</span>
            <span>Email</span>
            <span>Role</span>
            <span>Department</span>
            <span>Status</span>
            <span>Actions</span>
          </div>

          {employees.map((emp, idx) => (
            <div className="employee-row" key={idx}>
              <span>{emp.name}</span>
              <span>{emp.email}</span>
              <span>{emp.role}</span>
              <span>{emp.department}</span>
              <span>
                <span className={`status ${emp.status?.toLowerCase()}`}>{emp.status}</span>
              </span>
              <span className="actions">
                <button className="edit-btn">✏️</button>
                <button className="delete-btn">🗑️</button>
              </span>
            </div>
          ))}
        </div>
      </div>

      {showForm && <AddEmployeeForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default Employee;
