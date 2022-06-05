import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const account = useSelector((state) => state.account);

  const navigate = useNavigate();

  useEffect(() => {
    // if (!account) navigate('/account/login');
  });

  // console.log('Account in home', account);
  if (account === {}) {
    // TODO: Display a loading screen
    return <p>Loading ... </p>;
  }

  return (
    <div>
      <p>{account.firstName}</p>
      <p>{account.lastName}</p>
    </div>
  );
};

export default Home;
