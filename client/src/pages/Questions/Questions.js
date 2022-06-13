import { Container, Typography } from '@material-ui/core';
import { Grid, Pagination } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomButton, FilterHeader, QuestionCard } from '../../components';

import { getToken } from '../../services/api/auth.api';

const Questions = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (getToken() === null) navigate('/account/login');
    // else load all questions from the db.
    // or get it from the state.
    // but the safe side is to load while this component renders
  }, []);

  return (
    <div>
      <Container>
        <FilterHeader />
        <Grid container>
          <Grid item xs={12}>
            <QuestionCard />
          </Grid>
          <Grid item xs={12}>
            <QuestionCard />
          </Grid>
          <Grid item xs={12}>
            <QuestionCard />
          </Grid>
          <Grid item xs={12}>
            <QuestionCard />
          </Grid>
          <Grid item xs={12}>
            <QuestionCard />
          </Grid>
        </Grid>
        <div className="flex justify-center mt-10 mb-20">
          <Pagination
            count={10}
            onChange={(event, value) => console.log('Value', value)}
          />
        </div>
      </Container>
    </div>
  );
};

export default Questions;
