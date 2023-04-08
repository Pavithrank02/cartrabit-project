import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import './Calender.css'


const CalenderComponent = props => {

  const [date, setDate] = useState(new Date())


  if (date && date.length > 0) {

    let startDate = date[0].toDateString()
    let endDate = date[1].toDateString()
    let Difference_In_Time = new Date(endDate).getTime() - new Date(startDate).getTime();
    // To calculate the no. of days between two dates
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    console.log(Difference_In_Days)

  }

  const handleDateChange = (e) =>{
    console.log("calenderchange",e)
    // setDate()
    props.getUpdatedDate(e)
  }

  return (
    <div className='app'>
      <h1>Check Date Availability</h1>
      <div>
        <Calendar onChange={handleDateChange} value={date} selectRange={true} />
      </div>
      {date && date.length > 0 ? (
        <p>
          <span>Start:</span>{' '} {date[0].toDateString()}
          &nbsp; to &nbsp;
          <span>End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p>
          <span>Default selected date:</span>{' '} {date.toDateString()}
        </p>
      )}
    </div>
  )

}



export default CalenderComponent