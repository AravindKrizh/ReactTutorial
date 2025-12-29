import React from "react";
import "./Count.css";

function Count(){
    const[count]=React.useState(0);

    return(
        <div>
        <h2>Count:{count} </h2>
        <button>click
        </button>
        </div>
    );
}
export default Count;