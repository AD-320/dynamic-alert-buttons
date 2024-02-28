import React from 'react';
import AlertButton from './AlertButton'; 

const Toolbar = () => {
  const buttons = [
    { message: 'Downloading!', children: 'Download File' },
    { message: 'Sharing!', children: 'Share Document' },
    { message: 'Submitting!', children: 'Submit Document' },
    // Add more button objects as needed
  ];

  return (
    <div>
      {buttons.map((button, index) => (
        <AlertButton key={index} message={button.message}>
          {button.children}
        </AlertButton>
      ))}
    </div>
  );
};

export default Toolbar;
