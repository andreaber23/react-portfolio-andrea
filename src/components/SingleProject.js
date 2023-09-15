import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  ButtonGroup,
} from '@mui/material';
import { styled } from '@mui/system'; // Import styled from @mui/system

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'black',
  color: 'white', 
  minHeight: '300px',
  border: '1px solid white',
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  paddingTop: '0%', 
  flex: '1 0 auto',
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  '& .MuiTypography-root': {
    color: 'white', 
  },
}));

const StyledButtonGroup = styled(ButtonGroup)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const Project = ({ title, description, imageSrc, deployedLink, githubLink }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4" id="">
      <StyledCard>
        <StyledCardMedia
          component="img"
          height="140"
          image={imageSrc}
        />
        <StyledCardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </StyledCardContent>
        <StyledButtonGroup variant="text">
          <Button
            href={deployedLink}
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            style={{ color: 'white', fontWeight: 'bold'}} 
          >
            App Link
          </Button>
          <Button
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            color="secondary"
            style={{ color: 'white', fontWeight: 'bold' }} 
          >
            GitHub Link
          </Button>
        </StyledButtonGroup>
      </StyledCard>
    </div>
  );
};

export default Project;
