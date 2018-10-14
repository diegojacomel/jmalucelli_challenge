/* Modules */
import React, { Component } from 'react';

/* Styles */
import './Icon.css';

class Icon extends Component {
    state = {}

    render() {
        const { props: { tag, alignCenter, className } } = this;

        return (
            <div className={`Icon ${alignCenter ? "-center" : ""} ${className}`}>
                <span className={`icon-${tag}`}></span>
            </div>
        );
    }
}

export default Icon;