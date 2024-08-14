import React, { useState } from 'react';
import Create from './pages/Admin/Create';
import './App.scss';
// import Input from './components/input/input';
// import Button from './components/button/button';
// import Checkbox from './components/input/checkbox';
// import { FaUser } from 'react-icons/fa';
// import { APPOINTMENT_DATA } from './utils/config';


// const getAllDateInfo = () => Object.entries(APPOINTMENT_DATA.DATES).map(([date, info]) => ({
//   date, ...info
// }));

// const time = document.getElementById('slot_start');
// console.log(time);




function App() {
  // console.log(getAllDateInfo());


  return (
    <div className="App">

      <Create />
      {/* Text input */}
      {/* <Input
        label="Calendar name"
        id="calendar_name"
        placeholder="Enter name of calendar..."
        type="text"
        value={calendarName}
        onChange={handlerCalendarName}
      /> */}

      {/* Date input */}
      {/* <Input
        label='Select date'
        id='select_date'
        type='date'
        required
      /> */}

      {/* Number input */}
      {/* <Input
        label="Slot start"
        id="slot_start"
        type="time"
      /> */}

      {/* <Checkbox
        id='checkbox'
        label='I agree'
        required
      /> */}

      {/* <Button
        id="myButton"
        btn_name="Click me"
        icon={<FaUser />}
        className='outline'
        onClick={() => console.log('Button clicked')}
      /> */}

      {/* <Button
        id="myButton"
        btn_name="Second"
        className='outline'
        withBorder
        onClick={() => console.log('Button clicked')}
      /> */}

    </div>
  )
}

export default App