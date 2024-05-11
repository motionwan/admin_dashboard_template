import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { themeVariables } from './../Layout/Variables/Variables';

const sidebarStyles = css`
  position: relative;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  @media (max-width: 767px) {
    margin-left: 0px;
  }
`;

export const SidebarContainer = styled('div').withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})`
  ${({ isOpen }) => css`
    ${sidebarStyles}
    margin-left: ${isOpen ? themeVariables.sidebarWidth : '40px'};
  `}
`;

export const Sidebar = styled('div').withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})`
  ${({ isOpen }) => css`
    ${sidebarStyles}
    width: ${!isOpen ? '60px' : themeVariables.sidebarWidth};
    background: ${({ theme }) => theme.bg};
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 12;
    ::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    @media (max-width: 767px) {
      display: none;
    }
  `}
`;

export const Logo = styled.div`
  width: 52px;
  height: 53px;

  img: {
    max-width: 100%;
    height: 20px;
  }
  cursor: pointer;
  margin-bottom: ${themeVariables.midSpacing};
`;

export const SidebarDivider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.bg3};
  margin: ${themeVariables.midSpacing} 0;
`;

export const SidebarLinkContainer = styled.div`
  background: ${({ theme, isActive }) =>
    !isActive ? `transparent` : theme.bg3};
  border-radius: ${themeVariables.borderRadius};
  margin: 8px 0;

  &:hover {
    background: ${({ theme }) => theme.bg3};
  }
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  transition: max-height 5s ease-in-out;
  font-size: 16px;
  padding: calc(${themeVariables.smallSpacing} - 2px);

  @media (max-width: 768px) {
    display: none;
  }
`;

//begining of sublink
export const SubLinksContainer = styled.div`
  padding-left: 60px; /* Adjust as needed */
  background-color: ${({ theme }) => theme.bg3};
  font-size: 10px;
  width: 100%;
  svg {
    color: ${({ theme }) => theme.text};
  }
`;

export const SubLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: 8px 0; /* Adjust padding as needed */
  &:hover {
    background-color: ${({ theme }) => theme.bg};
  }
`;

export const SubLinkIcon = styled.div`
  margin-right: 10px; /* Adjust margin as needed */
`;

export const SubLinkLabel = styled.span`
  color: ${({ theme }) => theme.text};
`;

// end of sublink

export const SidebarLinkIcon = styled.div`
  padding: ${themeVariables.smallSpacing} ${themeVariables.midSpacing};
  display: flex;

  svg {
    font-size: 20px;
    color: ${({ theme }) => theme.text};
  }
`;

export const SidebarLinkLabel = styled.span`
  display: block;
  flex: 1;
  margin-left: ${themeVariables.smallSpacing};
  color: ${({ theme }) => theme.text};
`;

export const SidebarLinkNotification = styled.div`
  font-size: 14px;
  padding: calc(${themeVariables.smallSpacing} / 2)
    ${themeVariables.smallSpacing};
  border-radius: calc(${themeVariables.borderRadius} / 2);
  background: ${({ theme }) => theme.primary};
  color: white;
  margin-right: ${themeVariables.midSpacing};
`;
