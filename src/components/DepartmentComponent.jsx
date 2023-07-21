import React, { useEffect, useState } from 'react';
import { createDepartment, getDepartmentById, updateDepartment } from '../services/DepartmentService';
import { useNavigate, useParams } from 'react-router-dom';

const DepartmentComponent = () => {

    const [datas,setDatas] = useState()

    const navigator = useNavigate()

    const {id} = useParams()

    const getTitle = () => {
        if (id) {
            return  <h2 className='text-center'>Update Department</h2>
        } else {
            return <h2 className='text-center'>Add Department</h2>
        }
    }
    
    useEffect(() => {

        getDepartmentById(id).then((response) => {
            setDatas(response.data)
        }).catch

    },[])

    const saveOrUpdateDepartment = (e) => {
        e.preventDefault();

        if (id) {
            
            updateDepartment(id,datas).then((response) => {
                navigator('/departments')
            }).catch(error => {
                console.error(error)
            })
        } else {
            
            createDepartment(datas).then((response) => {
                navigator('/departments')
            }).catch(error => {
                console.error(error)
            })
        }
   
    }


    return (
        <div className='container'>
        <br /> <br />
        <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              
                <div className='card-body'>
                    { getTitle()}
                    <form action="">
                      
                        <div className="form-group mb-2">
                            <label htmlFor="" className='form-label'> Department Name:</label>
                            <input 
                            type="text" 
                            placeholder='Enter Department Name'
                            value={datas?.departmentName}
                            name='departmentName' 
                          className='form-control'
                            onChange={(e) => {
                               
                                setDatas({...datas,departmentName:e.target.value})
                            }}
                            />
                           
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="" className='form-label'> Department Description:</label>
                            <input 
                            type="text" 
                            placeholder='Enter Department Description'
                            name='departmentDescription' 
                            value={datas?.departmentDescription}
                          className='form-control'
                            onChange={(e) => {
                                setDatas({...datas,departmentDescription:e.target.value})
                            }}
                            />
                        </div>
                        <button className='btn btn-success' onClick={saveOrUpdateDepartment}> { id ? 'Update':'submit'}</button>
                    </form>
                </div>
            </div>
        </div>
        
    </div>
    );
};

export default DepartmentComponent;