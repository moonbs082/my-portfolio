import { createTheme } from '@mui/material/styles';

// 컬러 팔레트 디자인 시스템.md 기준.
// MUI 팔레트는 색 계산(hover 등)을 위해 Hex 값을 쓰고,
// 실제 화면 색은 다크모드 전환이 되도록 index.css 의 CSS 변수를 사용한다.
const theme = createTheme({
  palette: {
    primary: {
      main: '#aa3bff',
      light: '#c084fc',
      dark: '#7840b0',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#380880',
    },
    background: {
      default: '#ffffff',
      paper: '#f4f3ec',
    },
    text: {
      primary: '#08060d',
      secondary: '#6b6375',
    },
    divider: '#e5e4e7',
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.125rem',
      fontWeight: 500,
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: 'var(--color-bg-primary)',
          color: 'var(--color-text-secondary)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: 'var(--color-button-primary)',
          color: 'var(--color-button-text)',
          '&:hover, &:active': {
            backgroundColor: 'var(--color-button-hover)',
          },
        },
      },
    },
  },
});

export default theme;
