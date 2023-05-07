import { Layout } from '../../components/Layout'
import Image from 'next/image'
import inicial from '../../assets/inicial.svg'
import Button from '../../components/Button'
import BlackRectangle from '../../components/black_Rectangle'
import Rectangle from '../../components/rectangle_Options'

const Home = () => {
    return (
        <Layout title={'Home'}>
            <br></br>
            <div className='flex flex-col flex-1 items-center text-center h-full w-full bg-black'>
                <div className="bg-gradient-to-b from-[rgb(207,245,126)] to-[#468C19] rounded-3xl shadow-lg shadow-[#ffffff50] w-[370px] h-[270px]">
                    <div className="text-white font-rubik font-small text-center mb-6 py-4">
                    </div>
                    <p className="text-black font-rubik font-small text-1xl text-center font-bold"> Toneladas Poupadas</p>
                    <div>
                        <p className="text-black font-medium font-rubik text-4xl text-center mb-12 py-">
                            44,346.95 TON
                        </p>
                    </div>
                    <BlackRectangle></BlackRectangle>
                </div>
                <br></br>
                <h6 className="text-white font-rubik font-small font-light" style={{color:'white', marginRight:'200px'}}>Histórico de transações: </h6>
                <Rectangle></Rectangle>
                <Rectangle></Rectangle>
                <Rectangle></Rectangle>
                <Rectangle></Rectangle>
            </div>
        </Layout >


    )

}

export default Home;