import React, { Component } from 'react';

let intervalId = null; 

export class Hint extends Component {
    state = {
        counter: 0,
        intervalId: null,
    };

    componentDidMount() {
        intervalId = setInterval(() => {
            this.setState((prevState) =>({ counter: prevState.counter + 1}))
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(intervalId);
    }

    render() {
        const { counter } = this.state;
        return <div>Filter it {counter}</div>
    }
};