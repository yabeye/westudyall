import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Help, Home, LoadInit, NotFound, User } from './pages';
import { Account, Login, Signup } from './pages/Auth';

import './App.css';
import { getMyAccount } from './services/actions/account';

import { useSelector } from 'react-redux';
import { getToken } from './services/api/auth.api';
import { getMyAccountAPI } from './services/api/account.api';
import { getObjectLength } from './services/utils/objectMethods';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const account = useSelector((state) => state.account);
  // const isLoading = useSelector((state) => state.isLoading);
  // const account = useState(null);
  const isUserLoggedIn = getToken();

  useEffect(() => {
    // setting up the user

    // ! remove this, only for loading demo //

    setTimeout(() => {
      dispatch(getMyAccount());
    }, 2000);

    // dispatch(getMyAccount());
  }, []);

  return (
    <div className="App">
      {/* Pages that don't depend by routes */}
      {getObjectLength(account) === 0 && <LoadInit />}

      {/* routes */}
      <div>
        <Routes>
          <Route path="/help" exact element={<Help />} />
          <Route path="/notfound" exact element={<NotFound />} />
          <Route path="/account" exact element={<Account />} />
          <Route path="/account/signup" exact element={<Signup />} />
          <Route path="/account/login" exact element={<Login />} />
          <Route path="/users" exact element={<User />} />
          <Route path="/" exact element={<Home account={account} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
