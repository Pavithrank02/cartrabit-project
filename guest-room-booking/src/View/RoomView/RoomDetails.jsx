import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RoomHeader from "../../components/Headers/RoomHeader/RoomHeader";
import ImageSlider from "../../components/ImageSlider/imageSlider";
import './RoomList.css'
import ImageSliderBig from "../../components/ImageSlider/ImageSliderBig";

const RoomDetails = () => {
  const Params = useParams()
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
        <ImageSliderBig />
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default RoomDetails