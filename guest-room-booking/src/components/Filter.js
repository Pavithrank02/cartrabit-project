import React, { useState } from 'react'
import { Range } from 'react-range'
import './filter.css'


const Filter = () => {
  const [values, setValues] = useState("")

  return (
    <div className='filter-container'>
      <h1>Filters</h1>
      <div>
        <h3>
          Price
        </h3>
        <div class="slidecontainer">
          <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
        </div>
      </div>
      <div>
        <h3>
          Collections
        </h3>
        <div className='container'>
              <p>Adults</p>
              <select id="field1" name="Owners">
                <option value="John">1</option>
                <option value="Andrew">2</option>
                <option value="Andrew">3</option>
              </select>
            </div>
            <div className='container'>
              <p>Categories</p>
              <select id="field1" name="Owners">
                <option value="John">Stay</option>
                <option value="Andrew">Fresh</option>
                <option value="Andrew">Dinner</option>
              </select>
            </div>
            <div className='container'>
              <p>Hotel Facilities</p>
              <select id="field1" name="Owners">
                <option value="John">TV</option>
                <option value="Andrew">AC</option>
                <option value="Andrew">Washroom</option>
                <option value="Andrew">Free Breakfast</option>
              </select>
            </div>
            <div className='container'>
              <p>Hotel Facilities</p>
              <select id="field1" name="Owners">
                <option value="John">TV</option>
                <option value="Andrew">AC</option>
                <option value="Andrew">Washroom</option>
                <option value="Andrew">Free Breakfast</option>
              </select>
            </div>
            <div className='container'>
              <p>Hotel Facilities</p>
              <select id="field1" name="Owners">
                <option value="John">TV</option>
                <option value="Andrew">AC</option>
                <option value="Andrew">Washroom</option>
                <option value="Andrew">Free Breakfast</option>
              </select>
            </div>

      </div>

    </div>
  )
}

export default Filter