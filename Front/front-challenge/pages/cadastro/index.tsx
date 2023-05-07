import { Layout } from '../../components/Layout'
import Image from 'next/image'
import inicial from '../assets/inicial.svg'
import Button2 from '../../components/Button2'
import Input from '../../components/input'


const Home = () => {
    return (
        <Layout title={'Home'}>
            <div className='flex flex-col flex-1 items-center text-center h-full w-full bg-[0F0F0F]'>
                <div className='mt-[15%] w-full px-6'>
                    <div className=' text-[#fff] text-md mx-auto px-7 text-center'>
                        <h3 >Cadastre-se</h3>
                    </div>
                    <Input  type="nome" placeholder="Nome" />
                    <Input type="cpf" placeholder="CPF" />
                    <Input type="e-mail" placeholder="Digite seu Email" />
                    <Input type="password" placeholder="Senha" />
                    <Input type="password" placeholder="Confirmar senha" />
                </div>
                <div className='mt-10 text-[#8FA2B7] text-sm mx-7 px-2 text-left'>
                    <p>Ao prosseguir, você concorda com estes <span className='text-[#468C19]'>Termos e Condições.</span> </p>
                </div>
                <div className='w-full px-10 mt-10'>
                <Button2 text='Create a New Account' />
                    
                </div>
                




            </div>
        </Layout>
    )

}

export default Home