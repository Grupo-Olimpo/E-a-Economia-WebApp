import React, { Component } from 'react';
import "./styles.css";
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Fade } from "react-reveal";
import EditaTransacao from '../edita_transacao'

export default class Transacao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transacaoDetails: this.props.transacaoDetails,
            showComponent: false,
        }
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick() {
        this.setState({
            showComponent: true,
        });
    }

    render() {
        return (
            <div>
                <Fade top duration={1000} distance="20px">
                    <Card className='root' variant="outlined">
                        <CardContent>
                            <Typography className='title' color="textSecondary" gutterBottom>
                                {this.state.transacaoDetails.nome}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                R${this.state.transacaoDetails.valor}
                            </Typography>
                            <Typography className='pos' color="textSecondary">
                                {this.state.transacaoDetails.data}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {this.state.transacaoDetails.descricao}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={this._onButtonClick}>Editar</Button>
                            <Button size="small">Deletar</Button>
                        </CardActions>
                    </Card>
                </Fade>
                {
                    this.state.showComponent ?
                        <EditaTransacao transacaoDetails={this.state.transacaoDetails} /> :
                        null
                }
            </div>
        );
    }
}