import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Link({ to, children }) {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}
