import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

import { Box, Container, Grid, TextField, Typography } from '@material-ui/core';
import { getToken } from '../../../services/api/auth.api';

import './Account.css';

import avatar from '../../../assets/images/avatar.jpg';

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
import { useSelector } from 'react-redux';
import { getObjectLength } from '../../../services/utils/objectMethods';

TimeAgo.addDefaultLocale(en);

const timeAgo = new TimeAgo('en-US');

const ProfileHeader = ({ account }) => {
  const {
    firstName,
    lastName,
    username,
    email,
    createdAt,
    accountStatus,
    profile,
    role,
    userId: user,
  } = account;

  const { answers, bookmarks, feed, last, questions } = user;

  return (
    <div className="flex justify-between">
      <div className="flex">
        <img
          src={avatar}
          style={{ width: 150, height: 150, borderRadius: '50%' }}
          className="mr-5"
        />
        <div className="flex flex-col justify-evenly">
          <Typography variant="h4">{username}</Typography>
          <Typography>
            Joined westudy on {timeAgo.format(new Date(createdAt))}
          </Typography>
          <Typography>
            Last seen{' '}
            <span
              className="py-1 px-3 bg-green-400"
              style={{
                // backgroundColor: kPrimaryColorMain,
                color: '#fff',
                borderRadius: '0.6rem',
              }}
            >
              {timeAgo.format(new Date(last.active))}
            </span>
          </Typography>
          <Typography>
            Last location{' '}
            <span
              className="py-1 px-3 bg-gray-400"
              style={{
                backgroundColor: kPrimaryColorMain,
                color: '#fff',
                borderRadius: '0.6rem',
              }}
            >
              Addis Ababa, Ethiopia
            </span>
          </Typography>
        </div>
      </div>
      <div className="flex flex-col justify-evenly">
        <Typography variant="h6">{role} Account</Typography>
      </div>
    </div>
  );
};
const Profile = ({ account }) => {
  const {
    firstName,
    lastName,
    username,
    email,
    createdAt,
    accountStatus,
    profile,
    role,
    userId: user,
  } = account;

  const { bio, address, schoolName, currentGrade = 'not given' } = profile;

  const profileInfos = [
    {
      label: 'firstName',
      name: firstName,
      onChange: () => alert('Implement here!'),
    },
    {
      label: 'lastName',
      name: lastName,
      onChange: () => alert('Implement here!'),
    },
    { label: 'bio', name: bio, onChange: () => alert('Implement here!') },
    {
      label: 'address',
      name: address,
      onChange: () => alert('Implement here!'),
    },
    {
      label: 'currentGrade',
      name: currentGrade,
      onChange: () => alert('Implement here!'),
    },
    {
      label: 'schoolName',
      name: schoolName,
      onChange: () => alert('Implement here!'),
    },
  ];

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
        {profileInfos.map((info) => (
          <Grid item xs={10} md={5} key={info}>
            <TextField
              margin="normal"
              fullWidth
              id={info.label}
              label={info.label.toLowerCase()}
              name={info.label}
              autoComplete={info.label}
              size="small"
              autoFocus
              placeholder={`${info.label} not given yet`}
              value={info.name}
              // onChange={(e) => setUsername(e.target.value)}
            />

            {/* <FormError errorMessage={formErrors.username} /> */}
          </Grid>
        ))}
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

const ProfileStatus = ({ user }) => {
  const { answers, bookmarks, feed, last, questions } = user;

  // TODO: to get the total vote we have to sum the total vote in questions and answers
  const sum = 0;
  questions.forEach((question) => (sum += question.vote));
  answers.forEach((answer) => (sum += answer.vote));

  const status = [
    { title: 'Questions', amount: questions.length },
    { title: 'Answers', amount: answers.length },
    { title: 'Vote', amount: sum },
  ];

  return (
    <div className="my-5">
      <Typography variant="h5">Status</Typography>
      <InfoCard status={status} />
    </div>
  );
};

const QuestionsList = ({ username, questions }) => {
  const [filterIndex, setFilterIndex] = useState(0);
  const filterOptions = [
    { name: 'Recent' },
    { name: 'Popular' },
    { name: 'Unanswered' },
    { name: 'Answered' },
    { name: 'Day' },
  ];

  const getQuestions = () => {
    if (questions.length === 0)
      return (
        <div className="my-5">
          <Typography align="center">
            {username} has no contributions yet.
          </Typography>
        </div>
      );

    return (
      <Grid container>
        {questions.map((question) => (
          <Grid item xs={12} key={question}>
            <QuestionCard />
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
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
      {getQuestions()}
    </div>
  );
};

const Account = () => {
  const navigate = useNavigate();

  const account = useSelector((state) => state.account);
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    if (getToken() === null) navigate('/account/login');
    // console.log('Account in account', account);
  }, []);

  // alert('account', account.firstName);

  if (account && getObjectLength(account) === 0) {
    return <p>Loading account ...!</p>;
  }

  const {
    firstName,
    lastName,
    username,
    email,
    createdAt,
    accountStatus,
    profile,
    role,
    userId: user,
  } = account;

  const { answers, bookmarks, feed, last, questions } = user;

  return (
    <Container>
      <div className="flex flex-col" style={{ color: kMainTextColor }}>
        <ProfileHeader account={account} />
        <Profile account={account} />
        <ProfileStatus user={user} />

        <QuestionsList questions={questions} username={username} />
      </div>
    </Container>
  );
};

export default Account;
