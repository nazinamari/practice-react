import React, { Component } from 'react';

export class Button extends Component {

    handleButtonClick = () => {
        const { onClick, id } = this.props;
        onClick(id);
    };

    render () {
        const { children } = this.props;
        return <button onClick={this.handleButtonClick}>{children}</button>;
    };
};