import React, { useState, useEffect } from "react";
import { fetchApi } from '../slice/apiSlice'
import { useDispatch } from "react-redux";

import './RoomListComp.css'

const RoomList = () => {

  const [data, setData] = useState("");

  console.log("datas", data.data.map(e => e))

  // const dispatch = useDispatch()

  useEffect(() => {

    fetchApi();
    // console.log(data)
  }, []);
  const fetchApi = async () => {
    const response = await fetch("http://127.0.0.1:3000/get-rooms");
    const json = await response.json();
    setData(json)
    console.log(json)
  };


  return (
    <>
      {data && data.data.map((e) => {
        return (
          <div className='roomList-component'>
            <div className='image-container'>
              <img src='https://images.oyoroomscdn.com/uploads/hotel_image/56298/large/11cce759d90acddf.jpg' alt='rooms' />
            </div>
            <div className="details-container">
              <div className="top">
                <h1>HouseOwner : {e.house_owner}</h1>
                <p>Room Number : {e.room_no}</p>
              </div>
              <div className="bottom">
              <p>Rs.{e.amount} </p>
              <h3>₹5548 65% off</h3>
              <button>View Details</button>
              <button>Book</button>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default RoomList