import { Typography } from '@mui/material';

const CustomButton = ({
  text = 'Button',
  customSize = '10',
  handleClick = () => {},
}) => {
  if (customSize === 'small') {
    return (
      <Typography
        onClick={handleClick}
        className={`bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold rounded-full px-10 py-1 mx-1 w-auto hover:cursor-pointer`}
      >
        {text}
      </Typography>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold rounded-full px-10 py-2 mx-2 w-auto`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
