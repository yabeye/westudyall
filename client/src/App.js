import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Help, Home, LoadInit, NotFound, User } from './pages';
import { Account, Login, Signup } from './pages/Auth';

import './App.css';
import { getMyAccount } from './services/actions/account';

import { useSelector } from 'react-redux';
import { getToken } from './services/api/auth.api';

function App() {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);
  const [isPageLoading, setIsPageLoading] = useState(false);

  const isUserLoggedIn = getToken();

  useEffect(() => {
    // On App loads we should orchestrate high level tasks here!
    // if (!isUserLoggedIn) {
    //   // not logged in, so we should go to login page
    //   window.location = '/account/login';
    // } else {
    //   // get the current user
    //   dispatch(getMyAccount());
    // }
    console.log('Account', account);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        {/* Pages that don't depend by routes */}
        {isPageLoading && <LoadInit />}
        {/* routes */}
        <div>
          <Routes>
            <Route path="/help" exact element={<Help />} />
            <Route path="/notfound" exact element={<NotFound />} />
            <Route path="/account" exact element={<Account />} />
            <Route path="/account/signup" exact element={<Signup />} />
            <Route path="/account/login" exact element={<Login />} />
            <Route path="/users" exact element={<User />} />
            <Route path="/" exact element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
