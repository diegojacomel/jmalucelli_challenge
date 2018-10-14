/* Modules */
import React, { Component } from 'react';

/* Router */
import MyRouter from '../../router/router';
import { HashRouter } from 'react-router-dom';

/* Authentication */
import Authentication from '../../utils/Authentication';

/* Styles */
import './App.css';

class App extends Component {
    state = {}

    componentDidMount() {
        Authentication.setToken();
    }

    render() {
        return (
            <div className="App">
                <HashRouter>
                    <MyRouter />
                </HashRouter>
            </div>
        );
    }
}

export default App;