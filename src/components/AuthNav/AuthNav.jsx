import { StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
        <StyledLink variant="contained" to="/register">
          Register
        </StyledLink>
        <StyledLink variant="contained" to="/login">
          Log In
        </StyledLink>
    </div>
  );
};
