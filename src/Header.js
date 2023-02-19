
function Header({inputValue, setInputValue}){
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = (event) =>{
        const updatedInputVal = setInputValue(inputValue)
        event.preventDefault();
        return updatedInputVal;
    }
    
    
    return (
        <div className="header d-flex align-items-center justify-content-space-between">
            <div className='header-left-items d-flex align-items-center mxy-30'>
                <button>
                    <div className='sidebar'>
                        <svg 
                                viewBox="0 0 24 24" 
                                preserveAspectRatio="xMidYMid meet" 
                                focusable="false" 
                                class="style-scope yt-icon pointer"
                                style={{ width: "45px", height: "45px" }}>
                                <g class="style-scope yt-icon">
                                    <path 
                                    d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z" 
                                    class="style-scope yt-icon">

                                    </path>
                                    </g>
                        </svg>
                    </div>
                </button>
                <div className="site-name">
                    <a href='#home'>REACT VIDEO PLAYER</a>
                </div>
            </div>
            <div className="header-middle-items d-flex align-items-center">
                <div className="input-box relative">
                    <form  onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    value={inputValue} 
                    className="search-box" 
                    placeholder="Search" 
                    onChange={handleChange}
                    />
                    <div className="search-box absolute d-flex align-items-right
                    justify-content-right">
                        <button type="submit">
                        Search</button>
                    </div>
                    </form>
                
                </div>
            </div>
        </div>
    )
    

}
export default Header;