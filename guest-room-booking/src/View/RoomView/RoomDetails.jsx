import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RoomHeader from "../../components/Headers/RoomHeader/RoomHeader";
import ImageSlider from "../../components/ImageSlider/imageSlider";
import ImageSliderBig from "../../components/ImageSlider/ImageSliderBig";
import book from '../../assets/image/book.JPG'
import './RoomList.css'

const RoomDetails = () => {
  const Params = useParams()
  const navigate = useNavigate()
  // console.log("params",Params)
  const [data, setData] = useState("");
  console.log(data)

  useEffect(() => {

    fetchApi();

  }, []);

  const fetchApi = async () => {
    const response = await fetch(`http://127.0.0.1:3000/get-room/${Params.id}`);
    const json = await response.json();
    setData(json)
    // console.log(json)
  };

  return (
    <div>
      <RoomHeader />
      <div className="image-view">
        <div className="middle">
          <ImageSliderBig />
        </div>
        <div className="book-middle">
          <img src={book} alt="book" />
          <button onClick={() => navigate(`/booking/${data && data.data[0].id}`)}>Book</button>
        </div>
      </div>
      <div className="details">
        <h2> {data && data.data[0].room_no}</h2>
        <p>Description : {data && data.data[0].Description}</p>
        <p> Rs. {data && data.data[0].amount}</p>
        <p> Number of beds Available: {data && data.data[0].beds}</p>
        <p> {data && data.data[0].amenities}</p>
      </div>
    </div>
  )
}

export default RoomDetails