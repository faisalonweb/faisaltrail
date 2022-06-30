import React, { createContext, useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';

interface IColorModeContext {
  toggleMode?: () => void;
  mode?: 'dark' | 'light';
}
interface ColorContextProps {
  children: React.ReactNode;
}

const initialState = (localStorage.getItem('theme') as 'light' | 'dark') || undefined;
export const ColorModeContext = createContext<IColorModeContext>({});

const themeObj = {
  dark: {
    background: {
      default: '#40445a',
    },
    buttontext: {
      default: 'white',
    },
  },
  light: {
    background: {
      default: 'white',
    },
    buttontext: {
      default: 'black',
    },
  },
};
export const ColorContextProvider: React.FC<ColorContextProps> = ({ children }) => {
  const [mode, setMode] = useState<'light' | 'dark'>(initialState);

  const colorMode = useMemo(
    () => ({
      toggleMode: () =>
        setMode((prevMode) => {
          if (prevMode === 'light') {
            localStorage.setItem('theme', 'dark');
            return 'dark';
          } else {
            localStorage.setItem('theme', 'light');
            return 'light';
          }
        }),
      mode,
    }),
    [mode],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          ...themeObj[mode],
        },
      }),
    [mode],
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
