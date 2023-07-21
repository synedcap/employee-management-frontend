import React, { useEffect, useState } from 'react';
import { deleteDepartment, listDepartment } from '../services/DepartmentService';
import { Link } from 'react-router-dom';

const ListDepartmentComponent = () => {

   const [departments,setDepartment] = useState()

   const getAllDepartment = () => {
        listDepartment().then((response) => {
            console.log(response)
            setDepartment(response.data)
        }).catch(error => {
            console.error(error)
        })
    }

   useEffect(() => {
    getAllDepartment()
   },[])

    const removeDepartment = (id) => {
        deleteDepartment(id).then((response) => {
            getAllDepartment()
        }).catch(error => {
            console.error(error)
        })
   } 


    return (
        <div className='container mt-4 mb-4'>
            <h2 className='text-center mt-4' >Departments list</h2>

            <Link to={"/add-departments"} className='btn btn-primary'> Add Department</Link>
            <table  className='table table-striped table-bordered mt-4'>
                <thead>
                    <tr>
                        <th>Department Name</th>
                        <th>Department Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    { departments?.map(department =>

                        <tr key={department.id} > 
                            <td>{department.departmentName}</td>
                            <td>{department.departmentDescription}</td>
                            <td>
                                <Link className='btn btn-warning' to={`/edit-departments/${department.id}`}>Update</Link>

                                 <button className='btn btn-danger' style={{marginLeft:'10px'}} onClick={() => removeDepartment(department.id)}>Delete</button> 
                            </td>
                        </tr>)
                   }
                </tbody>
            </table>
        </div>
    );
};

export default ListDepartmentComponent;