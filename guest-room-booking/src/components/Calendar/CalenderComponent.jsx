import React from 'react'
import {useState} from 'react';
import Calendar from 'react-calendar';
import './Calender.css'


const CalenderComponent = props => {

  const [date, setDate] = useState(new Date())
  const [start, setStartDate] = useState()
  const [end, setEndDate] = useState()
  console.log("start",start)
  console.log("end",end)

  function convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat)
    return [pad(pad(d.getDate()))].join('-')
  }

  const onChange = (e) => {
    // setDate()
    let startDate = convertDate(e.startDate);
    let endDate = convertDate(e.endDate);
    setStartDate(startDate);
    setEndDate(endDate);
  };
  const disabledDate = (current) => {
    return current && current < date.toDateString;
  };
  return (
    <div className='app'>
    <h1>Check Date Availability</h1>
    <div>
      <Calendar onChange={onChange} value={start} selectRange={true} defaultActiveStartDate={disabledDate} />
    </div>
    {/* {date.length > 0 ? (
    <p>
      <span>Start:</span>{' '} {date[0].toDateString()}
      &nbsp; to &nbsp;
      <span>End:</span> {date[1].toDateString()}
    </p>
         ) : (
    <p>
      <span>Default selected date:</span>{' '} {date.toDateString()}
    </p>
         )} */}
  </div>
  )

}

  

export default CalenderComponent