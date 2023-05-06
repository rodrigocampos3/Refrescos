import { Layout } from '../components/Layout'
import Image from 'next/image'
import inicial from '../assets/inicial.svg'
import Button from '../components/Button'
const Ind = () => {
  return (
    <Layout title={'Home'}>
      <div className='flex flex-col flex-1 items-center text-center h-full w-full bg-black'>
        <div className='pr-20'>
          <Image
            width={250}
            src={inicial}
            height={200}
            alt='teste'
          />
        </div>
        <div className='text-left px-3'>
          <p className='text-[48px] leading-[50px] text-[#6EDA2A] font-bold'>The most secure crypto wallet.</p>
          <p className='text-[#8A929A] text-lg pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
          <div className='mt-20'>
            <Button text='Create a New Account' />
          </div>



        </div>


      </div>
    </Layout>
  )

}

export default Ind