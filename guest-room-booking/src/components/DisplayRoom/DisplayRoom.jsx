import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import Update from "./Update";
import { useDispatch } from "react-redux";
import { deleteuser } from "../../utills/apiSlice";
import { useSelector } from "react-redux";
import './DisplayRoom.css'

const DisplayRoom = () => {
  const [data, setData] = useState("");
  const params = useParams()
  console.log("params",params)
  const Navigate = useNavigate()
  console.log(data)

  // console.log("datas", data.data.map(e => e))

  const dispatch = useDispatch()

  useEffect(() => {

    fetchApi();
    
  }, []);
  const fetchApi = async () => {
    const response = await fetch(`http://127.0.0.1:3000/get-rooms/${params.name}`);
    const json = await response.json();
    setData(json)
    // console.log(json)
  };

  // const deleteHandle = (e, id) => {
  //   console.log(e.target.value);
  //   if(e.target.value){
  //     axios
  //     .delete(`http://127.0.0.1:3000/get-users/${e.target.value}`)
  //     .then(response => {
  //       // console.log(response)
  //       console.log("deleted success")

  //       // Handle response
  //     })

  //   }

  // }
  const deleteHandle = (e, id) => {
    try {
      const id = e.target.value;
      console.log("id",id)
      dispatch(
        deleteuser({
          id: id,
        })
      );
    } catch (err) {
      // console.log(err.message)
    }
  };
  return (
    <div>
      <table>
        <tr id="row" style={{background: 'linear-gradient(180deg, #4d4dff, #8533ff)'}}>
          <th>id</th>
          <th>Room No</th>
          <th>Description</th>
          <th>House Owner</th>
          <th>Amount</th>
          <th>Beds</th>
          <th>Maximu Day</th>
          <th>Minimum Day</th>
          <th>House Number</th>
          <th>Amenities</th>
          <th>Floor</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {data &&
          data.data.map((user, i) => (
            <tr id="col">
              <td>{user.id}</td>
              <td>{user.room_no}</td>
              <td>{user.Description}</td>
              <td>{user.house_owner}</td>
              <td>{user.amount}</td>
              <td>{user.beds}</td>
              <td>{user.maxDay}</td>
              <td>{user.minDay}</td>
              <td>{user.houseNo}</td>
              <td>{user.amenities}</td>
              <td>{user.floor}</td>
              <td>
                <button
                  className="btn-1"
                  value={user.id}
                  onClick={() => Navigate(`/update/${user.id}`)}
                >
                  Update
                </button>
              </td>
              <td>
                <button className="btn" value={user.id} onClick={deleteHandle}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
}

export default DisplayRoom

