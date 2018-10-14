/* Modules */
import React, { Component } from 'react';

/* Styles */
import './Title.css';

class Title extends Component {
    state = {}

    render() {
        const { props: { tag, children, center, bold } } = this;

        return (
            React.createElement(tag, {className: `Title ${center ? "-center" : ""} ${bold ? "-bold" : ""}`}, `${children}`)
        )
    }
}

export default Title;