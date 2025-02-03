import React, { Component } from 'react';

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
    render(props) {
        return (
        <div>
            <p>This is a class based component {this.props.value}</p>
            <p><button onClick={this.incrementCount}>Click</button></p>
            <h2>Counter: {this.state.count}</h2>
        </div>
        );
    }
}

