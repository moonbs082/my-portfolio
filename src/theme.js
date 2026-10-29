import { createTheme } from '@mui/material/styles';

// 컬러 팔레트 디자인 시스템.md 기준 (군함 사진 팔레트).
// MUI 팔레트는 색 계산(hover 등)을 위해 Hex 값을 쓰고,
// 실제 화면 색은 라이트/다크 전환이 되도록 index.css 의 CSS 변수를 사용한다.
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#CD2E3A',
      light: '#FF8A90',
      dark: '#A8232E',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#253B52',
    },
    error: {
      main: '#CD2E3A',
    },
    background: {
      default: '#061718',
      paper: '#253B52',
    },
    text: {
      primary: '#E8EDF2',
      secondary: '#ABAEB0',
    },
    divider: '#4C5965',
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
          color: 'var(--color-text-primary)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        // 다크 모드 Paper 기본 밝기 오버레이 제거
        root: { backgroundImage: 'none' },
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
