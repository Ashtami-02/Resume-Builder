import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div style={{height:'80vh'}} className='d-flex flex-column justify-content-center align-items-center'>
      <img style={{height:'45vh'}} src="https://www.dochipo.com/wp-content/uploads/2024/01/404-Error-Animation-4.gif" alt="" />
      <h1>Page Not Found</h1>
      <h5 className='my-4'>Sorry, we couldn't find the page.</h5>
      <Link to='/' className="btn btn-primary">Goto Home</Link>
    </div>
  )
}

export default PageNotFound