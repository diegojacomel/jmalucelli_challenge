/* Modules */
import React, { Component } from 'react';

/* Components */
import Container from '../../components/Container/Container';
import Icon from '../../components/Icon/Icon';

/* Images */
import images from '../../images/images';

/* Styles */
import './Header.css';

class Header extends Component {
    state = {}

    render() {
        return (
            <header className="Header">
                <Container className="Header-grid">
                    <div className="Header-grid-initial">
                        <Icon tag="chart" />
                        <div className="Header-grid-initial-info">
                            <div>
                                Nova cotação
                            </div>
                            <div>
                                #0980
                            </div>
                        </div>
                    </div>
                    <figure className="Header-thumb">
                        <img src={images.user} alt="Thumbnail avatar" />
                    </figure>
                </Container>
            </header>
        );
    }
}

export default Header;