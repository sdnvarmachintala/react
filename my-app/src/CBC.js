import React, { Component } from 'react';
import Button from "./Button"; // Import the Button component

export default class CBC extends Component {
    constructor(props) {
        super(props)
        // Step 1: Initialize state  
        this.state = {
            count: 0
        }
    }
    
    // Step 2: Function to increment count
    incrementCount = () => {
        this.setState({ count: this.state.count + 1 });
    };

    showAlert = () => {
        alert("Haiii");
    }
    render() {
        return (
        <div>
            <p>This is a class based component {this.props.value}</p>
            <p><button onClick={this.incrementCount}>Click</button></p>
            <h2>Counter: {this.state.count}</h2>
            <p>
                {/* Pass showAlert function to Button component */}
                <Button onClick={this.showAlert} label="CBC Pop Up" />
            </p>
        </div>
        );
    }
}

