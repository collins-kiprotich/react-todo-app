import React from 'react';
// eslint-disable-next-line
const Header = () => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '32px',
  };

  return (
    <header style={headerStyle}>
      <h1 style={{
        fontSize: '60px',
        fontWeight: '900',
        marginBottom: '48px',
        color: 'lightgrey',
        textTransform: 'lowercase',
        lineHeight: '48px',
        textAlign: 'center',
      }}
      >
        Todos
      </h1>
    </header>
  );
};

export default Header;