import { useState } from 'react';
import {
  kMainTextColor,
  kSecondaryColorMain,
} from '../../services/constants/colors';

const CustomFilter = () => {
  const [filterIndex, setFilterIndex] = useState(0);

  const filterOptions = [
    { name: 'Recent' },
    { name: 'Popular' },
    { name: 'Unanswered' },
    { name: 'Answered' },
    { name: 'Day' },
  ];

  return (
    <div className="flex">
      {filterOptions.map((option, index) => (
        <p
          key={option}
          className="p-2 hover:cursor-pointer"
          style={{
            // backgroundColor: kSecondaryColorMain,
            backgroundColor:
              filterOptions[filterIndex].name === option.name
                ? kSecondaryColorMain
                : 'white',
            color: kMainTextColor,
            // borderRadius: '3px',
            border: `1px solid #ccc`,
          }}
          onClick={() => setFilterIndex(index)}
        >
          {option.name}
        </p>
      ))}
    </div>
  );
};

export default CustomFilter;
