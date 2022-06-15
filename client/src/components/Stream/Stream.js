// Sometimes i asked, what is wrong with my code
// :)

import { Container, Typography, Grid, Chip } from '@material-ui/core';
import { TextField } from '@mui/material';
import React from 'react';
import { CustomButton, CustomFilter } from '../../components';
import {
  kMainTextColor,
  kPrimaryColorMain,
} from '../../services/constants/colors';

const TagResult = ({ tags }) => {
  const Result = ({ tag }) => {
    return (
      <Grid
        items
        xs={3}
        style={{
          margin: '20px',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: kPrimaryColorMain,
          color: '#fff',
          borderRadius: '.6rem',
        }}
      >
        <Chip label={tag.name} />
        <Typography variant="h4">{tag.count}</Typography>
        <Typography>questions</Typography>
      </Grid>
    );
  };
  return (
    <Grid
      container
      style={{
        margin: '20px 0',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {tags.map((tag) => (
        <Result key={tag} tag={tag} />
      ))}
    </Grid>
  );
};

const Stream = ({ title, description, tags }) => {
  //   title = 'Natural Science';
  //   description = 'natural Science is a study of ...';
  //   tags = [
  //     { name: 'Biology', count: 0 },
  //     { name: 'Chemistery', count: 0 },
  //     { name: 'Physics', count: 0 },
  //     { name: 'Mats(N)', count: 0 },
  //   ];

  return (
    <div style={{ color: kMainTextColor }}>
      <Container>
        <div className="my-5">
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body2" gutterBottom>
            Find question based on subject streams
          </Typography>
          <Typography>{description}</Typography>
        </div>

        <TagResult tags={tags} />
      </Container>
    </div>
  );
};

export default Stream;
