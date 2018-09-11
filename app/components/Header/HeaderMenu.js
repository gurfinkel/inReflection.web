import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import colors from '../../colors';

const MenuItemStyled = styled(Link)`
  margin: 12px 1em 5px 1em;
  text-decoration: none;
  vertical-align: middle;
  position: relative;
  cursor: pointer;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: ${props => props.theme.colorTextHeader};
  transform: perspective(1px) translateZ(0);

  &:hover {
    animation: ${props => linkAnimation(props)} 0.2s ease-out forwards;
  }
`;

const MenuContainerStyled = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  margin-top: 24px;
  background-color: ${props => props.theme.colorBackgroundHeader};
`;

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;

  &:hover ${MenuContainerStyled} {
    display: flex;
  }
`;

function linkAnimation(props) {
  return keyframes`
    100% {
      color: ${props.theme.colorSecondaryButtonHover};
    }
  `;
}

function afterAnimation(props) {
  return keyframes`
    100% {
      border-color: ${props.theme.colorSecondaryButtonHover};
    }
`;
}

const beforeAnimation = keyframes`
  100% {
    transform: translateY(0);
  }
`;

const MenuHeaderStyled = styled.div`
  margin: 0 1em 1px 1em;
  text-decoration: none;
  display: inline-block;
  vertical-align: middle;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: ${props => props.theme.colorTextHeader};
  transform: perspective(1px) translateZ(0);

  &:after {
    box-sizing: border-box;
    height: 7px;
    width: 7px;
    border-style: solid;
    border-color: white;
    border-width: 0px 3px 3px 0px;
    transform: rotate(45deg);
    transition: border-width 150ms ease-in-out;
    content: '';
    margin: 5px;
    display: inline-flex;
  }

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    bottom: 0;
    height: 4px;
    background: ${props => props.theme.colorSecondaryButtonHover};
    transform: translateY(4px);
  }

  &:hover:before,
  :focus:before,
  :active:before {
    animation: ${beforeAnimation} 0.3s ease-out forwards;
  }

  &:hover:after,
  :focus:after,
  :active:after {
    animation: ${props => afterAnimation(props)} 0.2s ease-out forwards;
  }

  &:hover {
    animation: ${props => linkAnimation(props)} 0.2s ease-out forwards;
  }
`;

function HeaderMenu(props) {
  const content = props.items.map(item => (
    <MenuItemStyled key={`item-${item.id}`} to={item.url} message={item}>
      {item.defaultMessage}
    </MenuItemStyled>
  ));

  return (
    <ContainerStyled>
      <MenuHeaderStyled>{props.message.defaultMessage}</MenuHeaderStyled>
      <MenuContainerStyled>{content}</MenuContainerStyled>
    </ContainerStyled>
  );
}

HeaderMenu.defaultProps = {
  theme: {
    colorAccent: colors.colorAccent,
    colorBackgroundHeader: colors.colorBackgroundHeader,
    colorLink: colors.colorLink,
    colorTextHeader: colors.colorTextHeader,
    colorSecondaryButtonHover: colors.colorSecondaryButtonHover,
  },
};

/* eslint-disable react/no-unused-prop-types */
HeaderMenu.propTypes = {
  items: PropTypes.array,
  message: PropTypes.object,
  theme: PropTypes.object,
};

export default HeaderMenu;
