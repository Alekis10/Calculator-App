import React from "react";
import "../index.css";

function Button( props ) {
    
function handleClick (event) {
    props.clickedNum(event);
};

    return (
        <button className="btn-numbers" name={props.name} onClick={handleClick}>
            {props.name}
        </button>
        
        

);
}

export default Button;