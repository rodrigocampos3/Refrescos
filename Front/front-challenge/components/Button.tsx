import React from 'react';

type Props = {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ text, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-[#A1FB68] via-[#468C19] to-[#A1FB68] rounded-2xl text-white py-3 px-4 w-full"
    >
      {text}
    </button>
  );
}

export default Button;