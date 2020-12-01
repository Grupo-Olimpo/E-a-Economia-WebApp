import React, { Component } from 'react';
import history from '../../history';
import "./styles.css";
import { OutlinedInput, Button } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

export default class FormLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginDetails: this.props.loginDetails || '',
            name: '',
            email: '',
            password: '',
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmitForm() {
        this.props.onFormSubmit(this.state)
    }

    handleClick() {
        if (this.state.loginDetails.cadastro === true )
            history.push('/loginIn') 
        else 
            history.push('/signIn')
    }
    

    render() {
        return (
            <div>
                <form>
                    {this.state.loginDetails.cadastro === true && (
                        <div className="form-item">
                            <OutlinedInput
                                value={this.state.loginDetails.name}
                                onChange={this.onInputChange}
                                placeholder="Nome"
                                color="secondary"
                                required={true}
                            />
                        </div>
                    )}
                    <div className="form-item">
                        <OutlinedInput
                            value={this.state.loginDetails.email}
                            onChange={this.onInputChange}
                            placeholder="Email"
                            color="secondary"
                            required={true}
                        />
                        <OutlinedInput
                            value={this.state.loginDetails.password}
                            onChange={this.onInputChange}
                            id="standard-basic"
                            placeholder="Senha"
                            type="password"
                            required={true}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            endIcon={<ArrowRightIcon />}
                            onClick={() => this.onSubmitForm()}
                        >
                            {this.state.loginDetails.cadastro === true ?
                                'Cadastrar' :
                                'Entrar'}
                        </Button>

                        <Button
                            onClick={() => this.handleClick()} >
                            {this.state.loginDetails.cadastro === true ?
                                'Voltar ao login' :
                                'Cadastre-se aqui'}
                        </Button>
                    </div>

                </form>
            </div>
        );
    }
}
