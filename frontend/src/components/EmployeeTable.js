import React from 'react';
import { deleteEmployee } from '../services/employeeService';

const EmployeeTable = ({ employees, setCurrentEmployee, refreshEmployees }) => {
  const handleDelete = async (id) => {
    await deleteEmployee(id);
    refreshEmployees();
  };

  return (
    <table className="employee-table">
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
            <td className="actions">
              <button className="edit" onClick={() => setCurrentEmployee(emp)}>
                <i className="fas fa-edit"></i> Edit
              </button>
              <button className="delete" onClick={() => handleDelete(emp.id)}>
                <i className="fas fa-trash-alt"></i> Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
