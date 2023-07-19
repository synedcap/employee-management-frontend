import React, { useState } from 'react';
import { createEmployee } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';


const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const navigator = useNavigate();

    const saveEmployee = (e) => {
        e.preventDefault();
        const employee = {firstName,lastName,email}

        createEmployee(employee).then((response) => {
            navigator('/employees')
        })
    }
  
    return (
        <div className='container'>
            <br /> <br />
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h2 className='text-center'>Add Employee</h2>
                    <div className='card-body'>
                        <form action="">
                            <div className="form-group mb-2">
                                <label htmlFor="" className='form-label'> First Name:</label>
                                <input 
                                type="text" 
                                placeholder='Enter Employee First Name'
                                name='firstname' 
                                
                                className='form-control'
                                onChange={(e) =>setFirstName(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="" className='form-label'> Last Name:</label>
                                <input 
                                type="text" 
                                placeholder='Enter Employee Last Name'
                                name='lastnane' 
                               
                                className='form-control'
                                onChange={(e) =>setLastName(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="" className='form-label'> Email:</label>
                                <input 
                                type="text" 
                                placeholder='Enter Employee email'
                                name='email' 
                               
                                className='form-control'
                                onChange={(e) =>setEmail(e.target.value)}
                                />
                            </div>
                            <button className='btn btn-success' onClick={saveEmployee}>submit</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default EmployeeComponent;