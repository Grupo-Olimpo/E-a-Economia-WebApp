/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Fade,
  OutlinedInput,
} from '@material-ui/core';
import React, { FormEvent, useState, useEffect } from 'react';
import Header from '../../components/Header';
import Transaction from '../../components/Transaction';
import api from '../../services/api';

import { Container } from './styles';

interface ITransactionCard {
  id: number;
  userId: number;
  name: string;
  description: string;
  date: string;
  amount: number;
}

const Dashboard: React.FC = () => {
  const [cardForm, setCardForm] = useState({
    nome: 'Teste',
    valor: 'Teste',
    data: 'Teste',
    descricao: 'Teste',
  });
  const [transactionDetails, setTransactionDetails] = useState<
    ITransactionCard[]
  >([]);
  useEffect(() => {
    api.get('transaction', { data: { userId: 1 } }).then((response) => {
      const transactions = response.data;
      setTransactionDetails([...transactionDetails, transactions]);
    });
  }, [transactionDetails]);
  function handleClick() {}

  // transacaoDetails.sort(function (a, b) {
  //   if (a.data > b.data) {
  //     return 1;
  //   }
  //   if (a.data < b.data) {
  //     return -1;
  //   }
  //   // a must be equal to b
  //   return 0;
  // });
  return (
    <Container>
      <Header></Header>
      <Fade>
        <Card variant="outlined">
          <div className="form-item">
            <CardContent>
              <OutlinedInput
                value={cardForm.nome}
                onChange={(e) =>
                  setCardForm({ ...cardForm, nome: e.target.value })
                }
                placeholder="Nome"
                color="secondary"
                required={true}
              />
              <OutlinedInput
                value={cardForm.valor}
                onChange={(e) =>
                  setCardForm({ ...cardForm, valor: e.target.value })
                }
                placeholder="Valor"
                color="secondary"
                required={true}
              />
              <OutlinedInput
                value={cardForm.data}
                onChange={(e) =>
                  setCardForm({ ...cardForm, data: e.target.value })
                }
                placeholder="Data"
                color="secondary"
                required={true}
              />
              <OutlinedInput
                value={cardForm.descricao}
                onChange={(e) =>
                  setCardForm({ ...cardForm, descricao: e.target.value })
                }
                placeholder="Descrição"
                color="secondary"
                required={true}
              />
            </CardContent>

            <CardActions>
              <Button onClick={handleClick} size="small">
                Criar
              </Button>
              <Button onClick={handleClick} size="small">
                Cancelar
              </Button>
            </CardActions>
          </div>
        </Card>
      </Fade>
      {transactionDetails &&
        transactionDetails.map((experience) => {
          return (
            <Transaction
              nome={experience.name}
              descricao={experience.description}
              data={experience.date}
              valor={experience.amount}
              key={experience.id}
            />
          );
        })}
    </Container>
  );
};

export default Dashboard;
