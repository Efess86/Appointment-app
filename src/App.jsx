import React, { useState } from 'react';
import Create from './pages/Admin/Create';
import Login from './pages/User/Login';
import Slot from './components/slot/slot';
import './App.scss';




function App() {


  return (
    <div className="App">

      {/* <Create /> */}
      {/* <Login /> */}
      <Slot />
    </div>
  )
}

export default App