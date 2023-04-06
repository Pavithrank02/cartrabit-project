import React, { useState } from 'react';
import { useFormik } from 'formik';
import { roomRegister, fetchuser } from '../slice/apiSlice';
import './Owner.css'
import { useDispatch } from 'react-redux';

// const validate = values => {

//   const errors = {};

//   if (!values.firstName) {
//     errors.firstName = 'Required';
//   } else if (values.firstName.length > 15) {
//     errors.firstName = 'Must be 15 characters or less';
//   }


//   if (!values.lastName) {
//     errors.lastName = 'Required';
//   } else if (values.lastName.length > 20) {
//     errors.lastName = 'Must be 20 characters or less';
//   }
//   if (!values.description) {
//     errors.description = 'Required';
//   } else if (values.description.length < 20) {
//     errors.lastName = 'Must be 20 characters or greater';
//   }

//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }

//   return errors;
// };


const HouseOwnerForm = () => {

  const [isChecked, setIsChecked] = useState(false);
  const [houseowner, setName] = useState("");
  const [room, setRoom] = useState("");
  const [house, setHouse] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [beds, setBeds] = useState("");
  const [max, setMax] = useState("");
  const [min, setMin] = useState("");
  const [size, setFloor] = useState("");
  const [file, setFile] = useState("");
  const dispatch = useDispatch();


  const handleOnChange = (e) => {
    setIsChecked(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value)
  };
  const handleRoom = (e) => {
    setRoom(e.target.value)
  };
  const handleDescription = (e) => {
    setDescription(e.target.value)
  };
  const handleAmount = (e) => {
    setAmount(e.target.value)
  };
  const handleBeds = (e) => {
    setBeds(e.target.value)
  };
  const handleHouse = (e) => {
    setHouse(e.target.value)
  };
  const handleMax = (e) => {
    setMax(e.target.value)
  };
  const handleMin = (e) => {
    setMin(e.target.value)
  };
  const handleSize = (e) => {
    setFloor(e.target.value)
  };
  const handleFile = (e) => {
    setFile(e.target.files)
  };

  const handleSubmit = () => {
    console.log("sumbit")
    const fData = new FormData();
    fData.append('image', file);
    try {
      dispatch(fetchuser({
        data: fData
      }))
      console.log("img", fData);
    } catch (ex) {
      console.log(ex);
    }
    dispatch(roomRegister({
      room: room,
      description: description,
      houseowner: houseowner,
      beds: beds,
      amount: amount,
      image: file,
      houseno: house,
      max: max,
      min: min,
      floor: size,

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



    },
    // validate,
    // onSubmit: values => {
    //   alert(JSON.stringify(values, null, 2));
    // },
  });
  return (
    <div className='form_container'>
      <h1>Room House Registration Form</h1>
      <form className='ownerform'>
        <div className='form-container-left'>
          <label htmlFor="firstName">Owner Name</label>
          <input
            id="normal"
            name="firstName"
            type="text"
            onChange={handleName}
            onBlur={formik.handleBlur}
            value={houseowner}
          />
          {/* {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null} */}

          <label>Room Number</label>
          <input
            id="normal"
            name="lastName"
            type="text"
            onChange={handleRoom}
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
            onChange={handleDescription}
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
            onChange={handleAmount}
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
            onChange={handleBeds}
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
            onChange={handleMax}
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
            onChange={handleMin}
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
            type="email"
            onChange={handleHouse}
            onBlur={formik.handleBlur}
            value={house}
          />
          {/* {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null} */}

          <label>Select your desired Amenities:</label>
          <div className="topping">
            <input
              type="checkbox"
              id="topping"
              name="topping"
              value="TV"
              // checked={isChecked}
              onChange={handleOnChange}
            />
            TV
            <input
              type="checkbox"
              id="topping"
              name="topping"
              value="WiFi"
              // checked={isChecked}
              onChange={handleOnChange}
            />
            WiFi
            <input
              type="checkbox"
              id="topping"
              name="topping"
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
          </div>

          <label className="text-white">Select Photos :</label>
          <input
            type="file"
            multiple='multiple'
            className="form-control"
            name="upload_file"
            onChange={handleFile}
          />

          <label className="input-container">Floor Size</label>
          <input
            id='normal'
            // onChange={handleAddress}
            className="input"
            value={size}
            type="text"
            onChange={handleSize}
          />
        </div>
      </form>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default HouseOwnerForm