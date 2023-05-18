import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  Answer,
  Ask,
  Help,
  Home,
  LoadInit,
  NotFound,
  Questions,
  Tags,
  User,
} from './pages';
import { Account, Login, Signup } from './pages/Auth';

import './App.css';
import { getMyAccount } from './services/actions/account';

import { useSelector } from 'react-redux';
import { getToken } from './services/api/auth.api';
import { getMyAccountAPI } from './services/api/account.api';
import { getObjectLength } from './services/utils/objectMethods';
import {
  makeAppLoading,
  makeAppStopLoading,
} from './services/actions/isLoading';
import { LeftBar, Navbar, RightBar } from './components';

import { Grid, makeStyles } from '@material-ui/core';
import Stream from './components/Stream/Stream';

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

function App() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const account = useSelector((state) => state.account);
  const isLoading = useSelector((state) => state.isLoading);
  // const isLoading = useSelector((state) => state.isLoading);
  // const account = useState(null);
  const isUserLoggedIn = getToken();

  useEffect(() => {
    // dispatch(makeAppLoading());
    // setting up the user
    // ! remove this, only for loading demo //
    // setTimeout(() => {
    //   dispatch(getMyAccount());
    //   dispatch(makeAppStopLoading());
    // }, 2000);

    dispatch(getMyAccount());

    // dispatch(getMyAccount());
  }, [dispatch]);

  console.log('Account in app', account);

  return (
    <div className="App">
      {/* Pages that don't depend by routes */}
      {/* {isLoading && <LoadInit />} */}

      {/* routes */}

      <Navbar />

      <Grid container justifyContent="center">
        <Grid item sm={2} xs={2}>
          <LeftBar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Routes>
            <Route path="/help" exact element={<Help />} />
            <Route path="/notfound" exact element={<NotFound />} />
            <Route path="/account" exact element={<Account />} />
            <Route path="/account/signup" exact element={<Signup />} />
            <Route path="/account/login" exact element={<Login />} />
            <Route path="/users" exact element={<User />} />
            <Route path="/ask" exact element={<Ask />} />

            <Route
              path="/tags/natural"
              exact
              element={
                <Stream
                  title="Natural Science"
                  description="natural Science is a study of ..."
                  tags={[
                    { name: 'Biology', count: 0 },
                    { name: 'Chemistery', count: 0 },
                    { name: 'Physics', count: 0 },
                    { name: 'Mats(N)', count: 0 },
                  ]}
                />
              }
            />
            <Route
              path="/tags/social"
              exact
              element={
                <Stream
                  title="Social Science"
                  description="Social Science is a study of ..."
                  tags={[
                    { name: 'Economics', count: 0 },
                    { name: 'Business', count: 0 },
                    { name: 'History', count: 0 },
                    { name: 'Civics', count: 0 },
                    { name: 'Mats(S)', count: 0 },
                  ]}
                />
              }
            />
            <Route
              path="/tags/others"
              exact
              element={
                <Stream
                  title="Others"
                  description="Includes subjects that are ..."
                  tags={[
                    { name: 'English', count: 0 },
                    { name: 'Amharic', count: 0 },
                    { name: 'Technical Drawing', count: 0 },
                    { name: 'Physical Education', count: 0 },
                  ]}
                />
              }
            />
            <Route path="/tags" exact element={<Tags />} />
            <Route path="/questions/:id" element={<Answer />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/" exact element={<Questions />} />
            <Route path="*" element={<Navigate to="/notfound" replace />} />
          </Routes>
        </Grid>
        <Grid item sm={3} className="">
          <RightBar className={classes.right} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
