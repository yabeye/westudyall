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

const SearchTags = () => {
  return (
    <div className="">
      <Typography variant="h6">Search a tag</Typography>

      <Grid container>
        <Grid items xs={4}>
          <TextField
            variant="filled"
            margin="normal"
            fullWidth
            id="tag"
            label="Search"
            name="tag"
            autoComplete="tag"
            size="small"
            placeholder="Tag search ..."
            value={``}
            // onChange={(e) => setUsername(e.target.value)}
          />
        </Grid>
      </Grid>

      {/* <FormError errorMessage={formErrors.username} /> */}

      <div className="flex justify-between">
        <CustomButton
          text="Search Tag"
          handleClick={() => console.log('Searching a Tag ... ')}
          //   customSize="small"
        />
        <CustomFilter />
      </div>
    </div>
  );
};

const TagResult = () => {
  const tags = [
    { name: 'human-right', count: 0 },
    { name: 'energy', count: 0 },
    { name: 'cell', count: 0 },
    { name: 'human-right', count: 0 },
    { name: 'energy', count: 0 },
    { name: 'cell', count: 0 },
    { name: 'human-right', count: 0 },
    { name: 'energy', count: 0 },
    { name: 'cell', count: 0 },
    { name: 'cell', count: 0 },
    { name: 'human-right', count: 0 },
    { name: 'energy', count: 0 },
    { name: 'cell', count: 0 },
  ];
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

const Tags = () => {
  return (
    <div style={{ color: kMainTextColor }}>
      <Container>
        <div className="my-5">
          <Typography variant="h4">Tags</Typography>
          <Typography variant="body2" gutterBottom>
            Find question based on their tags
          </Typography>
          <Typography>
            A tag is a keyword or label that categorizes your question with
            other, similar questions. Using the right tags makes it easier for
            others to find and answer your question.
          </Typography>
        </div>

        {/* <div className="my-5 flex justify-between"> */}
        {/* Searches */}

        <SearchTags />
        {/* </div> */}
        <TagResult />
      </Container>
    </div>
  );
};

export default Tags;
