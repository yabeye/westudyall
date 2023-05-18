import { RiAlarmWarningFill } from 'react-icons/ri';

const FormError = ({ errorMessage }) => {
  const visibility = errorMessage === undefined ? 'hidden' : 'visible';
  // console.log('Visibility', visibility);
  return (
    <p className="text-sm flex text-red-500" style={{ visibility }}>
      <RiAlarmWarningFill className="mx-2" />
      {errorMessage === undefined ? 'no error' : errorMessage}
    </p>
  );
};

export default FormError;
