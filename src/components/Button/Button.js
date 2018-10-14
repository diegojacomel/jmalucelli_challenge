/* Modules */
import React, { Component, Fragment } from 'react';

/* Components */
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';

/* Styles */
import './Button.css';

class Button extends Component {
    state = {}

    render() {
        const { props: { children, block, icon, to, color, disabled, type } } = this;

        return (
            <Fragment>
                {to
                    ?
                    <Link to={to} disabled={disabled} type={type} className={`Button ${block ? "-block" : ""} ${color ? "-" + color : ""}`}>
                        {children}
                        {icon
                            ?
                            <Icon tag={icon} />
                            :
                            null
                        }
                    </Link>
                    :
                    <button disabled={disabled} type={type} className={`Button ${block ? "-block" : ""} ${color ? "-" + color : ""}`}>
                        {children}
                        {icon
                            ?
                            <Icon tag={icon} />
                            :
                            null
                        }
                    </button>
                }
            </Fragment>
        );
    }
}

export default Button;