import React, { Component } from 'react';

// export const Button = ({ type= 'button', children, disabled, onClick, id}) => {
//     return(
//         <button type={type} onClick={onClick} disabled={disabled}>
//             {children}
//         </button>
//     );
// };

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