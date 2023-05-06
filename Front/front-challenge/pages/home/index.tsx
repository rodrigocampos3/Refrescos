import { Layout } from '../../components/Layout'
import Image from 'next/image'
import inicial from '../../assets/inicial.svg'
import Button from '../../components/Button'
const Home = () => {
    return (
        <Layout title={'Home'}>
            <div className='flex flex-col flex-1 items-center text-center h-full w-full bg-black'>
                <div className="bg-gradient-to-b from-[#CFF57E] to-[#2b6806] rounded-3xl shadow-lg shadow-[#ffffff50] w-full h-[270px]">
                    <div className="text-white font-bold text-3xl text-center mb-6">
                        <p>Tonelada poupada</p>
                    </div>
                    <div className="text-white font-medium text-lg text-center">
                        <p>ygduadgyssd</p>
                    </div>
                </div>
            </div>
        </Layout >
    )

}

export default Home