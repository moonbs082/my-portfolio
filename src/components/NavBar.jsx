import { NavLink } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Me', to: '/about' },
  { label: 'Projects', to: '/projects' },
]

function NavBar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'var(--color-bg-primary)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <Toolbar
        sx={{
          maxWidth: 960,
          width: '100%',
          mx: 'auto',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 1, sm: 0 },
          py: { xs: 1, sm: 0 },
        }}
      >
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontWeight: 700, color: 'var(--color-primary)' }}
        >
          My Portfolio
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {navItems.map((item) => (
            <Button
              key={item.to}
              component={NavLink}
              to={item.to}
              end={item.to === '/'}
              sx={{
                color: 'var(--color-text-secondary)',
                fontWeight: 600,
                '&:hover': {
                  color: 'var(--color-primary)',
                  bgcolor: 'var(--color-accent-bg)',
                },
                '&.active': {
                  color: 'var(--color-primary)',
                  bgcolor: 'var(--color-accent-bg)',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
