import React, { useState } from 'react';
import { useFormik } from 'formik';
import './Owner.css'

const validate = values => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }


  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }
  if (!values.description) {
    errors.description = 'Required';
  } else if (values.description.length < 20) {
    errors.lastName = 'Must be 20 characters or greater';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};


const HouseOwnerForm = () => {

  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      room: '',
      house: '',
      desciption: '',
      policies: '',
      beds: '',
      amount: '',
      size:'',



    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className='form_container'>
      <h1>Room House Registration Form</h1>
      <form onSubmit={formik.handleSubmit} className='ownerform'>
        <div className='form-container-left'>
          <label htmlFor="firstName">Owner Name</label>
          <input
            id="normal"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}

          <label>Room Number</label>
          <input
            id="normal"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.room}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}

          <label htmlFor="lastName">Description</label>
          <input
            id="textarea"
            name="description"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.desciption}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}

          <label htmlFor="lastName">Room Amount</label>
          <input
            id="normal"
            name="amount"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.amount}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}
          <label htmlFor="lastName">No. of Beds</label>
          <input
            id="normal"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.beds}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}
        </div>
        <div className='form-container-right'>
          <label htmlFor="lastName">Policies</label>
          <input
            id="textarea"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.policies}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}


          <label htmlFor="email">House Number</label>
          <input
            id="normal"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.house}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}

          <label>Select your desired Amenities:</label>
          <div className="topping">
            <input
              type="checkbox"
              id="topping"
              name="topping"
              value="Paneer"
              checked={isChecked}
              onChange={handleOnChange}
            />
            TV
            <input
              type="checkbox"
              id="topping"
              name="topping"
              value="Paneer"
              checked={isChecked}
              onChange={handleOnChange}
            />
            WiFi
            <input
              type="checkbox"
              id="topping"
              name="topping"
              value="Paneer"
              checked={isChecked}
              onChange={handleOnChange}
            />

            AC
            <input
              type="checkbox"
              id="topping"
              name="topping"
              value="Paneer"
              checked={isChecked}
              onChange={handleOnChange}
            />
            Dinner
          </div>

          <label className="text-white">Select Photos :</label>
          <input
            type="file"
            className="form-control"
            name="upload_file"
          // onChange={handleInputChange}
          />

          <label className="input-container">Floor Size</label>
          <input
            id='normal'
            // onChange={handleAddress}
            className="input"
            value={formik.values.size}
            type="text"
          />
        </div>
      </form>
      <button type="submit">Submit</button>
    </div>
  );
}

export default HouseOwnerForm