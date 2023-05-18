import { useDispatch } from 'react-redux';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from '../../hooks/useAuth';
import { Username, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Username>{user.name}</Username>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          href="#contained-buttons"
          onClick={() => dispatch(logOut())}
        >
          Logout
        </Button>
      </Stack>
    </Wrapper>
  );
};