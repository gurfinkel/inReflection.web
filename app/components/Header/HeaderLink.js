import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import colors from '../../colors';

function linkAnimation(props) {
  return keyframes`
    100% {
      color: ${props.theme.colorSecondaryButtonHover};
    }
  `;
}

const beforeAnimation = keyframes`
  100% {
    transform: translateY(0);
  }
`;

const LinkStyled = styled(Link)`
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

  &:hover {
    animation: ${props => linkAnimation(props)} 0.2s ease-out forwards;
  }
`;

function HeaderLink(props) {
  return (
    <LinkStyled to={props.message.url}>
      <FormattedMessage {...props.message} />
    </LinkStyled>
  );
}

HeaderLink.defaultProps = {
  theme: {
    colorBackgroundHeader: colors.colorBackgroundHeader,
    colorTextHeader: colors.colorTextHeader,
    colorSecondaryButtonHover: colors.colorSecondaryButtonHover,
  },
};

HeaderLink.propTypes = {
  message: PropTypes.object,
  theme: PropTypes.object,
};

export default HeaderLink;
