import styled from 'styled-components';
import PropTypes from 'prop-types';

import colors from '../../colors';

const Select = styled.select`
  display: inline-flex;
  padding: 0.25em 2em;
  margin: 1em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid ${props => props.theme.colorBorderMain};
  background: ${props => props.theme.colorBackgroundHeader};
  color: ${props => props.theme.colorTextHeader};

  &:active {
    background: ${props => props.theme.baseActiveColor};
    color: #fff;
  }

  &:hover {
    background: ${props => props.theme.baseHoverColor};
    color: ${props => props.theme.baseActiveColor};
  }
`;

Select.defaultProps = {
  theme: {
    baseActiveColor: colors.colorBorderMain,
    baseHoverColor: colors.baseHoverColor,
    colorBackgroundHeader: colors.colorBackgroundHeader,
    colorBorderMain: colors.colorBorderMain,
    colorTextHeader: colors.colorTextHeader,
  },
};

Select.propTypes = {
  theme: PropTypes.object,
};

export default Select;
