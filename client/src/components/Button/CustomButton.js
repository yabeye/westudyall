const CustomButton = ({ text = 'Button', handleClick = () => {} }) => {
  return (
    <button
      onClick={handleClick}
      className=" bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold rounded-full px-10 py-2 mx-2 w-auto"
    >
      {text}
    </button>
  );
};

export default CustomButton;
