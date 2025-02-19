import './App.css';
import Header from './Header.js';
import Videos from './Videos.js';
import React, { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="App">
      
    <Header onSearch={setSearchQuery} /> {/* Pass function to update searchQuery */}
    <div className="main-display" style={{"display" : "flex"}}></div>

    <Videos searchQuery={searchQuery} /> {/* Pass searchQuery to Videos */}
</div>
  )
}
export default App;
