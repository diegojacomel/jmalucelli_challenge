/* Modules */
import React, { Component } from 'react';

/* Components */
import Container from '../../components/Container/Container';
import Icon from '../../components/Icon/Icon';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';

/* Styles */
import './InitialPage.css';

class InitialPage extends Component {
    state = {}

    render() {
        return (
            <Container className="InitialPage">
                <Icon tag="chart" alignCenter />
                <Title tag="h1" center bold>
                    Cotação de seguros
                </Title>
                <Title tag="h2" center>
                    Solução inovadora da líder de mercado
                </Title>
                <Button
                    color="primary"
                    icon={"arrow-right"}
                    to="quote"
                    block 
                >
                    Iniciar
                </Button>
            </Container>
        );
    }
}

export default InitialPage;