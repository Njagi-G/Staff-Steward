import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddDepartment() {
    const [department, setDepartment] = useState()
    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:3000/auth/add-department', {department})
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/department')
            } else {
                alert(result.data.Error)
            }
        })
        .catch(err => console.log(err))

    }
  return (
    <div className='d-flex justify-content-center align-items-center h-75'>
      <div className='p-3 rounded w-25 border'>
        <h2>Add Department</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="department"><strong>Department</strong></label>
            <input 
            className="form-control rounded-0" 
            type="text" name="department" 
            placeholder="Enter Department"
            onChange={(e) => setDepartment(e.target.value)} />
          </div>
          <button className='btn btn-success w-100 rounded-0 mb-2'>Add Department</button>
        </form>
      </div>
      
    </div>
  )
}

export default AddDepartment;
