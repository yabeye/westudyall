import { RiAlarmWarningFill } from 'react-icons/ri';

const FormError = ({ errorMessage }) => {
  return (
    <p className="text-sm flex text-red-500">
      <RiAlarmWarningFill className="mx-2" />
      {errorMessage}
    </p>
  );
};

export default FormError;
