import { useDispatch } from 'react-redux';
import { FcMenu } from 'react-icons/fc';
import {
  toggleSidebar,
  // selectIsOpen,
} from '../../../redux/features/Sidebar/Sidebar.slice';
import styled, { keyframes } from 'styled-components';
import ThemeButtons from '../../../Components/Theme/ThemeButtons/ThemeButtons'; // replace with your actual file path

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 69px;
  display: flex;
  align-items: center;
  justify-content: space-between; // Align items to the left: ;
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.bg};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const hoverAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(0);
  }
`;

const clickAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
`;

const ThemeContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 3rem;
`;

const SidebarToggler = styled.button`
  background: none;
  margin-left: 50px;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;

  &:focus {
    outline: none;
  }
  &:hover {
    animation: ${hoverAnimation} 0.3s ease forwards;
  }
  &:active {
    animation: ${clickAnimation} 0.2s ease forwards;
  }

  svg {
    fill: ${({ theme }) => theme.text};

    &:focus {
      outline: none;
    }
  }
`;

const Navbar = () => {
  const dispatch = useDispatch();
  // const isOpen = useSelector(selectIsOpen);

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <NavbarContainer>
      <SidebarToggler onClick={handleToggleSidebar}>
        <FcMenu size={30} /> {/* Use FcMenu icon */}
      </SidebarToggler>
      <ThemeContainer>
        <ThemeButtons />
      </ThemeContainer>
    </NavbarContainer>
  );
};

export default Navbar;
