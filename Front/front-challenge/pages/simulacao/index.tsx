import { Layout } from '../../components/Layout'
import Image from 'next/image'
import inicial from '../../assets/inicial.svg'
import Button from '../../components/Button'
import Button2 from '../../components/Button2'

const Simulacao = () => {
  return (
    <Layout title={'Home'}>
      <div className='bg-black h-[600px] '>
        <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-[#A1FB68] via-[#A1FB68] to-[#468C19] p-6 mb-10">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="text-4xl leading-10 text-black font-bold">E-commerce</span>
          </div>
        </nav>

        {/* Carrinho */}
        <div className="fixed inset-y-0 right-0 w-1/4 bg-white shadow-lg rounded-l-3xl pd-10">
            <div className="flex items-center justify-between py-4 px-6">
                <h1 className="text-lg font-semibold">Meu Carrinho</h1>
                <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="10%" height="10%">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
                </svg>
            </div>
            <div className="m-5 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <div className="w-4/5">
                    <p className="text-xl font-medium text-black">Produto</p>
                    <p className="text-slate-500">Categoria</p>
                </div>
                <p className="text-slate-400 text-xs">Produto adicionado ao carrinho!</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
                <Button2 text='Finalizar minha compra' />
            </div>
        </div>

        {/* Dropdown */}
        <div className="px-10 py-2">
            <div className='mb-10'>
                <label htmlFor="select1" className="text-white font-semibold block mb-1">Selecione a categoria:</label>
                <select data-te-select-init className='w-[70%] rounded-md bg-black text-white bg-[#1E1E1E] border-grey'>
                    <optgroup label="Bens de Consumo">
                        <option value="1" className='text-white'>Arroz 1</option>
                        <option value="2">Arroz 2</option>
                        <option value="3">Peixe</option>
                        <option value="4">Carne Bovina</option>
                    </optgroup>
                    <optgroup label="Infraestrutura">
                        <option value="4">Painel-Solar</option>
                        <option value="5">Lampada LED</option>
                        <option value="6">Six</option>
                    </optgroup>
                </select>
                <label htmlFor="select1" className="text-white font-semibold block mb-1">Selecione o produto:</label>
                <select data-te-select-init className='w-[70%] rounded-md bg-black text-white bg-[#1E1E1E] border-grey'>
                    <optgroup label="Bens de Consumo">
                        <option value="1" className='text-white'>Arroz 1</option>
                        <option value="2">Arroz 2</option>
                        <option value="3">Peixe</option>
                        <option value="4">Carne Bovina</option>
                    </optgroup>
                    <optgroup label="Infraestrutura">
                        <option value="4">Painel-Solar</option>
                        <option value="5">Lampada LED</option>
                        <option value="6">Six</option>
                    </optgroup>
                </select>
            </div>
            <div className='w-[20%] right-0'>
                <Button2 text='Adicionar ao carrinho' />
            </div>
            
        </div>
        
      </div>
    </Layout>
  )
}

export default Simulacao
