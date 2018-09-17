import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import colors from '../../colors';
import styleConst from '../../styleConstants';

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

const MenuContainerStyled = styled.div`
  position: absolute;
  margin-top: 24px;
  display: none;
  flex-direction: column;
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

function MenuItem(props) {
  return (
    <MenuItemStyled value={props.value} onClick={props.onOptionSelect}>
      <FormattedMessage {...props.message} />
    </MenuItemStyled>
  );
}

/* eslint-disable react/no-unused-prop-types */
MenuItem.propTypes = {
  onOptionSelect: PropTypes.func,
  value: PropTypes.string,
  message: PropTypes.object,
  target: PropTypes.object,
};

class HeaderSelect extends React.PureComponent {
  state = {
    open: null,
  };

  handleOpenCard = e => {
    this.setState({ open: e.target });
  };

  render() {
    let content = '<option>--</option>';

    if (this.props.values) {
      content = this.props.values.map(value => (
        <MenuItem
          key={`item-${value}`}
          onOptionSelect={this.handleOpenCard}
          value={value}
          message={this.props.messages[value]}
          target={this.state.open}
        />
      ));
    }

    return (
      <ContainerStyled>
        <MenuHeaderStyled
          value={this.props.value}
          onChange={this.props.onToggle}
        >
          <FormattedMessage {...this.props.messages[this.props.value]} />
        </MenuHeaderStyled>
        <MenuContainerStyled>{content}</MenuContainerStyled>
      </ContainerStyled>
    );
  }
}

HeaderSelect.defaultProps = {
  theme: {
    colorAccent: colors.colorAccent,
    colorBackgroundHeader: colors.colorBackgroundHeader,
    colorLink: colors.colorLink,
    colorTextHeader: colors.colorTextHeader,
    colorSecondaryButtonHover: colors.colorSecondaryButtonHover,
  },
};

/* eslint-disable react/no-unused-prop-types */
HeaderSelect.propTypes = {
  onToggle: PropTypes.func,
  values: PropTypes.array,
  value: PropTypes.string,
  messages: PropTypes.object,
  theme: PropTypes.object,
};

export default HeaderSelect;
