import styled from 'styled-components';
import PropTypes from 'prop-types';

import colors from '../../colors';

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 3em 0;
  border-top: 1px solid #666;
  background-color: ${props => props.theme.colorBackgroundHeader};
`;

Wrapper.defaultProps = {
  theme: {
    colorBackgroundHeader: colors.colorBackgroundHeader,
  },
};

Wrapper.propTypes = {
  theme: PropTypes.object,
};

export default Wrapper;
