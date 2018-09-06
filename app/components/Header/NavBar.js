import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LocaleToggle from 'containers/LocaleToggle';

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

const NavBarLeftPartStyled = styled.div`
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  display: flex;
`;

const NavBarCentralPartStyled = styled.div`
  justify-content: center;
  align-items: flex-end;
  flex: 1;
  display: flex;
`;

const NavBarRightPartStyled = styled.div`
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  display: flex;
`;

function NavBar(props) {
  const content = props.items.map(item => (
    <HeaderLink key={`item-${item.id}`} message={item} />
  ));

  return (
    <NavBarStyled>
      <NavBarLeftPartStyled>
        {props.logo && <Logo src={props.logo.src} alt={props.logo.alt} />}
        {props.title && (
          <LogoTitle href={props.title.url}>{props.title.text}</LogoTitle>
        )}
      </NavBarLeftPartStyled>
      <NavBarCentralPartStyled>{content}</NavBarCentralPartStyled>
      <NavBarRightPartStyled>
        {props.locale && <LocaleToggle />}
      </NavBarRightPartStyled>
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
  locale: PropTypes.bool,
  theme: PropTypes.object,
};

export default NavBar;
