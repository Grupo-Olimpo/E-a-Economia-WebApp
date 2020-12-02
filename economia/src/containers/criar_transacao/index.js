import React, { Component } from 'react';
import { Fade } from "react-reveal";
import { Card, CardActions, CardContent, Button, OutlinedInput } from '@material-ui/core';
import history from '../../history';
import Header from '../../components/header'


export default class CriarTransacao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            descricao: '',
            data: '',
            valor: '',
        }
    }

    onInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleClick() {
        this.createTransacao(this.state)
    }
    async createTransacao(values) {
        const { nome, descricao, data, valor } = values;
        //envia informação para o back
        const response = fetch('http://localhost:8080/api/user', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nome),
        });
        if (response) {
            console.log('Transacao criada!')
            history.push('/app')
        } else {
            console.log('Transacao não criada!')
        }
    }
    handleCancel() {
        history.push('/app')
    }

    render() {
        return (
            <Fade>
                <Header />
                <Card className='root' variant="outlined">
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
                        <Button onClick={() => this.handleClick()} size="small">Criar</Button>
                        <Button onClick={() => this.handleCancel()} size="small">Cancelar</Button>
                    </CardActions>
                    </div>
                </Card>
            </Fade>
        );
    }
}