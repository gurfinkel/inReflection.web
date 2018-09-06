import PropTypes from 'prop-types';
import NormalA from 'components/A';

import colors from '../../colors';

const LogoTitle = NormalA.extend`
  padding: 1em;
  text-decoration: none;
  color: ${props => props.theme.colorTextHeader};
`;

LogoTitle.defaultProps = {
  theme: {
    colorTextHeader: colors.colorTextHeader,
  },
};

LogoTitle.propTypes = {
  theme: PropTypes.object,
};

export default LogoTitle;
