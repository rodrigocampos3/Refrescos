import { Layout } from '../../components/Layout'
import Image from 'next/image'
import inicial from '../assets/inicial.svg'
import Button2 from '../../components/Button2'
import Input from '../../components/input'


const Home = () => {
    return (
        <Layout title={'Home'}>
            <div className='flex flex-col flex-1 items-center text-center h-full w-full bg-black'>
                <div className='mt-[30%] w-full px-6'>
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