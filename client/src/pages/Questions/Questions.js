import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getToken } from '../../services/api/auth.api';

const Questions = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (getToken() === null) navigate('/account/login');
    // else load all questions from the db.
    // or get it from the state.
    // but the safe side is to load while this component renders
  }, []);

  return <p>Questions</p>;
};

export default Questions;
