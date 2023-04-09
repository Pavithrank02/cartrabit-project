import React from 'react'
import { useDispatch } from 'react-redux';
import { imageupload } from '../utills/apiSlice';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Fileupload.css'

const FileUpload = () => {
  const params = useParams()
  console.log(params)
  const [file, setFile] = useState("");
  const dispatch = useDispatch();
  const handleFile = () => {
    const fData = new FormData();
    fData.append('file', file[0].name);
    console.log("file", file)
    fData.append("fileName", file[0])
    try {
      dispatch(imageupload({
        name: params.name,
        data: fData
      }))
      console.log("img", fData);
    } catch (ex) {
      console.log(ex);
    }
  }
  return (
    <div className='fileupload'>
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