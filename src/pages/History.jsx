import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { MdDelete } from "react-icons/md";

function History() {
  return (
    <div>
      <h1 className="text-center my-5">Download resume History</h1>
      <Link to={'/'} style={{marginTop:'-60px'}} className='float-end me-5 fs-5'>BACK</Link>
      <Box component="section" className='container-fluid' >
       <div className='row'>
          <div className='col-md-4'>
            <Paper elevation={3} sx={{ my:5 , p: 5, textAlign:'center' }}>
               <div className="d-flex text-center justify-content-evenly align-items-center">
                  <h6>Review At: <br /> 24/6/25, 7:22:27 pm</h6>
                  <button className="btn text-danger fs-4 ms-5"><MdDelete /></button>
               </div>
               <div className='border rounded p-3'>
                 <h2>Name</h2>
                 <h4>Job title</h4>
                 <p><span>Location</span> | <span>Email</span> | <span>Phone</span> </p>
                 <p>
                    <Link href={""}> GITHUB </Link> |
                    <Link href={""}> LINKEDIN </Link> |
                    <Link href={""}> PORTFOLIO </Link>
                 </p>
      
                 <Divider sx={{fontSize:'25px'}}>Summary</Divider>
                 <p className='fs-5 text-start'>user summary</p>
      
                 <Divider sx={{fontSize:'25px'}}>Education</Divider>
                 <h5>User Education</h5>
                 <p><span>College</span> | <span>University</span> | <span>Year</span> </p>
      
                 <Divider sx={{fontSize:'25px'}}>Professional Experience</Divider>
                 <h5>User Job</h5>
                 <p><span>Company</span> | <span>Location</span> | <span>Duration</span> </p>
      
                 <Divider sx={{fontSize:'25px'}}>Skills</Divider>
                 <Stack spacing={2} direction="row" sx={{flexWrap:'wrap' , gap:'10px'}}>
                 <Button variant="contained">user skill</Button>      
                 </Stack>
               </div>
    
    
            </Paper>
          </div>
       </div>
      </Box>
    </div>
  )
}

export default History