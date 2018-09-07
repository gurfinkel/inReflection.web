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

const LinkStyled = styled(Link)`
  flex: 1;
  display: inline-flex;
  margin: 1em 1em 3px 1em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: ${props => props.theme.colorTextHeader};

  &:active {
    background: #41addd;
    color: #fff;
  }
`;

function underlineAnimation(props) {
  return keyframes`
    100% {
      border-color: ${props.theme.colorSecondaryButtonHover};
    }
  `;
}

const UnderlineStyled = styled.div`
  margin: 3px 1em;
  flex: 1;
  display: flex;
  border-bottom: 3px solid ${props => props.theme.colorBackgroundHeader};
`;

const ContainerStyled = styled.div`
  flex-direction: column;
  &:hover {
    ${/* sc-custom 'div' */ LinkStyled} {
      animation: ${props => linkAnimation(props)} 1s ease-in-out;
    }
    ${/* sc-custom 'p' */ UnderlineStyled} {
      animation: ${props => underlineAnimation(props)} 1s ease-in-out;
    }
  }
`;

function HeaderLink(props) {
  return (
    <ContainerStyled>
      <LinkStyled to={props.message.url}>
        <FormattedMessage {...props.message} />
      </LinkStyled>
      <UnderlineStyled />
    </ContainerStyled>
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
