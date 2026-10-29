import { HashRouter, Routes, Route } from 'react-router-dom'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import NavBar from './components/NavBar.jsx'
import Home from './pages/Home.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Projects from './pages/Projects.jsx'

// GitHub Pages는 새로고침 시 하위 경로를 찾지 못하므로 HashRouter 사용
function App() {
  return (
    <HashRouter>
      <NavBar />
      <Container maxWidth="md" component="main" sx={{ py: { xs: 4, md: 6 } }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Container>
      <Box
        component="footer"
        sx={{ py: 4, textAlign: 'center', borderTop: '1px solid var(--color-border)' }}
      >
        <Typography variant="body2" sx={{ color: 'var(--color-text-muted)' }}>
          © 2026 My Portfolio
        </Typography>
      </Box>
    </HashRouter>
  )
}

export default App
