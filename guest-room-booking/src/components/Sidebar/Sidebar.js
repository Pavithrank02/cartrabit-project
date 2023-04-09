import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Sidebar = () => {
  const params = useParams()
  console.log(params)
  
  //Displaying and rendering sidebar component.
  return (
      <div className='sidebar-container' style={{background: 'linear-gradient(180deg, #4d4dff, #8533ff)'}}>
        <Link to={`/registerroom/${params.name}`} style={{ textDecoration: 'none',  }}>
          <h3>
            Register Room
          </h3>
        </Link>
        <Link to={`/dashboard/${params.name}`} style={{ textDecoration: 'none',  }}>
          <h3>
            Dashboard
          </h3>
        </Link>
        <Link to={`/gallery/${params.name}`} style={{ textDecoration: 'none',  }}>
          <h3>
            Gallery
          </h3>
        </Link>
        <Link to={`/profile/${params.name}}`} style={{ textDecoration: 'none',  }}>
          <h3>
            Profile
          </h3>
        </Link>
      </div>


  )
}

export default Sidebar