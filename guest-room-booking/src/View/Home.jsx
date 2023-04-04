import React from 'react'
import img from '../assets/image/wave.png'
import Login from '../components/Login'
const Home = () => {
  return (
    <>
      <div className='background'>
        <img src={img} width="100%" alt="bg" />
      </div>
    <Login />
    </>

  )
}

export default Home