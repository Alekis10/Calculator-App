import React from "react";
import "../index.css";

function Button( props ) {
    
function handleClick (event) {
    props.clickedNum(event);
};

return (
<button name={props.name} onClick={handleClick}>
    {props.name}
    {/* {console.log( props.name )} */}
</button>
);
}

export default Button;