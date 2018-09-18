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

const MenuItemStyled = styled.div`
  margin: 12px 1em 5px 1em;
  text-decoration: none;
  vertical-align: middle;
  position: relative;
  cursor: pointer;
  font-family: ${styleConst.baseFontFamily};
  font-weight: ${styleConst.baseFontWeight};
  font-size: ${styleConst.baseFontSize};
  color: ${props => props.theme.colorTextHeader};
  transform: perspective(1px) translateZ(0);

  &:hover {
    animation: ${props => linkAnimation(props)} 0.2s ease-out forwards;
  }
`;

class MenuItem extends React.PureComponent {
  constructor() {
    super();

    this.onClickHandle = this.onClickHandle.bind(this);
  }

  onClickHandle = () => {
    this.props.onOptionSelect({ value: this.props.value });
  };

  render() {
    return (
      <MenuItemStyled onClick={this.onClickHandle}>
        <FormattedMessage {...this.props.message} />
      </MenuItemStyled>
    );
  }
}

MenuItem.defaultProps = {
  theme: {
    colorTextHeader: colors.colorTextHeader,
    colorSecondaryButtonHover: colors.colorSecondaryButtonHover,
  },
};

MenuItem.propTypes = {
  onOptionSelect: PropTypes.func,
  value: PropTypes.string,
  message: PropTypes.object,
  theme: PropTypes.object,
};

export default MenuItem;
