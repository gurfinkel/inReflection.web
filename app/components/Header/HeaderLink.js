import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../../colors';

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

const UnderlineStyled = styled.div`
  margin: 3px 1em;
  flex: 1;
  display: flex;
  border-bottom: 3px solid ${props => props.theme.colorBackgroundHeader};
`;

const ContainerStyled = styled.div`
  flex-direction: column;
  &:hover ${UnderlineStyled} {
    border-bottom: 3px solid #41addd;
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
  },
};

HeaderLink.propTypes = {
  message: PropTypes.object,
  theme: PropTypes.object,
};

export default HeaderLink;
