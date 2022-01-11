import axios from "axios";
import React, { useState, useEffect } from "react";

import swal from 'sweetalert'
export default function Student() {
  const [student, setStudent] = useState([]);
  const getStudent = async () => {
    const result = await axios.get(
      "https://immense-stream-99519.herokuapp.com/api/students"
    );
    setStudent(result.data.data);
    console.log(result.data);
    // const dat = result.data.data.attributes.createdAt
    // console.log(dat)
    // if(result.status===200){
    //     alert("data is commming")
    // }
  };

  useEffect(() => {
    getStudent();
  }, []);

  //delete student
  const studentDeleteHandler = async (e) => {
    e.preventDefault();
    //   alert("dele")
    // swal("Good job!", "Student has been Deleted!", "success");
    const id = e.target.closest("tr").querySelector("td:first-child").innerHTML
    const result = await axios.delete( "https://immense-stream-99519.herokuapp.com/api/students/"+id)
 
    if(result.status===200){
          swal("Good job!", "Student has been Deleted!", "success");
        getStudent();
    }
  };
  return (
    <>
     
      <table className="table table-primary">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* // here we are going to call the student data  */}
          {student.map((studentData) => {
            return (
              <tr key={studentData.id}>
                <td>{studentData.id}</td>
                <td>{studentData.attributes.Name}</td>
                <td>
                  <button
                    className="btn btn-danger text-white btn-sm"
                    onClick={studentDeleteHandler}
                  >
                    <i className="fas fa-trash mx-1"></i> Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
