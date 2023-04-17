import { useState, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './components/layout';

import GlobalStyled from './styles/GlobalStyle';
import themes from './styles/themes/theme';

function App() {
  const [theme, setTheme] = useState('light');

  const currentTheme = useMemo(() => themes[theme] || themes.dark, [theme]);

  const handleTheme = () => {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyled />
      <Layout
        onHandleTheme={handleTheme}
        currentTheme={theme}
      />
    </ThemeProvider>
  );
}

export default App;
