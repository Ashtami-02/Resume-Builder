import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>

      <section className='container-fluid first' style={{width:'100%' , overflow:'hidden' , height: '100vh' , backgroundImage:"url('https://www.cpasitesolutions.com/cpa-websites/wp-content/uploads/2024/06/local-seo-for-bookeepers-1.png')" , backgroundAttachment:'fixed' , backgroundPosition:'top' , backgroundSize:'cover'}}>
        <div className="row pt-5" style={{marginTop:'120px'}}>
          <div className="col-12 col-md-4"></div>
          <div className="col-12 col-md-4 shadow border py-5 rounded my-5 text-center" style={{backgroundColor:'rgb(255,255,255,0.3)'}}>
            <h3>Designed to get hired.</h3>
            <h4>Your skills, your story, your next job - all in one.</h4>
            <Link to={'/resume'}>
               <button className="btn text-light" style={{backgroundColor:'purple'}}>
                Make Your Resume
               </button>
            </Link>

          </div>
          <div className="col-12 col-md-4"></div>
        </div>
      </section>

      {/* tools */}
      <section className='tools p-5'>
        <h1 className='text-center'>Tools</h1>
        <div className='row align-items-center'>
          <div className="tool-content col-12 col-md-6 p-5" style={{fontSize:'15px'}}>
            <h3>Resume</h3>
            <p>Create unlimited new resumes and easily edit them afterwards.</p>

            <h3>Cover Letters</h3>
            <p>Easily write professional cover letters.</p>

            <h3>Jobs</h3>
            <p>Automatically receive new and relevant job postings.</p>

            <h3>Applications</h3>
            <p>Essortlessly manage and track your job applications in an organised manner.</p>
  
          </div>
          <div className="tool-image col-12 col-md-6">
            <img className='w-75 ms-5' src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png" alt="tools" />
          </div>
  
        </div>
      </section>

      {/* image */}
      <section className='second' style={{width:'100%' , overflow:'hidden' , height: '450px' , backgroundImage:"url('https://www.icu.ac.jp/en/assets/img/academics/ph_gs_ma_01.jpg')" , backgroundAttachment:'fixed' , backgroundPosition:'top' , backgroundSize:'cover'}}>
      </section>

      {/* testimony */}
      <section className='testimony p-5'>
        <h1 className='text-center my-3'>Testimony</h1>
        <div className='row align-items-center p-5'>
          <div className="testimony-content col-12 col-md-6 p-5" style={{fontSize:'15px'}}>
            <h2 className='mb-5'>Trusted by professionals worldwide</h2>
            <p className='fs-5'>At rBuilder, we don't just help you create resumes we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results</p>
            <p className='fs-5'>In fact, users who used rBuilder reported getting hired an average of 48 days faster.</p>
            <p className='fs-5'>Join thousands of job-seekers who've fast-tracked their careers with a resume that truly stands out.</p>
  
          </div>
          <div className="tool-image col-12 col-md-6">
             <div className="row">
              <div className="col-3">
                <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="" />
              </div>
              <div className="col-3">
                <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png" alt="" />
              </div>
              <div className="col-3">
                <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid10.png" alt="" />
              </div>
              <div className="col-3">
                <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png" alt="" />
              </div>
             </div>
             <div className="row my-3">
              <div className="col-3">
                <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="" />
              </div>
              <div className="col-3">
                <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png" alt="" />
              </div>
              <div className="col-3">
                <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid10.png" alt="" />
              </div>
              <div className="col-3">
                <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png" alt="" />
              </div>
             </div>
             <div className="row my-3">
              <div className="col-3">
                <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="" />
              </div>
              <div className="col-3">
                <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png" alt="" />
              </div>
              <div className="col-3">
                <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid10.png" alt="" />
              </div>
              <div className="col-3">
                <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png" alt="" />
              </div>
             </div>
          </div>
  
        </div>
      </section>
    </>
  )
}

export default LandingPage
