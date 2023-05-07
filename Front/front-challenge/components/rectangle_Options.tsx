import Image from "next/image";
import Crypto from '../assets/currency.svg'

const Rectangle = () => {
  return (
    <div className="flex items-center justify-between bg-black border-2 border-white rounded-3xl h-16 w-96 mt-5 px-6">
      <div className="flex items-center">
        <div className="relative w-8 h-8">
          <Image src={Crypto} alt="Bitcoin" layout="fill" />
        </div>
      </div>
      <div className="flex flex-col pl-10 justify-center text-center mr-auto">
        <p className="font-bold text-white">RFC</p>
        <p className="font-bold text-white">REFRESCO</p>
      </div>
      <div className="flex flex-col justify-center ml-auto">
        <p className="font-bold text-white">0.0019873</p>
        <p className="font-light text-white">BTGDol</p>
      </div>
    </div>
  );
};

export default Rectangle;