// proper import statements

import centerEverything from '../../assets/styles/centerEverything.styles';
import svg404 from '../../assets/images/404.svg';
import { CustomButton } from '../../components';
import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { getToken } from '../../services/api/auth.api';

const NotFound = ({
  username = 'Guest user',
  message = 'The page you have requested is not found!',
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (getToken() === null) navigate('/account/login');
  }, []);

  return (
    <div style={centerEverything}>
      <img src={svg404} className="w-80 h-60" />

      <div className="my-8 flex justify-center flex-col content-center items-center">
        <p className="text-3xl">Sorry, {username}!</p>
        <p className="text-xl">{message}</p>
      </div>
      <CustomButton text="Go back" onHandleClick={() => {}} />
    </div>
  );
};

export default NotFound;
