import styled from 'styled-components';
import colors from '../../colors';

const APPBAR_HEIGHT = '48px';

const NavBar = styled.div`
  align-content: center;
  align-items: center;
  background-color: ${props => props.theme.colorBackgroundHeader};
  display: flex;
  height: ${APPBAR_HEIGHT};
`;

NavBar.defaultProps = {
  theme: {
    colorBackgroundHeader: colors.colorBackgroundHeader,
  },
};

export default NavBar;
