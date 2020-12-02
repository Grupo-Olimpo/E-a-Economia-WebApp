import React, { Component } from 'react';
import { Card, CardActions, CardContent, Button, OutlinedInput} from '@material-ui/core';
import { Fade } from "react-reveal";
import history from '../../history';

export default class EditaTransacao extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.transacaoDetails;
    }

    onInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleClick() {
        this.editaTransacao(this.state)
    }
    async editaTransacao(values) {
        const { nome, descricao, data, valor } = values;
        //envia informação para o back
        const response = fetch('http://localhost:8080/api/user', {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nome),
        });
        if (response) {
            console.log('Transacao editada!')
            history.push('/app')
        } else {
            console.log('Transacao não editada!')
        }
    }
    handleCancel() {
        history.push('/app')
    }
    render() {

        return (
            <Fade top duration={1000} distance="20px">
                < Card className='root' variant="outlined" >
                    <div className="form-item">
                        <CardContent>
                            <OutlinedInput
                                value={this.state.nome}
                                onChange={this.onInputChange}
                                placeholder="Nome"
                                color="secondary"
                                required={true}
                            />
                            <OutlinedInput
                                value={this.state.valor}
                                onChange={this.onInputChange}
                                placeholder="Valor"
                                color="secondary"
                                required={true}
                            />
                            <OutlinedInput
                                value={this.state.data}
                                onChange={this.onInputChange}
                                placeholder="Data"
                                color="secondary"
                                required={true}
                            />
                            <OutlinedInput
                                value={this.state.descricao}
                                onChange={this.onInputChange}
                                placeholder="Descrição"
                                color="secondary"
                                required={true}
                            />
                        </CardContent>

                        <CardActions>
                            <Button onClick={() => this.handleClick()} size="small">Editar</Button>
                            <Button onClick={() => this.handleCancel()} size="small">Cancelar</Button>
                        </CardActions>
                    </div>
                </Card >
            </Fade>
        );
    }
}