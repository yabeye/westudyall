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

const theme = createTheme();

const Signup = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // now lets register a user //

    // TODO: Local validation is required!

    const signUpData = {
      firstName,
      lastName,
      email,
      password,
    };

    console.log('Sign up data!', signUpData);
  };

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
                />
              </Grid>

              <div className="mx-3 my-1">
                <FormError
                  errorMessage={formErrors.firstName || formErrors.lastName}
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
                />
              </Grid>
              <div className="mx-3 my-1">
                <FormError errorMessage={formErrors.confirmPassword} />
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
