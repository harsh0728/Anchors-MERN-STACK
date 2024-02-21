import React from 'react'
import Header from './Header'

const dashboard = () => {
  return (
    <div>
        <div className=""><Header/></div>
        <div className="">
        <h1>All Internships</h1>
      {/* Example cards for internship details */}
      <div className="internship-card">
        <h3>Internship Title 1</h3>
        <p>Description of Internship 1</p>
      </div>
      <div className="internship-card">
        <h3>Internship Title 2</h3>
        <p>Description of Internship 2</p>
      </div>
      {/* Add more cards as needed */}
        </div>
    </div>
  )
}

export default dashboard