import React from 'react';
import "./Sidenav.css";

function Sidenav() {
    return (
            <div className="sidenav open">
                <div className="sidenav-items">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#home">About</a></li>
                        <li><a href="#home">Explore</a></li>
                    
                </div>
            </div>
          )
}
export default Sidenav;