import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import img from '../../assets/image/0x0.jpg'
import ImageSlider from '../../components/ImageSlider/imageSlider'
import CalenderComponent from '../../components/Calendar/CalenderComponent'
import Header from '../../components/Headers/MainHeader/Header'
import './CustomerBooking.css'

const CustomerBooking = (props) => {
  console.log(props)
  const Params = useParams()
  const navigate = useNavigate()
  // console.log("params",Params)
  const [data, setData] = useState("");
  const [getDate, setgetDate] = useState("")
  // console.log("data", data.data);

  // const {id,house_owner, maxDay, minDay } = data.data[0]

  useEffect(() => {

    fetchApi();
    // console.log(data)
  }, []);

  const fetchApi = async () => {
    const response = await fetch(`http://127.0.0.1:3000/get-room/${Params.id}`);
    const json = await response.json();
    setData(json)
    // console.log(json)
  };

  const getUpdatedDate = (dateArray) => {
    console.log("dateinparent", dateArray)
    setgetDate(dateArray)

  }

  const handleSubmit = () => {
    toast('Booking successfully Completed', {autoClose:3000})
    navigate(`./roomlist`)
    
  }

  return (
    <div className='background'>
      <div className='booking'>
        <div className='booking-card'>
          <div className='booking-card-head'>
            <Header />
          </div>
          <div className='booking-card-header'>
            <div className='contents'>
              <h1>Book Your Stay with Rooms</h1>
              <p>Over 20 Rooms are Available for now</p>
              <img src={img} className='booking-card-img' alt="room" />
            </div>
            <div className='rooms-selector'>
              <div className='frame'>
                <p>{data && data.data[0].house_owner}</p>
                <select id="field" name="Owners">
                  <option value="John">{data && data.data[0].house_owner}</option>
                  {/* <option value="Andrew">Andrew</option> */}
                </select>
              </div>
              <div className='frame2'>
                <div className='container'>
                  <p>Adults</p>
                  <select id="field1" name="Owners">
                    <option value="John">1</option>
                    <option value="Andrew">2</option>
                    <option value="Andrew">3</option>
                  </select>
                </div>
                <div className='container'>
                  <p>Childrens</p>
                  <select id="field1" name="Owners">
                    <option value="John">1</option>
                    <option value="Andrew">2</option>
                  </select>
                </div>
              </div>
              <div className='frame3'>
                <p>Rooms</p>
                <select id="field" name="Owners">
                  <option value="John">1</option>
                  <option value="Andrew">2</option>
                  <option value="John">1</option>
                  <option value="Andrew">2</option>
                </select>
              </div>
              <div className='frame4'>
                <button onClick={handleSubmit}>Book</button>
              </div>
            </div>
          </div>
          <div className='ad'>
            <ImageSlider />
            <CalenderComponent getUpdatedDate={getUpdatedDate} data={data} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default CustomerBooking