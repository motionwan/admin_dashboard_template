import { useEffect } from 'react';
import WithTheme from './Components/Theme/HOC/WithTheme';
import { useDispatch } from 'react-redux';
import { setTheme } from './redux/features/Theme/Theme.slice';
import Layout from './Components/Layout/Layout';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the initial theme from local storage on component mount
    const initialTheme = localStorage.getItem('theme') || 'light';
    dispatch(setTheme(initialTheme));
  }, [dispatch]);

  return <Layout></Layout>;
};

const ThemedApp = WithTheme(App); // Assigning a name to the component

export default ThemedApp;
