import React, { useState } from 'react'
import './DropDown.css'

const DropDown = () => {
  const [owner, setOwner] = useState("John")
  const handleName = () => {
    // setOwner(e.target.value)
    console.log('clicked one');
  };


  return (
    
    <Dropdown
    
      trigger={<input type='text' className='field' value={owner}/>}
      menu={[
        <button onClick={(e) => handleName(setOwner('John'))} >John</button>,
        <button onClick={(e) => handleName(setOwner('Andrew'))} >Andrew</button>,
      ]}
    />
  );
};

const Dropdown = ({ trigger, menu }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className='card'>
    <p>Owner Name</p>
    <div className="dropdown">
      {React.cloneElement(trigger, {
        onClick: handleOpen,
      })}
      
      {open ? (
        <ul className="menu">
          {menu.map((menuItem, index) => (
            <li key={index} className="menu-item">
              {React.cloneElement(menuItem, {
                onClick: () => {
                  menuItem.props.onClick();
                  setOpen(false);
                },
              })}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
    </div>
  );
}

export default DropDown