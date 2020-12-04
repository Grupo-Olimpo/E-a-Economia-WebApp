import * as yup from 'yup';

export default yup.object().shape<{ email: any; password: any }>({
  email: yup
    .string()
    .email('E-mail tem formato inválido')
    .required('Informe o E-mail'),
  password: yup.string().required('Informe uma senha'),
});
