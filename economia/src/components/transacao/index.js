import React, { Component } from 'react';
import "./styles.css";
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Fade } from "react-reveal";

export default class Transacao extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.transacaoDetails;
    }

    render() {
        return (
            <Fade top duration={1000} distance="20px">
                <Card className='root' variant="outlined">
                    <CardContent>
                        <Typography className='title' color="textSecondary" gutterBottom>
                            {this.state.nome}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            R${this.state.valor}
                        </Typography>
                        <Typography className='pos' color="textSecondary">
                            {this.state.data}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {this.state.descricao}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Editar</Button>
                        <Button size="small">Deletar</Button>
                    </CardActions>
                </Card>
            </Fade>
        );
    }
}