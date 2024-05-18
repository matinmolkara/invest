import React from 'react'
import { Link } from 'react-router-dom'

function Breadcrumb({title}) {
  return (
    <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">{title}</li>
            </ol>
     </nav>
  )
}

export default Breadcrumb