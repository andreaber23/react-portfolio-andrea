import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)`
  background-color: black;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 16px;
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
`;

const Navigation = ({ currentPage }) => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h6">Your Logo</Typography>
        <StyledLink
          component={RouterLink}
          to="/"
          active={currentPage === 'home'}
        >
          Home
        </StyledLink>
        <StyledLink
          component={RouterLink}
          to="/about"
          active={currentPage === 'about'}
        >
          About
        </StyledLink>
        <StyledLink
          component={RouterLink}
          to="/portfolio"
          active={currentPage === 'portfolio'}
        >
          Portfolio
        </StyledLink>
        <StyledLink
          component={RouterLink}
          to="/contact"
          active={currentPage === 'contact'}
        >
          Contact
        </StyledLink>
        <StyledLink
          component={RouterLink}
          to="/resume"
          active={currentPage === 'resume'}
        >
          Resume
        </StyledLink>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navigation;
