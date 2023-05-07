import React from 'react';

type Props = {
  text: string;
  onClick?: () => void;
  backgroundColor?: string; // nova propriedade
}

const Button2: React.FC<Props> = ({ text, onClick = () => {}, backgroundColor = '#468C19' }) => {
  return (
    <button
      onClick={onClick}
      className={`${backgroundColor} hover:bg-green-600 focus:bg-green-600 rounded-2xl text-white py-3 px-4 w-full`}
    >
      {text}
    </button>
  );
}

export default Button2;