import React, { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = (props) => {
  const { className, ...rest } = props;

  return (
    <input
      {...rest}
      className={`border border-10 text-white font-bold border-[#181E25] rounded-md bg-black py-4 px-3 my-4 text-sm leading-4 placeholder-[#94F258] focus:outline-none focus:ring-2 focus:ring-[#94F258] focus:border-[#94F258] w-full ${className}`}
    />
  );
};

export default Input;