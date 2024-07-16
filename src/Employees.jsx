// src/Employees.js
import React from 'react';
import Employee from './Employee';

const Employees = () => {
    const employees = [
        { name: 'Arthur Villareal', position: 'Manager', salary: 90000, status: 'Active' },
        { name: 'Nathaniel Ubas', position: 'Developer', salary: 80000, status: 'Active' },
        { name: 'Francis Martinez', position: 'Designer', salary: 70000, status: 'Active' },
        { name: 'Leo Nino Lariego', position: 'Developer', salary: 8000, status: 'Not Active' },
        { name: 'Angelo Rafayla', position: 'Designer', salary: 75000, status: 'Active' },
        { name: 'Aaron Canasa', position: 'Manager', salary: 95000, status: 'Not Active' },
        { name: 'Jay Mike alterado', position: 'Manager', salary: 95000, status: 'Not Active' },
        
    ];

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Employee Names</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => (
                        <Employee
                            key={index}
                            index={index + 1}
                            name={employee.name}
                            position={employee.position}
                            salary={employee.salary}
                            status={employee.status}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Employees;
