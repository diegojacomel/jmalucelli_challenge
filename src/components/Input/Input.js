/* Modules */
import React, { Component } from 'react';
import MaskedInput from 'react-text-mask';

/* Styles */
import './Input.css';

class Input extends Component {
    state = {}

    render() {
        const { props: { label, id, name, type, onChange, mask, otherProps } } = this;

        return (
            <div className="Input">
                <label>
                    {label}
                </label>
                <MaskedInput
                    id={id}
                    name={name}
                    type={type}
                    onChange={onChange}
                    mask={mask}
                    {...otherProps}
                />
            </div>
        );
    }
}

export default Input;