import React, { useState } from 'react';
import Create from './pages/Admin/Create';
import Login from './pages/User/Login';
import Home from './pages/Home';
import AdminCard from './components/adminCard/adminCard';

import './App.scss';




function App() {

  return (
    <div className="App">

      {/* <Create /> */}
      {/* <Login /> */}
      <Home />
      {/* <AdminCard /> */}

    </div>
  );
};

export default App;