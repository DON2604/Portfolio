import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear().toString();
  return (
    <div style={{ 
      backgroundColor: "white",
      padding: '5px',
      textAlign: 'center',
      position: 'relative',
      left: '0',
      bottom: '0',
      width: '100%',
      marginTop: '-65px', // Add margin-top to move the footer down
    }}>
      <p>&copy;  {currentYear} All rights reserved</p>
    </div>
  );
}

