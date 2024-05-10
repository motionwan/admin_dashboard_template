import DesktopSidebar from '../Sidebar/Desktop/Sidebar';
import { LayoutContainer, MainSection } from './Layout.styles';
import Navbar from './Navbar/Navbar';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <DesktopSidebar />
      <Navbar />
      <MainSection>{children}</MainSection>
    </LayoutContainer>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
