import { useSelector } from 'react-redux';
import {
  SidebarContainer,
  Sidebar,
  Logo,
  SidebarDivider,
  SidebarLinkContainer,
  SidebarLink,
  SidebarLinkIcon,
  SidebarLinkLabel,
} from '../Sidebar.styles'; // replace with your actual file path
import {
  SuperAdminDashboardArray,
  SuperAdminStoreArray,
  SuperAdminUserArray,
  SuperAdminOrderArray,
  SuperAdminMarketingArray,
} from '../Routes/SuperAdmin.Routes'; // replace with your actual file path
import { selectIsOpen } from '../../../redux/features/Sidebar/Sidebar.slice';

const Sidebar2 = () => {
  const isOpen = useSelector(selectIsOpen);

  const renderLinks = (array) => {
    return array.map((item, index) => (
      <SidebarLinkContainer key={index}>
        <SidebarLink
          to={typeof item.path === 'function' ? item.path(item.id) : item.path}
        >
          <SidebarLinkIcon>{item.icon}</SidebarLinkIcon>
          <SidebarLinkLabel>{item.label}</SidebarLinkLabel>
        </SidebarLink>
      </SidebarLinkContainer>
    ));
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <Sidebar isOpen={isOpen}>
        <Logo>{/* Your logo here */}</Logo>
        <SidebarDivider />
        {renderLinks(SuperAdminDashboardArray)}
        {renderLinks(SuperAdminStoreArray)}
        {renderLinks(SuperAdminUserArray)}
        {renderLinks(SuperAdminOrderArray)}
        {renderLinks(SuperAdminMarketingArray)}
      </Sidebar>
    </SidebarContainer>
  );
};

export default Sidebar2;
