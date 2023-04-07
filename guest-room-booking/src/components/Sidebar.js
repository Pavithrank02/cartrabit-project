import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  
  //Displaying and rendering sidebar component.
  return (
      <div className='sidebar-container' style={{background: 'linear-gradient(180deg, #4d4dff, #8533ff)'}}>
        <Link to={`/profile}`} style={{ textDecoration: 'none',  }}>
          <h3>
            Register Room
          </h3>
        </Link>
        <Link to={`/profile}`} style={{ textDecoration: 'none',  }}>
          <h3>
            Dashboard
          </h3>
        </Link>
        <Link to={`/profile}`} style={{ textDecoration: 'none',  }}>
          <h3>
            Gallery
          </h3>
        </Link>
        <Link to={`/profile}`} style={{ textDecoration: 'none',  }}>
          <h3>
            Profile
          </h3>
        </Link>
      </div>


  )
}

export default Sidebar