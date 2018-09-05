import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import colors from '../../colors';

import HeaderLink from './HeaderLink';
import Logo from './Logo';
import LogoTitle from './LogoTitle';

const APPBAR_HEIGHT = '48px';

const NavBarStyled = styled.div`
  align-content: center;
  align-items: center;
  background-color: ${props => props.theme.colorBackgroundHeader};
  display: flex;
  height: ${APPBAR_HEIGHT};
`;

function NavBar(props) {
  const content = props.items.map(item => (
    <HeaderLink key={`item-${item.id}`} to={item.href}>
      <FormattedMessage {...item.message} />
    </HeaderLink>
  ));

  return (
    <NavBarStyled>
      {props.logo && <Logo src={props.logo.src} alt={props.logo.alt} />}
      {props.title && (
        <LogoTitle href={props.title.href}>{props.title.text}</LogoTitle>
      )}
      {content}
    </NavBarStyled>
  );
}

NavBar.defaultProps = {
  theme: {
    colorBackgroundHeader: colors.colorBackgroundHeader,
  },
};

/* eslint-disable react/no-unused-prop-types */
NavBar.propTypes = {
  logo: PropTypes.object,
  title: PropTypes.object,
  items: PropTypes.array.isRequired,
  theme: PropTypes.object,
};

export default NavBar;
