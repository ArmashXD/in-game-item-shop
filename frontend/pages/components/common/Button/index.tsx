import React from 'react'

interface ButtonProps {
  onClick?: () => void; 
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, className, children,  ...props }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
