import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateuser } from '../../utills/apiSlice';
import './Owner.css'
const UpdateRoomDetails = () => {

  const params = useParams()
  const [houseowner, setName] = useState("");
  const [room, setRoom] = useState("");
  const [house, setHouse] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [beds, setBeds] = useState("");
  const [max, setMax] = useState("");
  const [min, setMin] = useState("");
  const [size, setFloor] = useState("");
  const [amenities, setAmenitiesInfo] = useState("");
  const dispatch = useDispatch();


  const handleSubmit = () => {
    // console.log("file",file);


    dispatch(updateuser({
      id:params.id,
      room: room,
      description: description,
      houseowner: houseowner,
      beds: beds,
      amount: amount,
      houseno: house,
      max: max,
      min: min,
      floor: size,
      amenities:amenities
    }));
  }
  const formik = useFormik({
    initialValues: {
      firstName: '',
      room: '',
      house: '',
      description: '',
      max: '',
      min: "",
      beds: '',
      amount: '',
      size: '',
      amenities: "",



    },
    // validate,
    // onSubmit: values => {
    //   alert(JSON.stringify(values, null, 2));
    // },
  });
  return (
    <div className='form_container'>
      <h1>Room Details Update Form</h1>
      <form className='ownerform' enctype="multipart/form-data" >
        <div className='form-container-left'>
          <label htmlFor="firstName">Owner Name</label>
          <input
            id="normal"
            name="firstName"
            type="text"
            placeholder='Owner Name'
            onChange={(e) =>setName(e.target.value)}
            onBlur={formik.handleBlur}
            value={houseowner}
          />
          {/* {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null} */}

          <label>Room Name</label>
          <input
            id="normal"
            name="lastName"
            type="text"
            placeholder='Room Name'
            onChange={(e) =>setRoom(e.target.value)}
            onBlur={formik.handleBlur}
            value={room}
          />
          {/* {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null} */}

          <label htmlFor="lastName">Description</label>
          <input
            id="textarea"
            name="description"
            type="text"
            placeholder='Description'
            onChange={(e) =>setDescription(e.target.value)}
            onBlur={formik.handleBlur}
            value={description}
          />
          {/* {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null} */}

          <label htmlFor="lastName">Room Amount</label>
          <input
            id="normal"
            name="amount"
            type="text"
            placeholder='Amount'
            onChange={(e) =>setAmount(e.target.value)}
            onBlur={formik.handleBlur}
            value={amount}
          />
          {/* {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null} */}
          <label htmlFor="lastName">No. of Beds</label>
          <input
            id="normal"
            name="lastName"
            type="text"
            placeholder='Beds'
            onChange={(e) =>setBeds(e.target.value)}
            onBlur={formik.handleBlur}
            value={beds}
          />
          {/* {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null} */}
        </div>
        <div className='form-container-right'>
          <label htmlFor="lastName">Maximum Days</label>
          <input
            id="normal"
            name="lastName"
            type="text"
            placeholder='Maximum Days to Book'
            onChange={(e) =>setMax(e.target.value)}
            onBlur={formik.handleBlur}
            value={max}
          />
          {/* {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null} */}
          <label htmlFor="lastName">Minimum Days</label>
          <input
            id="normal"
            name="lastName"
            type="text"
            placeholder='Minimum Day to Book'
            onChange={(e) =>setMin(e.target.value)}
            onBlur={formik.handleBlur}
            value={min}
          />
          {/* {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null} */}

          <label htmlFor="email">House Number</label>
          <input
            id="normal"
            name="email"
            type="text"
            placeholder='House Number'
            onChange={(e) =>setHouse(e.target.value)}
            onBlur={formik.handleBlur}
            value={house}
          />
          {/* {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null} */}

          <label htmlFor="email">Amenities Provided</label>
          <input
            id="normal"
            name="amenities"
            type="text"
            placeholder='Amenities'
            onChange={(e) =>setAmenitiesInfo(e.target.value)}
            onBlur={formik.handleBlur}
            value={amenities}
          />

          {/* <label>Select your desired Amenities:</label>
          <div className="topping">
            <input
              type="checkbox"
              id="topping"
              name="selected"
              value="TV"
              // checked={isChecked}
              onChange={handleOnChange}
            />
            TV
            <input
              type="checkbox"
              id="topping"
              name="selected"
              value="WiFi"
              // checked={isChecked}
              onChange={handleOnChange}
            />
            WiFi
            <input
              type="checkbox"
              id="topping"
              name="selected"
              value="AC"
              // checked={isChecked}
              onChange={handleOnChange}
            />

            AC
            <input
              type="checkbox"
              id="topping"
              name="topping"
              value="Dinner"
              // checked={isChecked}
              onChange={handleOnChange}
            />
            Dinner
          </div> */}

          {/* <label className="text-white">Select Photos :</label>
          <input
            type="file"
            accept="image/*"
            multiple
            className="form-control"
            name="multi-files"
            onChange={(e) =>setFile(e.target.files)}
          /> */}

          <label className="input-container">Floor Size</label>
          <input
            id='normal'
            // onChange={handleAddress}
            className="input"
            value={size}
            type="text"
            placeholder='Floor Size'
            onChange={(e) =>setFloor(e.target.value)}
          />
        </div>
      </form>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default UpdateRoomDetails