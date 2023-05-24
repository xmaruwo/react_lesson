// Reactをインポート
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className='header-logo'>
          <img src='./images/logo192.png' />
        </div>
      </div>
    );
  }
}

export default Header;
