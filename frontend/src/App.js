import React, { useState, useEffect } from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeTable from './components/EmployeeTable';
import { getAllEmployees } from './services/employeeService';
import './App.css';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState(null);

  // Fetch all employees from the backend
  const fetchEmployees = async () => {
    try {
      const response = await getAllEmployees();
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  // Load employees on first render
  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="container">
      <h1>Employee Management System</h1>

      <EmployeeForm
        currentEmployee={currentEmployee}
        setCurrentEmployee={setCurrentEmployee}
        refreshEmployees={fetchEmployees}
      />

      <EmployeeTable
        employees={employees}
        setCurrentEmployee={setCurrentEmployee}
        refreshEmployees={fetchEmployees}
      />
    </div>
  );
};

export default App;
