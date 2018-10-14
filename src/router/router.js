/* Modules */
import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

/* Components */
import InitialPage from '../containers/InitialPage/InitialPage';
import Quote from '../containers/Quote/Quote';

/* Utils */
import Authentication from '../utils/Authentication';

/* Constants */
import { token } from '../utils/constants';

class MyRouter extends Component {
    state = {}

    componentDidMount() {
        this.checkIfLogged()
    }

    checkIfLogged = () => {
        const auth = Authentication.fetchToken();

        return auth === token;
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={InitialPage} />
                {this.checkIfLogged()
                    ?
                    <Route exact path="/quote" component={Quote} />
                    :
                    null
                }
            </Switch>
        )
    }
}

export default withRouter(MyRouter);