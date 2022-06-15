import { Typography } from '@material-ui/core';
import { useState } from 'react';
import CustomButton from '../Button/CustomButton';

import { useNavigate } from 'react-router-dom';

import {
  kMainTextColor,
  kNaturalScienceColor,
  kOthersColor,
  kSecondaryColorMain,
  kSocialScienceColor,
} from '../../services/constants/colors';

const FilterHeader = () => {
  const [filterIndex, setFilterIndex] = useState(0);

  const filterOptions = [
    { name: 'Recent' },
    { name: 'Popular' },
    { name: 'Unanswered' },
    { name: 'Answered' },
    { name: 'Day' },
  ];

  const streams = [
    { name: 'Natural Science', bgColor: kNaturalScienceColor, count: 1950 },
    { name: 'Social Science', bgColor: kSocialScienceColor, count: 975 },
    { name: 'Others', bgColor: kOthersColor, count: 325 },
  ];

  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-between align-middle">
        <Typography variant="h4">All Questions</Typography>

        <CustomButton text="Ask " handleClick={() => navigate('/ask')} />
      </div>

      <div className="flex justify-center align-middle">
        {streams.map((stream) => (
          <p
            className="p-2 mx-2 hover:cursor-pointer"
            style={{
              // backgroundColor: kSecondaryColorMain,
              backgroundColor: kSecondaryColorMain,
              color: kMainTextColor,
              borderRadius: '5px',
              //   border: `1px solid #ccc`,
            }}
            onClick={() => setFilterIndex(0)}
          >
            {stream.count} {stream.name}
          </p>
        ))}
      </div>
      <div className="my-5 flex justify-between align-middle">
        <Typography>
          Total <b>3,251</b> results
        </Typography>
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
      </div>
    </>
  );
};
export default FilterHeader;
