/* Modules */
import React, { Component } from 'react';

/* Components */
import Container from '../../components/Container/Container';
import Header from '../Header/Header';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';

/* Services */
import { cnpjService } from '../../services';

/* Masks */
import { normalizeCnpj } from '../../utils/masks';

/* Styles */
import './Quote.css';

class Quote extends Component {
    state = {
        cnpjValid: null,
        cnpjNumber: null
    }

    handleChange = async (e) => {
        String.prototype.replaceAll = function (target, replacement) {
            return this.split(target).join(replacement);
        };

        let value = e.target.value
        value = value.replaceAll('.', '').replaceAll('-', '').replaceAll('_', '').replaceAll('/', '');

        try {
            const { cnpjValid } = await cnpjService.validateCNPJ(value);

            this.setState({
                cnpjValid,
                cnpjNumber: value,
            })
        } catch (e) {
            this.setState({
                cnpjValid: false,
                cnpjNumber: value,
            })
        }
    }

    handleSubmit = (e, state) => {
        e.preventDefault()

        console.log(state.cnpjNumber)
    }

    render() {
        const { state } = this;

        return (
            <form onSubmit={(e) => this.handleSubmit(e, state)} className="Quote">
                <div>
                    <Header />
                    <Container>
                        <div className="Quote-search">
                            <div className="Quote-search-number">1</div>
                            <div className="Quote-search-text">Buscar por CNPJ ou empresa</div>
                        </div>
                        <div className="Quote-response">
                            <div className="Quote-response-title">
                                CNPJ / Empresa
                        </div>
                            <div className="Quote-response-wrap">
                                <div className="Quote-response-wrap-cnpj">
                                    {!!state.cnpjValid && state.cnpjNumber.length === 14
                                        ?
                                        normalizeCnpj(state.cnpjNumber)
                                        :
                                        <Input
                                            name="cnpj"
                                            type="text"
                                            onChange={(e) => this.handleChange(e)}
                                            mask={[/[0-9]/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
                                        />
                                    }
                                </div>
                                {state.cnpjValid !== null && state.cnpjNumber.length === 14
                                    ?
                                    state.cnpjValid
                                        ?
                                        <Icon tag="success" className="success" />
                                        :
                                        <Icon tag="error" className="error" />
                                    :
                                    null
                                }
                            </div>
                        </div>
                    </Container>
                </div>
                <Container>
                    <Button
                        type="submit"
                        color="secondary"
                        icon="arrow-right"
                        disabled={!state.cnpjValid}
                        block
                    >
                        OK
                    </Button>
                </Container>
            </form>
        );
    }
}

export default Quote;