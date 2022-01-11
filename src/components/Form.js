import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert'
export default function Form() {
   const [studentName, setStudentName] = useState("")
  const  goOnPage = useNavigate()
   const studentSubmit = async (e) =>{
       e.preventDefault()
       const datsend = {
        data: {
          Name: studentName
        }
      }
       const result = await axios.post("https://immense-stream-99519.herokuapp.com/api/students", datsend)
      if(result.status===200){
        swal("Good job!", "Data Inserted SuccessFully!", "success");
          goOnPage("/")
      }
   }
  return (
    <form onSubmit={studentSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Student Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={studentName}
          onChange={(e)=>setStudentName(e.target.value)}
        />
      </div>


      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
