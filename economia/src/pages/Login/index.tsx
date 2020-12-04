import { Formik } from 'formik';
import React from 'react';
import { FiArrowRight, FiLock, FiMail } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import EconomiaLogo from '../../assets/img/logo.png';
import Input from '../../components/Input';
import * as Yup from 'yup';
import schema from './Validators/schema';

import {
  Container,
  Background,
  Content,
  FormContainer,
  ButtonSignIn,
  ButtonSignUp,
} from './styles';
import api from '../../services/api';

interface ILoginData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const history = useHistory();
  async function handleSubmit(data: ILoginData) {
    try {
      const response = await api.post(`login`, data);
      localStorage.setItem('@Economia', response.data.name);
      history.push('/app');
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
            initialValues={{ email: '', password: '' }}
            validationSchema={schema}
            onSubmit={async (values, { setSubmitting }) => {
              setSubmitting(true);
              const response = await handleSubmit({
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
                  name="email"
                  value={values.email}
                  icon={FiMail}
                  error={errors.email}
                  touched={touched.email || false}
                  type={'email'}
                  placeholder="E-mail"
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
                  placeholder="Senha"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ButtonSignIn type="submit" disabled={isSubmitting}>
                  ENTRAR
                  <FiArrowRight size={20} />
                </ButtonSignIn>
              </form>
            )}
          </Formik>
          <Link to="/cadastro">
            <ButtonSignUp>CADASTRAR</ButtonSignUp>
          </Link>
        </FormContainer>
      </Content>
    </Container>
  );
};

export default Login;
