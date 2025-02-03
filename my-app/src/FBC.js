import React, { useState } from 'react';

export default function FBC(props) {
    // Step 1: Define a state variable
    const [count, setCount] = useState(0);

    // Step 2: Function to increment the count
    const incrementCount = () => {
        setCount(count + 1);
    };  
    return (
        <div>
        <p>This is function based component {props.value}</p>
        <p><button onClick={incrementCount}>Click</button></p>
        <h2>Counter: {count}</h2>
        </div>
    );
};
