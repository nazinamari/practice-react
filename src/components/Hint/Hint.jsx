import React, { Component } from 'react';

let intervalId = null; 

export class Hint extends Component {
    state = {
        counter: 0,
        intervalId: null,
    };

    handleMouseMove = () => {
        console.log('moving');
    }

    componentDidMount() {
        intervalId = setInterval(() => {
            this.setState((prevState) =>({ counter: prevState.counter + 1}))
        }, 1000);

        window.addEventListener('mousemove', this.handleMouseMove);
    }
    componentWillUnmount() {
        clearInterval(intervalId);
        window.removeEventListener('mousemove', this.handleMouseMove);
    }

    render() {
        const { counter } = this.state;
        return <div>Filter it {counter}</div>
    }
};