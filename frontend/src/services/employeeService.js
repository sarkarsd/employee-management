import axios from 'axios';

const API_URL = 'http://localhost:8080/employees';

// Fetch all employees
export const getAllEmployees = () => axios.get(API_URL);

// Add a new employee
export const addEmployee = (employee) => axios.post(API_URL, employee);

// Update an existing employee
export const updateEmployee = (id, employee) => axios.put(`${API_URL}/${id}`, employee);

// Delete an employee
export const deleteEmployee = (id) => axios.delete(`${API_URL}/${id}`);
