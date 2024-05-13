import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditEmployee() {
    const { id } = useParams()

    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        salary: "",
        address: "",
        department_id: "",
    });

    const [department, setDepartment] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3000/auth/department')
            .then(result => {
                if (result.data.Status) {
                    setDepartment(result.data.Result)
                } else {
                    alert(result.data.Error)
                }
            })
            .catch(err => console.log(err))

        axios.get('http://localhost:3000/auth/employee/' + id)
            .then(result => {
                setEmployee({
                    ...employee,
                    name: result.data.Result[0].name,
                    email: result.data.Result[0].email,
                    address: result.data.Result[0].address,
                    salary: result.data.Result[0].salary,
                    department_id: result.data.Result[0].department_id,
                })
            })
            .catch(err => console.log(err))
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        axios.put('http://localhost:3000/auth/edit-employee/' + id, employee)
            .then(result => {
                if (result.data.Status) {
                    navigate('/dashboard/employee')
                } else {
                    alert(result.data.Error)
                }

            })
            .catch(err => console.log(err))
    }

    return (
        <div className="d-flex justify-content-center align-items-center mt-3">
            <div className="p-3 rounded w-50 border">
                <h2 className="text-center"><strong>Edit Employee</strong></h2>
                <form className="row g-1" onSubmit={handleSubmit}>
                    <div className="col-12">
                        <label for="inputName" className="form-label">
                            <strong>Name</strong>
                        </label>
                        <input
                            className="form-control rounded-0"
                            id="inputName"
                            type="text"
                            placeholder="Enter Employee Name"
                            value={employee.name}
                            onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
                        />
                    </div>
                    <div className="col-12">
                        <label for="inputEmail14" className="form-label">
                            <strong>Email</strong></label>
                        <input
                            type="email"
                            className="form-control rounded-0"
                            id="inputEmail14"
                            placeholder="Enter Email Address"
                            autoComplete="off"
                            value={employee.email}
                            onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
                        />
                    </div>
                    <div className='col-12'>
                        <label for="inputSalary" className="form-label"><strong>Salary</strong></label>
                        <input
                            type="text"
                            className="form-control rounded-0"
                            id="inputSalary"
                            placeholder="Enter Salary"
                            autoComplete="off"
                            value={employee.salary}
                            onChange={(e) => setEmployee({ ...employee, salary: e.target.value })}
                        />
                    </div>
                    <div className="col-12">
                        <label for="inputAddress" className="form-label">
                            <strong>Address</strong>
                        </label>
                        <input
                            type="text"
                            className="form-control rounded-0"
                            id="inputAddress"
                            placeholder="Street/Estate, City"
                            autoComplete="off"
                            value={employee.address}
                            onChange={(e) => setEmployee({ ...employee, address: e.target.value })}
                        />
                    </div>
                    <div className="col-12">
                        <label for="department" className="form-label">
                            <strong>Select Department</strong>
                        </label>
                        <select
                            name="department"
                            id="department"
                            className="form-select"
                            onChange={(e) => setEmployee({ ...employee, department_id: e.target.value })}
                        >{department.map((d) => {
                            return <option value={d.id}>{d.name}</option>;
                        })}
                        </select>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary w-100">Edit Employee</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditEmployee;
