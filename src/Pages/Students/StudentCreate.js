import { useFormik } from 'formik'
import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function StudentCreate() 
{
    const [isLoading,setLoading]=useState(false)
    const navigate = useNavigate()
    const myFormik= useFormik(
        {
        initialValues :{
            firstname : "",
            lastname: "",
            class : "",
            dob : "",
            teacher : "",
            group:"",
        },
        validate : (values)=>{
                let errors={};
                if (!values.firstname){
                    errors.firstname = "Please enter a firstname";
                }

                if (!values.lastname){
                    errors.lastname = "Please enter a lastname";
                }
               
                if (!values.class){
                    errors.class="Please enter a class";
                }
                if (!values.dob){
                    errors.dob="Please enter date of birth";
                }
                if (!values.teacher){
                    errors.teacher="Please enter a teachername";
                }
                if (!values.group){
                    errors.group="Please enter a group";
                }
                return errors;
            },
        onSubmit: async (values)=>{
            try{
            setLoading(true)
            const student = await axios.post(
                "https://63af9edacb0f90e51476dc94.mockapi.io/students",
                values
                
            );
            navigate("/portal/student-list")
            }catch (error) {
                console.log(error);
                alert("Validation Error")
                setLoading(false)
            }
        },  
    }) ;
  return (
    <div className="container">
        <form onSubmit={myFormik.handleSubmit}>
        <div classNAme="row">
            <div className="col-lg-6">
                <label>FirstName</label>
                <input  name="firstname" 
                onChange={myFormik.handleChange}
                value={myFormik.values.firstname} 
                type={"text"}
                className={`form-control ${
                    myFormik.errors.firstname ? "is-invalid" : "is-valid"
                }`} />
                <span style={{color:"red"}}>{myFormik.errors.firstname}</span>
            </div>
            <div className="col-lg-6">
                <label>LastName</label>
                <input  name="lastname" 
                onChange={myFormik.handleChange}
                value={myFormik.values.lastname} 
                type={"text"}
                className={`form-control ${
                    myFormik.errors.lastname ? "is-invalid" : "is-valid"
                }`} />
                <span style={{color:"red"}}>{myFormik.errors.lastname}</span>
            </div>
            
            <div className="col-lg-6">
                <label>DoB</label>
                <input name="dob" 
                onChange={myFormik.handleChange}  
                value={myFormik.values.dob} 
                type={"text"}
                className={`form-control ${
                    myFormik.errors.dob ? "is-invalid" : "is-valid"
                }`} />   
                <span style={{color:"red"}}>{myFormik.errors.dob}</span>
            </div>
            <div className="col-lg-6">
                <label>Teacher</label>
                <input  name="teacher" 
                onChange={myFormik.handleChange}
                value={myFormik.values.teacher} 
                type={"text"}
                className={`form-control ${
                    myFormik.errors.teacher ? "is-invalid" : "is-valid"
                }`} />
                <span style={{color:"red"}}>{myFormik.errors.teacher}</span>
            </div>
            <div className="col-lg-6">
                <label>Group</label>
                <input  name="group" 
                onChange={myFormik.handleChange}
                value={myFormik.values.group} 
                type={"text"}
                className={`form-control ${
                    myFormik.errors.group ? "is-invalid" : "is-valid"
                }`} />
                <span style={{color:"red"}}>{myFormik.errors.group}</span>
            </div>
            <div className="clo-lg-3 mt-3">
                <input  disabled={isLoading} type={"submit"} value={isLoading ? "Loading..." : "Create"}  className="btn btn-primary"/>
            </div>
        </div>
        </form>
    </div>
)}

export default StudentCreate