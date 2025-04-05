import React from 'react';
import { deleteEmployee } from '../services/employeeService';

const EmployeeTable = ({ employees, setCurrentEmployee, refreshEmployees }) => {
  const handleDelete = async (id) => {
    await deleteEmployee(id);
    refreshEmployees();
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Department</th>
          <th>Salary</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id}>
            <td>{emp.name}</td>
            <td>{emp.department}</td>
            <td>{emp.salary}</td>
            <td>
              <button onClick={() => setCurrentEmployee(emp)}>Edit</button>
              <button onClick={() => handleDelete(emp.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
