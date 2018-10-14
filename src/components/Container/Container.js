/* Modules */
import React, { Component } from 'react';

/* Styles */
import './Container.css';

class Container extends Component {
    state = {}

    render() {
        const { props: { children, className } } = this;

        return (
            <div className={`Container ${className}`} data-testid="test-container">
                {children}
            </div>        
        );
    }
}

export default Container;