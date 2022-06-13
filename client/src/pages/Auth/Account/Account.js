import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Container, Grid, TextField, Typography } from '@material-ui/core';
import { getToken } from '../../../services/api/auth.api';

import './Account.css';

import madingo from '../../../assets/images/madingo.jpg';
import {
  kMainTextColor,
  kPrimaryColorMain,
  kSecondaryColorMain,
} from '../../../services/constants/colors';
import {
  CustomButton,
  FormError,
  InfoCard,
  QuestionCard,
} from '../../../components';

const ProfileHeader = () => {
  return (
    <div className="flex">
      <img
        src={madingo}
        style={{ width: 150, height: 150, borderRadius: '50%' }}
        className="mr-5"
      />
      <div className="flex flex-col justify-evenly">
        <Typography variant="h4">Madingo</Typography>
        <Typography>Joined westudy on July, 16-2022</Typography>
        <Typography>
          Last seen on{' '}
          <span
            className="py-1 px-3 bg-green-400"
            style={{
              // backgroundColor: kPrimaryColorMain,
              color: '#fff',
              borderRadius: '0.6rem',
            }}
          >
            Yesterday
          </span>
        </Typography>
      </div>
    </div>
  );
};

const ProfileStatus = () => {
  const status = [
    { title: 'Questions', amount: 12 },
    { title: 'Answers', amount: 9 },
    { title: 'Vote', amount: 2 },
  ];
  return (
    <div className="my-5">
      <Typography variant="h5">Status</Typography>
      <InfoCard status={status} />
    </div>
  );
};

const Profile = () => {
  return (
    <div className="mt-14">
      <Typography variant="h5">Profile</Typography>
      <Grid
        component="form"
        // onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 0 }}
        style={{ margin: 0 }}
        container
        className="flex justify-between"
      >
        <Grid item xs={10} md={5}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            size="small"
            autoFocus
            placeholder="Enter your username here"
            value={'madingo'}
            // onChange={(e) => setUsername(e.target.value)}
          />

          {/* <FormError errorMessage={formErrors.username} /> */}
        </Grid>
        <Grid item xs={10} md={5}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            size="small"
            autoFocus
            placeholder="previous email address"
            value={'madingoGR11@gmail.com'}
            // onChange={(e) => setUsername(e.target.value)}
          />

          {/* <FormError errorMessage={formErrors.username} /> */}
        </Grid>
        <Grid item xs={10} md={5}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="bio"
            label="Bio"
            name="bio"
            autoComplete="bio"
            size="small"
            autoFocus
            placeholder="there is no bio"
            value={'Lets do this!'}
            // onChange={(e) => setUsername(e.target.value)}
          />

          {/* <FormError errorMessage={formErrors.username} /> */}
        </Grid>
      </Grid>
      <div className="" style={{ display: 'flex', justifyContent: 'right' }}>
        <CustomButton
          text="Save Profile"
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          // handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};
const Account = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (getToken() === null) navigate('/account/login');
  }, []);

  const filterOptions = [
    { name: 'Recent' },
    { name: 'Popular' },
    { name: 'Unanswered' },
    { name: 'Answered' },
    { name: 'Day' },
  ];
  const [filterIndex, setFilterIndex] = useState(0);
  return (
    <Container>
      <div className="flex flex-col" style={{ color: kMainTextColor }}>
        <ProfileHeader />
        <Profile />
        <ProfileStatus />
        <div className="my-5">
          <div className="flex justify-between items-center">
            <Typography variant="h5">Contributions</Typography>
            <div className="flex my-2">
              {filterOptions.map((option, index) => (
                <p
                  key={option}
                  className="p-2 hover:cursor-pointer"
                  style={{
                    // backgroundColor: kSecondaryColorMain,
                    backgroundColor:
                      filterOptions[filterIndex].name === option.name
                        ? kSecondaryColorMain
                        : 'white',
                    color: kMainTextColor,
                    // borderRadius: '3px',
                    border: `1px solid #ccc`,
                  }}
                  onClick={() => setFilterIndex(index)}
                >
                  {option.name}
                </p>
              ))}
            </div>
          </div>

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
        </div>
      </div>
    </Container>
  );
};

export default Account;
