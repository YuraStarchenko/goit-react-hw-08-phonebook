import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import Toolbar from '@mui/material/Toolbar';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import { Container, AppBar } from './AppBar.styled';

export const ResponsiveAppBar = () => {
	const { isLoggedIn } = useAuth();

  return (
    <AppBar position="absolute">
      <Container>
        <Toolbar disableGutters>
          <BookRoundedIcon
            sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 1,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PHONE BOOK
          </Typography>
        </Toolbar>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </AppBar>
  );
};
