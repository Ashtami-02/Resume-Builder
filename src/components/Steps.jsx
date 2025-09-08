import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import swal from 'sweetalert';
import { addResumeAPI } from '../services/allAPI';


const steps = ['Basic information', 'Contact Details', 'Education Details' , 'Work Experience' , 'Skills & Certifications' , 'Review & Submit'];

function Steps({userInput,setUserInput,setFinish}) {
  const skillSuggestionArray = ['NODE JS','MONGODB','REACT','EXPRESS','ANGULAR','NEXT JS','BOOTSTRAP','TAILWIND','CSS','GIT']
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const userSkillRef = React.useRef()

  //console.log(userInput);
  
  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

   const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  //add skill
  const addSkill = (inputSkill)=>{
    // alert(userSkillRef.current.value);
    
    if(inputSkill){
      if(userInput.skills.includes(inputSkill)){
        alert("Entered skill already exists!! Please add another...")
      }
      else{
        // userInput.skills.push(inputSkill)
        setUserInput({...userInput,skills:[...userInput.skills,inputSkill]})
      }
    }
  }

  // console.log(userInput.skills);
  const removeSkill = (skill)=>{
    setUserInput({...userInput,skills:userInput.skills.filter(item=>item!=skill)})
  }


  //render the content corresponding to array content
  const renderStepArrayCount = (stepCount)=>{
    switch(stepCount){
      case 0 : return (
        <div>
          <h3>Personal Details</h3>
          <div className="d-flex row p-3">
            <TextField id="standard-basic-name" label="Full Name" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,name:e.target.value}})} value={userInput.personalData.name}/>
            <TextField id="standard-basic-job" label="Job Title" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,jobTitle:e.target.value}})} value={userInput.personalData.jobTitle}/>
            <TextField id="standard-basic-location" label="Location" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,location:e.target.value}})} value={userInput.personalData.location}/>
          </div>
        </div>
      )
      case 1 : return (
        <div>
          <h3>Contact Details</h3>
          <div className="d-flex row p-3">
            <TextField id="standard-basic-mail" label="Email" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,email:e.target.value}})} value={userInput.personalData.email}/>
            <TextField id="standard-basic-phone" label="Phone" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,phone:e.target.value}})} value={userInput.personalData.phone}/>
            <TextField id="standard-basic-github" label="Github Profile Link" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,github:e.target.value}})} value={userInput.personalData.github}/>
            <TextField id="standard-basic-linkedin" label="Linkedin Profile Link" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,linkedin:e.target.value}})} value={userInput.personalData.linkedin}/>
            <TextField id="standard-basic-portfolio" label="Portfolio Link" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,portfolio:e.target.value}})} value={userInput.personalData.portfolio}/>
          </div>
        </div>
      )
      case 2 : return (
        <div>
          <h3>Education Details</h3>
          <div className="d-flex row p-3">
            <TextField id="standard-basic-course" label="Course Name" variant="standard" onChange={e=>setUserInput({...userInput,education:{...userInput.education,course:e.target.value}})} value={userInput.education.course}/>
            <TextField id="standard-basic-college" label="College Name" variant="standard" onChange={e=>setUserInput({...userInput,education:{...userInput.education,college:e.target.value}})} value={userInput.education.college}/>
            <TextField id="standard-basic-university" label="University" variant="standard" onChange={e=>setUserInput({...userInput,education:{...userInput.education,university:e.target.value}})} value={userInput.education.university}/>
            <TextField id="standard-basic-year" label="Year of Passout" variant="standard" onChange={e=>setUserInput({...userInput,education:{...userInput.education,year:e.target.value}})} value={userInput.education.year}/>
          </div>
        </div>
      )
      case 3 : return (
        <div>
          <h3>Work Experience</h3>
          <div className="d-flex row p-3">
            <TextField id="standard-basic-role" label="Job or Internship" variant="standard" onChange={e=>setUserInput({...userInput,experience:{...userInput.experience,jobRole:e.target.value}})} value={userInput.experience.jobRole}/>
            <TextField id="standard-basic-company" label="Company Name" variant="standard" onChange={e=>setUserInput({...userInput,experience:{...userInput.experience,company:e.target.value}})} value={userInput.experience.company}/>
            <TextField id="standard-basic-clocation" label="Company Location" variant="standard" onChange={e=>setUserInput({...userInput,experience:{...userInput.experience,jobLocation:e.target.value}})} value={userInput.experience.jobLocation}/>
            <TextField id="standard-basic-duration" label="Duration" variant="standard" onChange={e=>setUserInput({...userInput,experience:{...userInput.experience,duration:e.target.value}})} value={userInput.experience.duration}/>
          </div>
        </div>
      )
      case 4 : return (
        <div>
          <h3>Skills</h3>
          <div className="d-flex align-items-center justify-content-between p-3">
            {/* <TextField sx={{width:'450px'}} id="standard-basic-name" label="Add Skills" variant="standard" /> */}
            <input ref={userSkillRef} type="text" className='form-control' placeholder='Add Skills'/>
            <Button onClick={()=>addSkill(userSkillRef.current.value)} variant="text">ADD</Button>
          </div>
          <h5>Suggestions :</h5>
          <div className="d-flex flex-wrap justify-content-between my-3">
            {
              skillSuggestionArray.map(userSkill=>(
                   <Button onClick={()=>addSkill(userSkill)} className='m-1' key={userSkill} variant="outlined">{userSkill}</Button>
              ))
            }
          </div>
          <h5>Added Skills :</h5>
          <div className="d-flex flex-wrap justify-content-between my-3">
            {/* span must duplicate according to the user added skills */}
            {
              userInput.skills.length>0?
                userInput.skills.map(skill=>(
                  <span key= {skill} className='btn btn-primary d-flex justify-content-center align-items-center my-1'>{skill} 
                  <button onClick={()=>removeSkill(skill)} className='text-light btn'>X</button></span>
                ))
                :
                <span>NIL</span>
            }
          </div>

        </div>
      )
      case 5 : return (
        <div>
          <h3>Professional Summary</h3>
          <div className="d-flex row p-3">
            <TextField id="standard-basic-name" label="Write a short summary of yourself" multiline rows={7} defaultValue={'Enthusiastic and motivated Computer Science graduate with a strong foundation in web development, currently advancing skills in MEAN stack (MongoDB, Express.js, Angular, Node.js). Passionate about building dynamic, scalable, and user-friendly web applications with a focus on clean code and problem-solving. Experienced in JavaScript, HTML, CSS, and responsive design, with a growing expertise in backend integration and database management. Quick learner with strong analytical abilities, eager to contribute to innovative projects and grow as a full-stack developer in a collaborative environment.'} variant="standard" onChange={e=>setUserInput({...userInput,summary:e.target.value})} value={userInput.summary}/>
            
          </div>
        </div>
      )

      default : return null
    }
  }
  
  //addresume
  const handleAddResume = async ()=>{
    //api call
     const {name,jobTitle,location} = userInput.personalData
     if(name && jobTitle && location){
        // alert("API called")
        try{
        const result = await addResumeAPI(userInput)
        console.log(result);
        swal("Success!", "Resume added successfully!", "success");
        setFinish(true)
        }catch(err){
          console.log(err); 
          swal("Error!", "Resume addition failed!", "error");  
          setFinish(false) 
        }
    }else{
      alert("fill the form")
    }
  }


  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {/* view of each step */}
          <Box>
            {renderStepArrayCount(activeStep)}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            { 
            activeStep === steps.length - 1 ? 
            <Button onClick={handleAddResume}>Finish</Button> :
            <Button onClick={handleNext}>Next</Button>
            }



          </Box>
        </React.Fragment>
      )}
    </Box>
  )
}

export default Steps