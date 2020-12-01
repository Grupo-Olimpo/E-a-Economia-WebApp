import React, { Component } from 'react';
import { Skeleton } from '@material-ui/core';

import Header from '../../components/header'
import Transacao from '../../components/transacao'
import BotaoTransacao from '../../components/botao_transacao'


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lista: false
        };
        this.getTransacoes()
        this.transacaoDetails = [{
            nome: 'nome',
            valor: '500,00',
            descricao: 'descricao',
            data: '27/10/2020'
        }, {
            nome: 'nome',
            valor: '500,00',
            descricao: 'descricao',
            data: '20/10/2020'
        }, {
            nome: 'nome',
            valor: '500,00',
            descricao: 'descricao',
            data: '25/10/2020'
        }, {
            nome: 'nome',
            valor: '500,00',
            descricao: 'descricao',
            data: '22/10/2020'
        }]

        this.transacaoDetails.sort(function (a, b) {
            if (a.data > b.data) {
                return 1;
            }
            if (a.data < b.data) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
    }

    async getTransacoes() {
        const response = fetch('http://localhost:8080/api/user', {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(),
        });
        if (response) {
            this.state.lista = true;
        } else {
            alert('Informações não coletadas!');
        }
    }
    render() {
        return (
            <div>
                <Header />
                {this.transacaoDetails.map(experience => {
                    return (
                        <Transacao
                            transacaoDetails={{
                                nome: experience.nome,
                                descricao: experience.descricao,
                                data: experience.data,
                                valor: experience.valor,
                            }}
                        />
                    );
                })}
                    < BotaoTransacao />
            </div>
        );
    }

}