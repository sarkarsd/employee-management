import React, { useState, useEffect } from 'react';
import { addEmployee, updateEmployee } from '../services/employeeService';

const EmployeeForm = ({ currentEmployee, setCurrentEmployee, refreshEmployees }) => {
  const [employee, setEmployee] = useState({ name: '', department: '', salary: '' });

  useEffect(() => {
    if (currentEmployee) {
      setEmployee(currentEmployee);
    }
  }, [currentEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (employee.id) {
      await updateEmployee(employee.id, employee);
    } else {
      await addEmployee(employee);
    }
    setEmployee({ name: '', department: '', salary: '' });
    setCurrentEmployee(null);
    refreshEmployees();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={employee.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Department:</label>
        <input type="text" name="department" value={employee.department} onChange={handleChange} required />
      </div>
      <div>
        <label>Salary:</label>
        <input type="number" name="salary" value={employee.salary} onChange={handleChange} required />
      </div>
      <button type="submit">{employee.id ? 'Update' : 'Add'} Employee</button>
    </form>
  );
};

export default EmployeeForm;
