package com.example.entity;

import jakarta.persistence.*;

@Entity  // This marks the class as a database entity (a table)
@Table(name = "employees") // This gives the table a name in the database
public class Employee {

    @Id // Marks this field as the primary key (unique identifier)
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-increment the ID
    private Long id;

    @Column(name = "name", nullable = false) // Maps to a column named "name" in the database
    private String name;

    @Column(name = "department") // Maps to a column named "department"
    private String department;

    @Column(name = "salary")
    private Double salary;

    // Default constructor (required by JPA)
    public Employee() {
    }

    // Constructor with parameters
    public Employee(String name, String department, Double salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    // Getters and Setters (to access and modify fields)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public Double getSalary() {
        return salary;
    }

    public void setSalary(Double salary) {
        this.salary = salary;
    }

    // toString() method (optional, useful for debugging)
    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", department='" + department + '\'' +
                ", salary=" + salary +
                '}';
    }
}
