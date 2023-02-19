import './App.css';
import Header from './Header.js';
import Sidenav from './Sidenav.js';
import Videos from './Videos.js';
import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="App">
      <Header inputValue={inputValue} setInputValue={setInputValue}/>
      <div className="main-display" style={{"display" : "flex"}}></div>
      <Sidenav/>
      <Videos inputValue={inputValue}/>
    </div>
  )
}
export default App;
