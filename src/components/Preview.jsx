import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaFileDownload } from "react-icons/fa";
import Edit from './Edit';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

import { FaHistory } from "react-icons/fa";
import { addDownloadHistoryAPI } from '../services/allAPI';

function Preview({userInput,finish}) {
  // console.log(userInput);
  // console.log(finish);

  const [downloadStatus,setDownloadStatus] = useState(false)

  const downloadCV = async()=>{
    //get element for taking screenshot
    //alert("download started")
    const input = document.getElementById("result")
    const canvas = await html2canvas(input,{scale:2})
    const imgURL = canvas.toDataURL('image/png')
    // console.log(imgURL);
    const pdf = new jsPDF()
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = pdf.internal.pageSize.getHeight()

    pdf.addImage(imgURL,'PNG',0,0,pdfWidth,pdfHeight)
    pdf.save('resume.pdf')

    //get date
    const localTimeData = new Date()
    const timeStamp = `${localTimeData.toLocaleDateString()}, ${localTimeData.toLocaleTimeString()}`
    //console.log(timeStamp);

    //add download cv to json using api call
    try{
      const result = await addDownloadHistoryAPI({...userInput,imgURL,timeStamp})
      console.log(result);
      setDownloadStatus(true)   
    }catch(err){
      console.log(err);
    }  
  }
  
  return (
    <>
      {
        userInput.personalData.name!="" &&
        <div className='flex flex-column'>
          {
            finish &&
            <Stack direction={'row'} sx={{justifyContent:'center'}}>
          <Stack direction={'row'} sx={{alignItems:'center'}}>
            {/* download */}  
            <button onClick={downloadCV} className='btn text-primary fs-3'><FaFileDownload /></button>
         { 
          downloadStatus &&
          <> 
            {/* edit */}
            <div> <Edit/> </div>
            {/* history */}
            <Link to={'/history'} className='btn text-primary fs-3'><FaHistory /></Link>
          </>
          }
            {/* back */}
            <Link to={'/resume'} className="btn text-primary">BACK</Link>
          </Stack>
            </Stack>
          }

          <Box component="section" >
          <Paper id="result" elevation={3} sx={{ my:5 , p: 5, textAlign:'center',width:'600px', marginTop:'60px'}}>
             <h2>{userInput.personalData.name}</h2>
             <h4>{userInput.personalData.jobTitle}</h4>
             <p><span>{userInput.personalData.location}</span> | <span>{userInput.personalData.email}</span> | <span>{userInput.personalData.phone}</span> </p>
             <p>
                <Link href={userInput.personalData.github}> GITHUB </Link> |
                <Link href={userInput.personalData.linkedin}> LINKEDIN </Link> |
                <Link href={userInput.personalData.portfolio}> PORTFOLIO </Link>
             </p>
  
             <Divider sx={{fontSize:'25px'}}>Summary</Divider>
             <p className='text-start'>{userInput.summary}</p>
  
             <Divider sx={{fontSize:'25px'}}>Education</Divider>
             <h5>{userInput.education.course}</h5>
             <p><span>{userInput.education.college}</span> | <span>{userInput.education.university}</span> | <span>{userInput.education.year}</span> </p>
  
             <Divider sx={{fontSize:'25px'}}>Professional Experience</Divider>
             <h5>{userInput.experience.jobRole}</h5>
             <p><span>{userInput.experience.company}</span> | <span>{userInput.experience.jobLocation}</span> | <span>{userInput.experience.duration}</span> </p>
  
             <Divider sx={{fontSize:'25px'}}>Skills</Divider>
             <Stack spacing={2} direction="row" sx={{flexWrap:'wrap' , gap:'10px'}}>
             {userInput.skills?.map(skill=>(
              <Button variant="contained">user skill</Button> 
            ))}     
             </Stack>
  
  
          </Paper>
          </Box>
      </div>
      }
    </>

  )
}

export default Preview