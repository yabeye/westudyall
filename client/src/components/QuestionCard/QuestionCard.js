import { Avatar, Chip, Container } from '@material-ui/core';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  kMainTextColor,
  kNaturalScienceColor,
  kPrimaryColorMain,
} from '../../services/constants/colors';

import madingo from '../../assets/images/madingo.jpg';

const QuestionCard = ({ displayToolTip = true }) => {
  const tags = ['cell', 'biology', 'crista'];
  return (
    <Link to="/questions/277sdsdfas47asd">
      <div
        className={`${
          displayToolTip ? 'hover:scale-105 hover:cursor-pointer' : ''
        }`}
      >
        {displayToolTip && (
          <div
            style={{
              width: '25%',
              backgroundColor: '#f4f4f5',
            }}
          >
            <Typography
              className="px-1 py-1"
              style={{
                backgroundColor: kNaturalScienceColor,
                color: '#fff',
                borderRadius: '5px 5px 0 0',
              }}
            >
              Biology, Natural Science
            </Typography>
          </div>
        )}

        <div
          className="flex flex-row mb-10 py-3"
          style={{
            border: '1px solid #ccc',
            color: kMainTextColor,
            backgroundColor: '#f4f4f5',
            borderRadius: '0 5px 5px 5px',
            width: '100%',
          }}
        >
          <div
            className="flex flex-col justify-start items-end mr-3"
            style={{
              width: 130,
            }}
          >
            <p className="border-green-900 text-xs my-1">960 vote</p>
            <p
              className="border-green-900 text-white text-xs my-1 p-1"
              style={{ backgroundColor: kPrimaryColorMain, borderRadius: 3 }}
            >
              11,354 answers
            </p>
            <p className="border-green-900 text-xs my-1">960 view</p>
          </div>

          <div className="flex flex-col" style={{ width: '100%' }}>
            <Typography gutterBottom>
              <b>What is Mitochondria ? </b>
            </Typography>
            <p style={{ fontSize: 14 }}>
              an organelle found in large numbers in most cells, in which the
              biochemical processes of respiration and energy production occur.
              It has a double membrane, the inner part being folded inwards to
              form layers (cristae).a double membrane, the inner part being ...
            </p>
            <div className="mt-3 flex justify-between align-middle mr-3">
              <div>
                {tags.map((tag) => (
                  <Chip label={tag} className="mx-1" />
                ))}
              </div>
              <div
                className="flex justify-center items-center"
                style={{ fontSize: 12 }}
              >
                <Avatar
                  alt="M"
                  src={madingo}
                  className="mx-1"
                  style={{ width: 25, height: 25 }}
                />
                <p className="mx-2">Madingo,</p>
                <p>Asked Jan 12, 2022.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default QuestionCard;
