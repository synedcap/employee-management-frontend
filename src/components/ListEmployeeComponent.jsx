import React, { useEffect, useState } from 'react';
import { deleteEmployee, listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';



const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([]);

    const navigator = useNavigate();

    useEffect(() => {
       getAllEmployee();
    },[])

    const getAllEmployee = () => {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => { 
            console.error(error)
        })
    }

    const addNewEmployee = () => {
        navigator('/add-employee')
    }

    const updateEmployee = (id) => {
        navigator(`/edit-employee/${id}`)
    }

    const removeEmployee = (id) => {

        deleteEmployee(id).then((response) => {
            getAllEmployee();
        }).catch(error => { 
            console.error(error)
        })
       
    }

    return (
        <div className='container mt-4 mb-4'>
            <h2 className='text-center'>List of Employees</h2>

            <button className='btn btn-primary mb-2 mt-2' onClick={addNewEmployee}>Add Employee</button>

            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee First Name</th>
                        <th>Employee  Last Name</th>
                        <th>Employee Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        
                   employees.map(employee =>
                    <tr key={employee.id}>
                        <td >{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>
                            <button className='btn btn-warning' onClick={() => updateEmployee(employee.id)}>Update</button>
                            <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)} style={{marginLeft:'10px'}}
                            >Delete</button>
                        </td>
                       
                    </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ListEmployeeComponent;