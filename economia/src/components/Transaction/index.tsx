/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Fade,
  Typography,
} from '@material-ui/core';
import React from 'react';

import { Container } from './styles';

interface ITransactionCard {
  nome: string;
  valor: number;
  data: string;
  descricao: string;
}

const Transaction: React.FC<ITransactionCard> = ({
  nome,
  valor,
  data,
  descricao,
}) => {
  return (
    <Container>
      <Card className="root" variant="outlined">
        <CardContent>
          <Typography className="title" color="textSecondary" gutterBottom>
            {nome}
          </Typography>
          <Typography variant="h5" component="h2">
            R${valor}
          </Typography>
          <Typography className="pos" color="textSecondary">
            {data}
          </Typography>
          <Typography variant="body2" component="p">
            {descricao}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => {}}>
            Editar
          </Button>
          <Button size="small">Deletar</Button>
        </CardActions>
      </Card>
      {/* {this.state.showComponent ? (
        <EditaTransacao transacaoDetails={this.state.transacaoDetails} />
      ) : null} */}
    </Container>
  );
};

export default Transaction;
