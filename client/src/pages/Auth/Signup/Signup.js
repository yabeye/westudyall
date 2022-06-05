import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';

import welcomeSVG from '../../../assets/images/welcome.svg';
import { CustomButton, FormError } from '../../../components';
import Footer from '../components/Footer';
import { createNewAccount } from '../../../services/actions/account';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createNewAccountAPI } from '../../../services/api/account.api';

const theme = createTheme();

const Signup = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const account = useSelector((state) => state.account);

  const [firstName, setFirstName] = useState('Fake');
  const [lastName, setLastName] = useState('Name');
  const [username, setUsername] = useState('silly');
  const [email, setEmail] = useState('last@gmail.com');
  const [password, setPassword] = useState('12ABcd#&');
  const [confirmPassword, setConfirmPassword] = useState('12ABcd#&');
  const [formErrors, setFormErrors] = useState({
    // firstName: 'Please provide your name.',
  });

  useEffect(() => {
    // logic will go here
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // now lets register a user //

    // TODO: Local validation is required!

    const signUpData = {
      firstName,
      lastName,
      username,
      email,
      password,
      confirmPassword,
    };

    console.log('Sign up data!', signUpData);

    const result = await createNewAccountAPI(signUpData);

    console.log('Result at Signup', result);

    const { error, message, account } = result;

    if (error === 'true') {
      // there is a validation error.
      const errorKey = message.toLowerCase().split(' ')[0].split('"').join('');

      const formErrorTemp = {};
      formErrorTemp[`${errorKey}`] = message.toLowerCase();
      setFormErrors(formErrorTemp);
      console.log('formErrorTemp', formErrorTemp);
      return;
    }

    navigate('/account/login');
  };

  console.log('In Signup', account);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography> */}

          <Header
            heading="Create a new Account"
            imgSrc={welcomeSVG}
            isFlex={true}
          />

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  size="small"
                  autoFocus
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  size="small"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>

              <div className="mx-3 my-1">
                <FormError
                  errorMessage={formErrors.firstname || formErrors.lastname}
                />
              </div>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  size="small"
                  value={username}
                  autoComplete="new-username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <div className="mx-3 my-1">
                <FormError errorMessage={formErrors.username} />
              </div>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  size="small"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <div className="mx-3 my-1">
                <FormError errorMessage={formErrors.email} />
              </div>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  size="small"
                  value={password}
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <div className="mx-3 my-1">
                <FormError errorMessage={formErrors.password} />
              </div>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirm-password"
                  size="small"
                  value={confirmPassword}
                  autoComplete="new-confirm-password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Grid>
              <div className="mx-3 my-1">
                <FormError errorMessage={formErrors.confirmpassword} />
              </div>

              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button> */}
            <div
              className=""
              style={{ display: 'flex', justifyContent: 'right' }}
            >
              <CustomButton text="SIGN UP" handleClick={() => {}} />
            </div>
            {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid> */}
            <Footer
              paragraph="Don't have an account?"
              linkName="Login"
              linkUrl="/account/login"
            />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Signup;
