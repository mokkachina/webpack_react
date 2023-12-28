import React, {useState} from "react";
import "../styles/Header.css"





function Header(){
    let buttonName = "Some button";
    let [count, setNewCount ] = useState(  0 )
    const handleClick = e => {
        setNewCount(count + 1);
    }
    return(
        <header>This is header
            <button className="btn" onClick={handleClick}>{buttonName}, {count}</button>
        </header>
    )
}
export default Header;