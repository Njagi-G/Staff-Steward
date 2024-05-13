import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [adminTotal, setAdminTotal] = useState()
  const [employeeTotal, setEmployeeTotal] = useState()
  const [salaryTotal, setSalaryTotal] = useState()

  useEffect(() => {
    adminCount();


  }, [])

  function adminCount() {
    axios.get('http://localhost:3000/auth/admin-count')
    .then(result => {
      if(result.data.Status) {
        setAdminTotal(result.data.Result[0].admin)
      }
    })

  }
  return (
    <div>
      <div className="p-3 d-flex justify-content-around mt-3">
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>Admin</h4>
          </div>
          <hr />
          <div className="d-flex justify-content-around">
            <h5>Total:</h5>
            <h5>{adminTotal} </h5>
          </div>
        </div>
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>Employee</h4>
          </div>
          <hr />
          <div className="">
            <h5>Total: </h5>
          </div>
        </div>
        <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>Salary</h4>
          </div>
          <hr />
          <div className=""></div>
            <h5>Total: </h5>
        </div>
      </div>
    </div>
  );
}

export default Home;
