import * as yup from 'yup';

export default yup.object().shape<{ name: any; email: any; password: any }>({
  name: yup.string().required('Informe o nome'),
  email: yup
    .string()
    .email('E-mail tem formato inválido')
    .required('Informe o E-mail'),
  password: yup.string().required('Informe uma senha'),
});
