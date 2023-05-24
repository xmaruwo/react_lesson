// Reactをインポート
import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-inner'>
          <div className='footer-logo'>Sites Learned：<b>Progate</b>
            <p>Created based on React learning lessons.</p>
          </div>
          <ul className='footer-list'>
            <li>XXXX</li>
            <li>XXX</li>
            <li>XXXXX</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
