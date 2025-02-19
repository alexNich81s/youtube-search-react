
import React, { useState } from 'react';

function Header({ onSearch }){
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh
        onSearch(inputValue); // Send input value to parent component
    };

    return (
        <div className="header ">
            <div className='header-left-items'>
                <div className="site-name w3-container w3-jumbo w3-center w3-black w3-padding-64 w3-panel">
                    <a href='#home'>MY REACT YOUTUBE SEARCH</a>
                </div>
            </div>
            <div className="header-middle-items w3-container w3-bar">
                
            </div>
            <div className="input-box relative">
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            value={inputValue} 
                            className="search-box" 
                            placeholder="Search" 
                            onChange={handleChange}
                        />
                        <div className="search-box">
                            <button type="submit" className="w3-gray w3-button">
                                Search
                            </button>
                        </div>
                    </form>
                </div>
        </div>
    )
    

}
export default Header;