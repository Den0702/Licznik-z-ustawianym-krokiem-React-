import React, { useState } from 'react';
import './Counter.css';

import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
import Step from "./Step";

function Counter(props) {

    let [currentCounterValue, setCounterValue] = useState(props.initValue);

    const [step, setStep] = useState(1);//setting initial step value to 1

    const changeStep = (value) => {
        //console.log(value);
        setStep(+value);
        
    }

    //changeValue() { // ES5 method (no this context by default)
    const changeValue = (action) => { // ES6 method

        //prevState to jest obiekt this.state

        if (action === 'add') {
            currentCounterValue += step;
        } else if (action === 'reinit') {
            currentCounterValue = props.initValue;
        } else {
            currentCounterValue = 0;
        }

        setCounterValue(currentCounterValue);
        // console.log(`changeValue clicked!`);
    }

    return (
        <div className="counter">
            Counter:
            {/*  <span className="value">
                    {this.state.counterValue}
                </span> */}
            <Display displayValue={currentCounterValue} />
            <ButtonsPanel buttonMethod={changeValue} stepValue={step}/>
            <Step stepValue={step} changeStep={changeStep} />
        </div>
    );

}

export default Counter;

// function Counter(props) {

//     let randomNumber = Math.floor(Math.random() * (108 - 1 + 1) + 1);

//     return (
//         <div className="counter">
//             Counter:
//             <span className="value">
//                 {props.initValue}
//             </span>
//         </div>
//     );
// }

// export default Counter;

