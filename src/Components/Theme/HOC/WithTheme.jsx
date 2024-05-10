import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { selectTheme } from '../../../redux/features/Theme/Theme.slice';
import { lightTheme, darkTheme, pinkTheme } from '../Theme';

const themes = {
  light: lightTheme,
  dark: darkTheme,
  pink: pinkTheme,
  // Add more themes here if needed
};

const WithTheme = (WrappedComponent) => {
  const ThemedComponent = (props) => {
    const currentTheme = useSelector(selectTheme);

    return (
      <ThemeProvider theme={themes[currentTheme]}>
        <WrappedComponent {...props} />
      </ThemeProvider>
    );
  };

  return ThemedComponent;
};

export default WithTheme;
