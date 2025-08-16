import React from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoIosDownload } from "react-icons/io";
import { Link } from 'react-router-dom';

function ResumeGenerator() {
  return (
   <div className='container-fluid'>
    <h1 className='mt-5 text-center'>Create a job-winning Resume in minutes</h1>
      <div style={{height:'60vh'}} className='row justify-content-center align-items-center'>
          
          <div className='row align-items-center justify-content-center'>
            <div className="box1 col-4 p-5 shadow rounded border text-center">
              <IoDocumentTextOutline className='text-primary fs-1 mb-3'/>              
              <h3>Add your information</h3>
              <p>Add pre-written examples to each section</p>
              <h4>Step 1</h4>
            </div>
            <div className="col-1"></div>
            <div className="box2 col-4 p-5 shadow rounded border text-center">
              <IoIosDownload className='text-danger fs-1 mb-3'/>
              <h3>Download your Resume</h3>
              <p>Download and start applying</p>
              <h4>Step 2</h4>
            </div>
    
          </div>
      </div>
      <div className="text-center">
        <Link to={'/form'} className="btn text-light mb-5" style={{backgroundColor:'purple'}}>LET'S START</Link>
      </div>
   </div>

  )
}

export default ResumeGenerator