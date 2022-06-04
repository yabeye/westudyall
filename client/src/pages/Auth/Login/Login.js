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
import graduation from '../../../assets/images/graduation.svg';
import Footer from '../components/Footer';
import { CustomButton, FormError } from '../../../components';

const theme = createTheme();

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [credentialErrors, setCredentialErrors] = useState({
    username: 'Please provide username!',
  });
  const [rememberPass, setRememberPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    // logic will go here //
  }, []);

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
            Sign in
          </Typography> */}
          <Header
            heading="Login"
            imgSrc={graduation}
            paragraph="Dont have an account?"
            linkName="*Signup*"
            linkUrl="signup"
          />
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 0 }}
            style={{ margin: 0 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              placeholder="Enter your username here"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {credentialErrors.username && (
              <FormError errorMessage={credentialErrors.username} />
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              placeholder="Enter your password here"
              value={password}
              onChange={(e) => setUsername(e.target.value)}
            />
            {credentialErrors.password && (
              <FormError errorMessage={credentialErrors.password} />
            )}

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              className="my-3"
            />
            <div
              className=""
              style={{ display: 'flex', justifyContent: 'right' }}
            >
              <CustomButton
                text="LOG IN"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                SIGN IN
              </CustomButton>
            </div>

            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}

            <Footer
              paragraph="Dont have an account?"
              linkName="Signup"
              linkUrl="/account/signup"
            />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
