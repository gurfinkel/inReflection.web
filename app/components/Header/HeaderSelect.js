import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../../colors';

import MenuItem from './MenuItem';
import MenuHeader from './MenuHeader';

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

class HeaderSelect extends React.PureComponent {
  constructor(props) {
    super();

    this.state = {
      value: props.messages[props.value],
    };

    this.onOptionSelectHandle = this.onOptionSelectHandle.bind(this);
  }

  onOptionSelectHandle = e => {
    this.props.onToggle(e);
    this.setState({ value: this.props.messages[e.value] });
  };

  render() {
    let content = '<option>--</option>';

    if (this.props.values) {
      content = this.props.values.map(value => (
        <MenuItem
          key={`item-${value}`}
          onOptionSelect={this.onOptionSelectHandle}
          value={value}
          message={this.props.messages[value]}
        />
      ));
    }

    return (
      <ContainerStyled>
        <MenuHeader value={this.state.value} />
        <MenuContainerStyled>{content}</MenuContainerStyled>
      </ContainerStyled>
    );
  }
}

HeaderSelect.defaultProps = {
  theme: {
    colorBackgroundHeader: colors.colorBackgroundHeader,
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
