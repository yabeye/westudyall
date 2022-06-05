import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getToken } from '../../../services/api/auth.api';

import './Account.css';
const Account = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (getToken() === null) navigate('/account/login');
  }, []);

  return <div>Account, Page!</div>;
};

export default Account;
