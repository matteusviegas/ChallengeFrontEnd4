import React from 'react';

interface ButtonProps {
  onClick: () => void;
  label: string;       
  type?: 'button' | 'submit' | 'reset'; 
  className?: string;  
}

const Button: React.FC<ButtonProps> = ({ onClick, label, type = 'button', className }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default Button;
