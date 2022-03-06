import React from "react";

function Step(props) {
  
    return (
        <input 
            value={props.stepValue}
            type="number"
            onChange={(e) => props.changeStep(e.target.value)}
        />
    );

}

export default Step;