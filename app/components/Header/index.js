import React from 'react';

import NavBar from './NavBar';
import LogoPicture from './logo.png';

import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    const logo = {
      alt: 'inReflection',
      src: LogoPicture,
    };

    const title = {
      text: 'inReflection',
      url: '/',
    };

    return <NavBar logo={logo} title={title} items={messages.items} locale />;
  }
}

export default Header;
