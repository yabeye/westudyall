import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getToken } from '../../services/api/auth.api';

const Questions = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (getToken() === null) navigate('/account/login');
  }, []);

  return <p>Questions</p>;
};

export default Questions;
