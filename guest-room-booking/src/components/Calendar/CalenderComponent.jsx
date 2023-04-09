import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import './Calender.css'
import moment from 'moment/moment';


const CalenderComponent = props => {

  const [date, setDate] = useState(new Date())
  const { id, maxDay, minDay, startDay, endDay } = props.data.data[0]

  console.log("prop", props)
  if (date && date.length > 0) {

    let startDate = date[0].toDateString()
    let endDate = date[1].toDateString()
    let Difference_In_Time = new Date(endDate).getTime() - new Date(startDate).getTime();
    // To calculate the no. of days between two dates
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    // console.log(Difference_In_Days);
    const date1 = [moment(startDate), moment(endDate)];
    const date2 = [moment(startDay), moment(endDay)];

    const range = moment.range(date1);
    const range2 = moment.range(date2);

    if (Difference_In_Days > maxDay && Difference_In_Days < minDay) {
      alert(`selected dates needs to be less than ${maxDay}`)

    } else if (range.overlaps(range2)) {

      // has overlapping
      if ((range2.contains(range, true) || range.contains(range2, true)) && !date1[0].isSame(date2[0]))
        alert("time range 1 is completely conflict with time range 2 and vice versa");
      else
        alert("time range 1 is partially conflict with time range 2 and vice versa");

    } else {

      

    }



    const handleDateChange = (e) => {
      console.log("calenderchange", e)
      setDate(e)
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
}



export default CalenderComponent