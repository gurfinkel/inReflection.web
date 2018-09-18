import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import colors from '../../colors';
import styleConst from '../../styleConstants';

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
  font-family: ${styleConst.baseFontFamily};
  font-weight: ${styleConst.baseFontWeight};
  font-size: ${styleConst.baseFontSize};
  color: ${props => props.theme.colorTextHeader};
  transform: perspective(1px) translateZ(0);

  &:after {
    content: '';
    height: 7px;
    width: 7px;
    margin: 5px;
    display: inline-flex;
    box-sizing: border-box;
    border-style: solid;
    border-color: ${props => props.theme.colorTextHeader};
    border-width: 0px 3px 3px 0px;
    transform: rotate(45deg);
    transition: border-width 150ms ease-in-out;
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

function MenuHeader(props) {
  return (
    <MenuHeaderStyled>
      <FormattedMessage {...props.value} />
    </MenuHeaderStyled>
  );
}

MenuHeader.defaultProps = {
  theme: {
    colorTextHeader: colors.colorTextHeader,
    colorSecondaryButtonHover: colors.colorSecondaryButtonHover,
  },
};

/* eslint-disable react/no-unused-prop-types */
MenuHeader.propTypes = {
  value: PropTypes.object.isRequired,
  theme: PropTypes.object,
};

export default MenuHeader;
