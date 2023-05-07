// Importa o hook useState do React, o componente Layout do diretório ../components, a biblioteca Image do Next.js, o componente Button2 do diretório ../components, o componente Input do diretório ../components e a biblioteca axios
import { useState } from 'react';
import { Layout } from '../../components/Layout';
import Image from 'next/image';
import Button2 from '../../components/Button2';
import Input from '../../components/input';
import axios from 'axios';
import { useRouter } from 'next/router';

// Define a função Home
const Home = () => {

    const router = useRouter();

  const handleRedirect = () => {
    router.push('../cadastro');
  };
  
  // Define quatro estados para armazenar o valor dos campos name, cpf, email e password. Inicialmente, eles estão vazios
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Define quatro funções para atualizar os estados quando os campos correspondentes forem modificados
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  
  const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // Define a função handleRegister, que será executada quando o botão de registro for clicado. Essa função envia uma requisição POST para o servidor com os dados do formulário
  const handleRegister = () => {
    const data = {
      name,
      cpf,
      email,
      password,
    };
    console.log(data)
    axios.post('http://localhost:3000/register', data)
      .then(response => {
        alert('Registro realizado com sucesso!');
      })
      .catch(error => {
        console.error(error);
        alert('Ocorreu um erro durante o registro.');
      });
  };

  return (
    <Layout title={'Home'}>
      <div className='flex flex-col flex-1 items-center text-center h-full w-full bg-[black]'>
        <div className='mt-[15%] w-full px-6'>
          <div className=' text-[#fff] text-md mx-auto px-7 text-center'>
            <h3>Cadastre-se</h3>
          </div>
          <Input name='nome' type="text" placeholder="Nome" value={name} onChange={handleNameChange} />
          <Input name='cpf' type="text" placeholder="CPF" value={cpf} onChange={handleCpfChange} />
          <Input name='email' type="email" placeholder="Digite seu Email" value={email} onChange={handleEmailChange} />
          <Input name='senha' type="password" placeholder="Senha" value={password} onChange={handlePasswordChange} />
        </div>
        <div className='mt-10 text-[#8FA2B7] text-sm mx-7 px-2 text-left'>
          <p>Ao prosseguir, você concorda com estes <span className='text-[#468C19]'>Termos e Condições.</span> </p>
        </div>
        <div className='w-full px-10 mt-10'>
          <Button2 text='Criar conta' onClick={handleRegister} backgroundColor='bg-[#468C19]' />
        </div>
      </div>
    </Layout>
  );
};

export default Home;