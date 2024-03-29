import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { imageupload } from '../../utills/apiSlice';
import './Fileupload.css'

const FileUpload = () => {
  const params = useParams()
  console.log(params)
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const handleFile = () => {
    const fData = new FormData();
    fData.append('file', file[0].name);
    // console.log("file", file)
    fData.append("fileName", file[0])
    try {
      dispatch(imageupload({
        name: name,
        data: fData
      }))
      console.log("img", fData);
    } catch (ex) {
      console.log(ex);
    }
  }
  return (
    <div className='fileupload'>
     <input
            id="normal"
            name="room"
            type="text"
            placeholder='Owner Name'
            onChange={(e) =>setName(e.target.value)}
            // onBlur={formik.handleBlur}
            value={name}
          />
      <label className="text-white">Select Photos :</label>
      <input
        type="file"
        accept="image/*"
        multiple
        className="form-control"
        name="multi-files"
        onChange={(e) => setFile(e.target.files)}
      />
      <button onClick={handleFile}>Upload</button>
    </div>
  )
}

export default FileUpload