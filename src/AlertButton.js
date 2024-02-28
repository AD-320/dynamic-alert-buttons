import React from 'react';

const AlertButton = ({ message, children }) => {
  const handleClick = () => alert(message || 'Action completed');

  return (
    <button onClick={handleClick}>
      {children || 'Click Here'} 
    </button>
  );
};

export default AlertButton;
