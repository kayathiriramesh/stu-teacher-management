import React from 'react';
import { useEffect, useState } from 'react';
import {Link,useSearchParams} from 'react-router-dom';
import axios from "axios";
import { useContext } from 'react';
import StudentContext from '../../Context/UserContext';


function StudentList() {
    const [studentList, setStudentlist]= useState([]);
    const [isLoading,setLoading]=useState(true);
    const studentData= useContext(StudentContext)

    useEffect(()=>{
        //on load
        getStudents();
    },[]);

    let getStudents= async () =>{
        try{
            const students= await axios.get("https://63af9edacb0f90e51476dc94.mockapi.io/students");//mockapi la create panna api 
            setStudentlist(students.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

   

    let handleDelete = async(id) => {
         try{
                const confirdata= window.confirm("Are you sure do you want to delete this data?")
                if(confirdata){
                    await axios.delete(
                    `https://63af9edacb0f90e51476dc94.mockapi.io/students/${id}`  
                    );
                    getStudents();
                }
            }catch(error){
                alert("Somthing went wrong");
            }
         };
    
    
  return (
    <>
      <h1 class="h3 mb-2 text-gray-800">Tables</h1>
                    <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                        For more information about DataTables, please visit the <a target="_blank"
                            href="https://datatables.net">official DataTables documentation</a>.</p>                  

<div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">StudentsList -{studentData.student.name}</h1>
          <Link to="/portal/student-create" 
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
            <i className="fas fa-download fa-sm text-white-50"></i> Create Students
           </Link>
        </div>

                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div class="card-body">
                            {
                                isLoading ? (<img src="https://media.giphy.com/media/qwx29dwzS5TqkuPmRo/giphy.gif"/>) :
                                <div class="table-responsive">
                                    <table class="table table-bordered" id="dataTable" width="100%" >
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>FirstName</th>
                                            <th>LastName</th>
                                            <th>Class</th>
                                            <th>DoB</th>
                                            <th>Teacher</th>
                                            <th>Group</th>   
                                            <th>Action</th>                                      
                                        </tr>
                                    </thead>
                                    <tfoot>
                                    <tr>
                                            <th>ID</th>
                                            <th>FirstName</th>
                                            <th>LastName</th>
                                            <th>Class</th>
                                            <th>DoB</th>
                                            <th>Teacher</th>
                                            <th>Group</th>        
                                            <th>Action</th>                                            
                                    </tr>
                                            
                                    </tfoot> 
                                    <tbody>
                                    {   
                                            studentList.map((student,index) =>
                                        <tr key={index}>
                                            <td>{student.id}</td>
                                            <td>{student.firstname}</td>
                                            <td>{student.lastname}</td>
                                            <td>{student.class}</td>
                                            <td>{student.dob}</td>
                                            <td>{student.teacher}</td>
                                            <td>{student.group}</td>
                                            
                                            <th>
                                                <Link to ={`/portal/student-view/${student.id}`}className="btn btn-info btn-sm mr-1 mb-1">View</Link>
                                                <Link to ={`/portal/student-edit/${student.id}`} className="btn btn-primary btn-sm mr-1 mb-1">Edit</Link>
                                                <button onClick={() => handleDelete(student.id)} className="btn btn-danger btn-sm mr-1 mb-1">Delete</button>
                                            </th>
                                        </tr>)

                                    } 
                                                                                
                                    </tbody>
                                </table>
                                </div>
                            }
                            
                        </div>
                    </div>

    </>
)}

export default StudentList