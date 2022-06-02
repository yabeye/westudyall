import { Header, SignupComp } from '../components';

const Signup = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
      }}
    >
      <div
        style={{
          border: '3px solid white',
          padding: 40,
          borderRadius: '.8rem',
          backgroundColor: '#cfcfff',
          opacity: '0.8',
        }}
      >
        <Header
          heading="Signup to create an account"
          paragraph="Already have an account? "
          linkName="Login"
          linkUrl="/"
        />
        <SignupComp />
      </div>
    </div>
  );
};

export default Signup;
