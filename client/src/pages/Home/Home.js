import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getObjectLength } from '../../services/utils/objectMethods';
import { getToken } from '../../services/api/auth.api';

const Home = () => {
  const account = useSelector((state) => state.account);
  const isLoading = useSelector((state) => state.isLoading);

  const navigate = useNavigate();

  useEffect(() => {
    // console.log('Account in home', account);
    // console.log('Is the app loading.', isLoading);
    // if (getObjectLength(account) === 0 && !isLoading)
    //   console.log('re route to login');

    if (getToken() === null) navigate('/account/login');
  }, [navigate]);

  // console.log('account', account);

  if (getObjectLength(account) === 0) {
    // TODO: Display a loading screen
    return <p>Loading ... </p>;
  }

  return (
    <div className="">
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
    </div>
  );
};

export default Home;
