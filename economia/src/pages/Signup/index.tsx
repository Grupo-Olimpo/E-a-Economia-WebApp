import { Formik } from 'formik';
import React from 'react';
import { FiArrowRight, FiLock, FiMail, FiUser } from 'react-icons/fi';
import EconomiaLogo from '../../assets/img/logo.png';
import { Link, useHistory } from 'react-router-dom';
import Input from '../../components/Input';

import {
  Background,
  ButtonSignIn,
  Container,
  Content,
  FormContainer,
} from './styles';
import schema from './Validators/schema';
import api from '../../services/api';

interface ICadastroData {
  name: string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const history = useHistory();
  async function handleSubmit(data: ICadastroData) {
    try {
      const response = await api.post(`cadastro`, data);
      alert('Cadastro feito com sucesso');
    } catch (error) {
      alert('Não foi possivel fazer Login');
    }
  }
  return (
    <Container>
      <Background></Background>
      <Content>
        <img src={EconomiaLogo} alt="E-Conomia" />
        <FormContainer>
          <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={schema}
            onSubmit={async (values, { setSubmitting }) => {
              setSubmitting(true);
              const response = await handleSubmit({
                name: values.name,
                email: values.email,
                password: values.password,
              });
              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <Input
                  name="name"
                  value={values.name}
                  icon={FiUser}
                  error={errors.name}
                  touched={touched.name || false}
                  type={'text'}
                  placeholder="Digite seu nome"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Input
                  name="email"
                  value={values.email}
                  icon={FiMail}
                  error={errors.email}
                  touched={touched.email || false}
                  type={'email'}
                  placeholder="Digite seu e-mail"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Input
                  name="password"
                  icon={FiLock}
                  value={values.password}
                  error={errors.password}
                  touched={touched.password || false}
                  type="password"
                  placeholder="Digite sua senha"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ButtonSignIn type="submit" disabled={isSubmitting}>
                  CADASTRAR
                  <FiArrowRight size={20} />
                </ButtonSignIn>
              </form>
            )}
          </Formik>
          <Link to="/login">Voltar para o Login</Link>
        </FormContainer>
      </Content>
    </Container>
  );
};

export default Signup;
