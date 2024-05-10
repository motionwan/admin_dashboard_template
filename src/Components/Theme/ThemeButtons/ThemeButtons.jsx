import { useDispatch } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { setTheme } from '../../../redux/features/Theme/Theme.slice';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
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

const ThemeButton = styled.button`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;

  &:hover {
    animation: ${hoverAnimation} 0.3s ease forwards;
  }

  &:active {
    animation: ${clickAnimation} 0.2s ease forwards;
  }
  &:focus {
    outline: none;
  }
`;

const ThemeButtons = () => {
  const dispatch = useDispatch();

  const handleThemeChange = (theme) => {
    dispatch(setTheme(theme));
  };

  return (
    <ButtonContainer>
      <ThemeButton
        theme={{ bg: '#d6d6d6', text: '#000000' }}
        onClick={() => handleThemeChange('light')}
      />
      <ThemeButton
        theme={{ bg: '#252525', text: '#ffffff' }}
        onClick={() => handleThemeChange('dark')}
      />
      <ThemeButton
        theme={{ bg: '#d8335c', text: '#5e606c' }}
        onClick={() => handleThemeChange('pink')}
      />
    </ButtonContainer>
  );
};

export default ThemeButtons;
