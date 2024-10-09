import React from 'react'
import Link from 'next/link'

interface LinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    [key: string]: any; // Allows for other props
  }

const Links: React.FC<LinkProps> = ({ href, children, className = '', ...props }) => {
    
    return (
      <Link href={href} passHref className={` ${className}`} {...props}>
          {children}
      </Link>
    );
  };

  export default Links;