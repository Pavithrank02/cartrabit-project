import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import { useDispatch } from 'react-redux';
import { extendMoment } from 'moment-range';
import Moment from 'moment';
import { bookroom } from '../../utills/apiSlice';
import './Calender.css'


const CalenderComponent = props => {
  console.log(props)
  const moment = extendMoment(Moment);
  const dispatch = useDispatch()

  const [date, setDate] = useState(new Date())

  const handleBooking = () => {
    console.log("booking start")
    if (date && date.length > 0) {
      const { id, maxDay, minDay, startDay, endDay } = props && props.data.data[0]
  
      let startDate = date[0].toDateString()
      let endDate = date[1].toDateString()
      let Difference_In_Time = new Date(endDate).getTime() - new Date(startDate).getTime();
      // To calculate the no. of days between two dates
      let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      console.log(Difference_In_Days);
      const date1 = [moment(startDate), moment(endDate)];
      const date2 = [moment(startDay), moment(endDay)];
  
      const range = moment.range(date1);
      const range2 = moment.range(date2);
  
      if (Difference_In_Days > maxDay) {
        alert(`selected dates needs to be less than ${maxDay}`)
  
      } else if (range.overlaps(range2)) {
  
        // has overlapping
        if ((range2.contains(range, true) || range.contains(range2, true)) && !date1[0].isSame(date2[0]))
          alert("time range 1 is completely conflict with time range 2 and vice versa");
        else
          alert("");
  
      } else {
        console.log("before dispatch", startDate, endDate)
        const date1 = moment(startDate).format('YYYY-MM-DD')
        const date2 = moment(endDate).format('YYYY-MM-DD')
        dispatch(bookroom({
          id: id,
          startday: date1,
          endday: date2
        }))
  
      }
    }

  }  

    const handleDateChange = (e) => {
      console.log("calenderchange", e)
      setDate(e)
     
      props.getUpdatedDate(e)
    }
    handleBooking()
    return (
      <div className='app'>
        <div>
          <Calendar 
          onChange={handleDateChange} 
          value={date} 
          selectRange={true}
           />
        </div>
        {date && date.length > 0 ? (
          <p>
            <span>Start:</span>{date[0].toDateString()}
            &nbsp; to &nbsp;
            <span>End:</span> {date[1].toDateString()}
          </p>
        ) : (
          <p style={{marginTop: '10px'}}>
            {/* <span>Room After:</span>{' '} {props && props.data.data[0].endDay} */}
          </p>
        )}
      </div>
    )

  }



export default CalenderComponent