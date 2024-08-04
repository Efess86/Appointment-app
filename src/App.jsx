import React from 'react'
import Input from './components/input/input'
import Button from './components/button/button'
import Checkbox from './components/input/checkbox';
import { FaUser } from 'react-icons/fa';

function App() {
  return (
    <div className="App">

      {/* Text input */}
      <Input
        label="Calendar name"
        id="calendar_name"
        placeholder="Enter name of calendar..."
        type="text"
      />

      {/* Date input */}
      <Input
        label='Select date'
        id='select_date'
        type='date'
        required
      />

      {/* Number input */}
      <Input
        label="Slot start"
        id="slot_start"
        type="number"
        min={0}
        max={60}
      />

      <Checkbox
        id='checkbox'
        label='I agree'
        required
      />

      <Button
        id="myButton"
        btn_name="Click me"
        icon={<FaUser />}
        className='outline'
        onClick={() => console.log('Button clicked')}
      />

      <Button
        id="myButton"
        btn_name="Second"
        className='outline'
        withBorder
        onClick={() => console.log('Button clicked')}
      />

    </div>
  )
}

export default App