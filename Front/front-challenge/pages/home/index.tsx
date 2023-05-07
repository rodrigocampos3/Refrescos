import { Layout } from '../../components/Layout'
import Image from 'next/image'
import inicial from '../../assets/inicial.svg'
import Button from '../../components/Button'
import BlackRectangle from '../../components/black_Rectangle'
import Rectangle from '../../components/rectangle_Options'
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';



const Home = () => {
  const [balance, setBalance] = useState(0);
  const [tx, setTx] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/userBalance/123456789');
        setBalance(response.data.total_amount_available); // renderizando apenas um valor primitivo
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/userTransactions/');
        setTx(response.data); // renderizando apenas um valor primitivo
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  const [responseData, setResponseData] = useState<any>(null);
  const walletId = '1234';

  const data = {
    // conteúdo do corpo da requisição
  };

  useEffect(() => {
    axios
      .post('http://localhost:8000/wallet/tx-history', data, {
        headers: {
          'x-wallet-id': walletId,
        },
      })
      .then((response: AxiosResponse<any>) => {
        setTx(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
console.log(tx)

  return (
    <Layout title={'Home'}>
      <div className='flex flex-col flex-1 items-center text-center h-full w-full bg-black'>
        <div className="bg-gradient-to-b from-[rgb(207,245,126)] to-[#468C19] rounded-3xl shadow-lg shadow-[#ffffff50] w-[370px] h-[270px]">
          <div className="text-white font-rubik font-small text-center mb-6 py-4">
          </div>
          <p className="text-black font-rubik font-small text-1xl text-center font-bold"> Toneladas Poupadas</p>
          <div>
            <p className="text-black font-medium font-rubik text-4xl text-center mb-12 py-">
              {balance} TON
            </p>
          </div>
          <BlackRectangle></BlackRectangle>
          <p>{responseData}</p>
        </div>
        <br></br>
        <h6 className="text-white font-rubik font-small text-center font-light" style={{ color: 'white', marginRight: '200px' }}>Histórico de transações: </h6>
        <Rectangle></Rectangle>
        <Rectangle></Rectangle>
        <Rectangle></Rectangle>
        <Rectangle></Rectangle>
      </div>
    </Layout>
  );
};

export default Home;