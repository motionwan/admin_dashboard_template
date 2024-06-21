import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsOpen } from '../../../redux/features/Sidebar/Sidebar.slice';
import {
  SidebarContainer,
  Sidebar,
  Logo,
  SidebarDivider,
  SidebarLinkContainer,
  SidebarLink,
  SidebarLinkIcon,
  SidebarLinkLabel,
  SubLinksContainer,
  SubLink,
  SubLinkIcon,
  SubLinkLabel,
} from '../Sidebar.styles';
import {
  schoolManagementArray,
  superAdminSchoolArray,
  SuperAcademicArray,
  studentArray,
  administratorArray,
  accountingArray,
} from '../Routes/SuperAdmin.Routes';

const MainSidebar = () => {
  const [activeArray, setActiveArray] = useState(null);
  const isOpen = useSelector(selectIsOpen);

  const handleLinkClick = (arrayName) => {
    setActiveArray(activeArray === arrayName ? null : arrayName);
  };

  const renderLinks = (array, arrayName) => {
    return array.map((item, index) => (
      <React.Fragment key={index}>
        <SidebarLinkContainer>
          <SidebarLink onClick={() => handleLinkClick(arrayName)}>
            <SidebarLinkIcon>{item.icon}</SidebarLinkIcon>
            <SidebarLinkLabel>{item.label}</SidebarLinkLabel>
          </SidebarLink>
        </SidebarLinkContainer>
        {activeArray === arrayName && item.subLinks && (
          <SubLinksContainer>
            {item.subLinks.map((sublink, idx) => (
              <SidebarLinkContainer key={idx}>
                <SubLink to={sublink.path}>
                  <SubLinkIcon>{sublink.icon}</SubLinkIcon>
                  <SubLinkLabel>{sublink.label}</SubLinkLabel>
                </SubLink>
              </SidebarLinkContainer>
            ))}
          </SubLinksContainer>
        )}
      </React.Fragment>
    ));
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <Sidebar isOpen={isOpen}>
        <Logo>{/* Your logo here */}</Logo>
        <SidebarDivider />
        {renderLinks(schoolManagementArray, 'schoolManagementArray')}
        {renderLinks(superAdminSchoolArray, 'superAdminSchoolArray')}
        {renderLinks(SuperAcademicArray, 'SuperAcademicArray')}
        {renderLinks(studentArray, 'studentArray')}
        {renderLinks(administratorArray, 'administratorArray')}
        {renderLinks(accountingArray, 'accountingArray')}
      </Sidebar>
    </SidebarContainer>
  );
};

export default MainSidebar;
