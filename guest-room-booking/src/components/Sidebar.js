import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  
  //Displaying and rendering sidebar component.
  return (
    <div className='sidebar' >
      <div className='sidebar-container' style={{background: 'linear-gradient(180deg, #4d4dff, #8533ff)'}}>
        <Link to={`/profile}`} style={{ textDecoration: 'none',  }}>
          <h3>
            Profile
          </h3>
        </Link>
        <Link to={`/profile}`} style={{ textDecoration: 'none',  }}>
          <h3>
            Profile
          </h3>
        </Link>
        <Link to={`/profile}`} style={{ textDecoration: 'none',  }}>
          <h3>
            Profile
          </h3>
        </Link>
        <Link to={`/profile}`} style={{ textDecoration: 'none',  }}>
          <h3>
            Profile
          </h3>
        </Link>
      </div>
    </div>

  )
}

export default Sidebar