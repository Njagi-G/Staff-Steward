import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'


function AddEmployee() {
    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        password: "",
        salary: "",
        address: "",
        department_id: "",
        image: "",
    });

    const [department, setDepartment] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:3000/auth/department")
            .then((result) => {
                if (result.data.Status) {
                    setDepartment(result.data.Result);
                } else {
                    alert(result.data.Error);
                }
            })
            .catch((err) => console.log(err));
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', employee.name);
        formData.append('email', employee.email);
        formData.append('password', employee.password);
        formData.append('address', employee.address);
        formData.append('salary', employee.salary);
        formData.append('image', employee.image);
        formData.append('department_id', employee.department_id);


        axios.post("http://localhost:3000/auth/add-employee", formData)
            .then(result => {
                if(result.data.Status) {
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
                <h2 className="text-center"><strong>Add Employee</strong></h2>
                <form className="row g-1" onSubmit={handleSubmit}>
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
                    <div className="col-12 mb-3">
                        <label className="form-label" for="inputGroupFile01">
                            <strong>Select Image</strong>
                        </label>
                        <input
                            type="file"
                            className="form-control rounded-0"
                            id="inputGroupFile01"
                            name="image"
                            onChange={(e) => setEmployee({...employee, image: e.target.files[0]})}
                        />
                    </div>
                    <div className="col-12">
                        <label for="inputName" className="form-label">
                            <strong>Name</strong>
                        </label>
                        <input
                            className="form-control rounded-0"
                            id="inputName"
                            type="text"
                            placeholder="Enter Employee Name"
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
                            onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
                        />
                    </div>
                    <div className="col-12">
                        <label for="inputPassword4" className="form-label">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            className="form-control rounded-0"
                            id="inputPassword4"
                            placeholder="Enter Password"
                            onChange={(e) => setEmployee({ ...employee, password: e.target.value })}
                        />
                    </div>
                    <label for="inputSalary" className="form-label">
                        <strong>Salary</strong>
                    </label>
                    <input
                        type="text"
                        className="form-control rounded-0"
                        id="inputSalary"
                        placeholder="Enter Salary"
                        autoComplete="off"
                        onChange={(e) => setEmployee({ ...employee, salary: e.target.value })}
                    />
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
                            onChange={(e) => setEmployee({ ...employee, address: e.target.value })}
                        />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary w-100">Add Employee</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddEmployee;
