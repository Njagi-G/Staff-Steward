import React from 'react'

function AddEmployee() {
  return (
    <div className='d-flex justify-content-center align-items-center h-75'>
      <div className='p-3 rounded w-25 border'>
        <h2>Add Employee</h2>
        <form>
          <div className='mb-3'>
            <label htmlFor="department"><strong>Employee</strong></label>
            <input 
            className="form-control rounded-0" 
            type="text" name="employee" 
            placeholder="Enter Employee"
            />
          </div>
          <button className='btn btn-success w-100 rounded-0 mb-2'>Add Department</button>
        </form>
      </div>
      
    </div>
  )
}

export default AddEmployee;
