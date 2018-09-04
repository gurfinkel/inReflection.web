import React from 'react';

import NavBar from './NavBar';
import LogoPicture from './logo.png';

import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    const logo = {
      src: LogoPicture,
      alt: 'Logo',
    };

    const title = {
      href: '/',
      text: 'inReflection',
    };

    const headerItems = [
      {
        id: 1,
        href: '/',
        message: messages.home,
      },
      {
        id: 2,
        href: '/features',
        message: messages.features,
      },
    ];

    return <NavBar logo={logo} title={title} items={headerItems} />;
  }
}

export default Header;
