import {
  Avatar,
  Chip,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import { useEffect, useState } from 'react';

import { BiUpArrow, BiDownArrow } from 'react-icons/bi';
import { BsBookmark, BsBookmarkStarFill } from 'react-icons/bs';
import {
  kMainTextColor,
  kPrimaryColorMain,
  kSecondaryColorMain,
} from '../../services/constants/colors';

import avatar from '../../assets/images/avatar.jpg';
import { CustomButton, DropDownReport } from '../../components';
import { MoreHoriz } from '@material-ui/icons';
import { TextareaAutosize } from '@mui/material';

const AnswerHeader = () => {
  return (
    <div className="mb-8">
      <Typography variant="h4">What is mitochondria? </Typography>
      <div className="my-3 flex justify-between text-gray-500">
        <Typography variant="body2">asked 3 min ago.</Typography>
        <Typography variant="body2">view 16</Typography>
        <div
          className="flex justify-center items-center"
          style={{ fontSize: 12 }}
        >
          <p className="mx-2">Asked by, </p>
          <p className="mx-2">Madingo</p>

          <p> on Jan 12, 2022.</p>
          <Avatar
            alt="M"
            src={avatar}
            className="mx-1"
            style={{ width: 20, height: 20 }}
          />
        </div>
      </div>
      <div className="m-5">
        <Divider />
      </div>
    </div>
  );
};

const AnswerDescription = () => {
  const [isBookMarked, setIsBookMarked] = useState(false);

  return (
    <div className="flex items-start">
      <div className="my-3 flex flex-col align-middle justify-center items-center">
        <BiUpArrow
          color={'white'}
          fontSize="32"
          onClick={() => console.log('Update the question!')}
          className="hover:cursor-pointer bg-blue-500 rounded-sm"
        />
        <div className="my-2">
          <Typography variant="h6">5</Typography>
        </div>
        <BiDownArrow
          color={kSecondaryColorMain}
          fontSize="32"
          onClick={() => console.log('Update the question!')}
          className="hover:cursor-pointer hover:bg-blue-500"
        />

        {!isBookMarked && (
          <BsBookmark
            fontSize="18"
            className="my-3 hover:cursor-pointer hover:bg-gray-300"
            onClick={() => setIsBookMarked(true)}
          />
        )}
        {isBookMarked && (
          <BsBookmarkStarFill
            fontSize="18"
            onClick={() => setIsBookMarked(false)} // Also in the database don't forget.
            className="my-3 hover:cursor-pointer"
          />
        )}
      </div>

      <div className="flex flex-col mx-8">
        <Typography>
          When I saw your script, I remembered this issue tracker. In this issue
          tracker, when is used in the template literal as you are using, it
          seems that is used as the comment start. When I saw your script, I
          remembered this issue tracker. In this issue tracker, when is used in
          the template literal as you are using, it seems that is used as the
          comment start. When I saw your script, I remembered this issue
          tracker. In this issue tracker, when is used in the template literal
          as you are using, it seems that is used as the comment start. When I
          saw your script, I remembered this issue tracker. In this issue
          tracker, when is used in the template literal as you are using, it
          seems that is used as the comment start.
        </Typography>
        <div className="my-10 flex items-center content-center align-middle">
          <Chip label={(`biology`, `biology`)} className="mr-3" />
          <Chip label={(`biology`, `cell`)} className="mr-3" />
          <Chip label={(`biology`, `mitochondria`)} className="mr-3" />
        </div>
        <CommentSection />
      </div>
      <div className="m-5">
        <Divider />
      </div>
    </div>
  );
};

const CommentSection = () => {
  const SingleComment = () => {
    return (
      <div className="m-3">
        <Grid item xs={12}>
          <div
            className="flex flex-col p-3"
            style={{
              backgroundColor: kSecondaryColorMain,
              borderRadius: '.9rem',
            }}
          >
            <div className="flex justify-between">
              <div className="flex justify-left">
                <Avatar
                  alt="M"
                  src={avatar}
                  className="mx-1"
                  style={{ width: 20, height: 20 }}
                />{' '}
                <p className="">Madingo, at 2:30 PM</p>
              </div>

              <DropDownReport />
            </div>

            <Typography>
              I remembered this issue tracker. In this issue tracker, when is
              used in the template literal as you are using, it seems that is
              used as the comment start. When I saw yo
            </Typography>
          </div>
        </Grid>
      </div>
    );
  };

  return (
    <div>
      <Typography variant="h6">3 Comment(s)</Typography>
      <Grid container className="flex justify-between items-center">
        <Grid item xs={12} md={9}>
          <TextField
            variant="filled"
            margin="normal"
            fullWidth
            id="comment"
            label="Comment"
            name="comment"
            autoComplete="username"
            size="small"
            placeholder="Comment this question"
            value={``}
            // onChange={(e) => setUsername(e.target.value)}
          />

          {/* <FormError errorMessage={formErrors.username} /> */}
        </Grid>
        <Grid item xs={12} md={2} className="m-3">
          <CustomButton
            text="Comment"
            handleClick={() => console.log('Commenting ... ')}
            customSize="small"
          />
        </Grid>
        <SingleComment />
        <SingleComment />
      </Grid>
    </div>
  );
};

const AnswerSection = () => {
  const SingleAnswer = () => {
    return (
      <div className="flex items-start my-10">
        <div className="my-3 flex flex-col align-middle justify-center items-center">
          <BiUpArrow
            color={kSecondaryColorMain}
            fontSize="32"
            onClick={() => console.log('Update the question!')}
            className="hover:cursor-pointer hover:bg-blue-500"
          />
          <div className="my-2">
            <Typography variant="h6">1</Typography>
          </div>
          <BiDownArrow
            color={kSecondaryColorMain}
            fontSize="32"
            onClick={() => console.log('Update the question!')}
            className="hover:cursor-pointer hover:bg-blue-500"
          />
        </div>
        <div className="flex flex-col mx-8">
          <div className="flex justify-between ">
            <div className="flex justify-left">
              <Avatar
                alt="U"
                src={avatar}
                className="mx-1"
                style={{ width: 20, height: 20 }}
              />{' '}
              <p className="">Madingo, at 2:30 PM</p>
            </div>

            <DropDownReport />
          </div>
          <Typography>
            When I saw your script, I remembered this issue tracker. In this
            issue tracker, when is used in the template literal as you are
            using, it seems that is used as the comment start. When I saw your
            script, I remembered this issue tracker. In this issue tracker, when
            is used in the template literal as you are using, it seems that is .
          </Typography>
        </div>
      </div>
    );
  };
  const Answering = () => {
    return (
      <div className="flex flex-col my-10">
        <Typography variant="h6">Your Answer(s)</Typography>
        <div
          className="p-2"
          style={{
            borderRadius: '0.9rem',
          }}
        >
          <TextareaAutosize
            aria-label="minimum height"
            minRows={5}
            placeholder="Give your answer here"
            style={{ width: '100%' }}
            variant="filled"
          />
        </div>
        <div className="flex justify-end my-5">
          <CustomButton
            text="Answer"
            handleClick={() => console.log('Answering ... ')}
            customSize="small"
          />
        </div>
      </div>
    );
  };
  return (
    <div className="mt-10">
      <div className="m-5">
        <Divider />
      </div>
      <div className="ml-16 mb-3">
        <Typography variant="h6">3 Answer(s)</Typography>
      </div>
      <SingleAnswer />
      <SingleAnswer />
      <SingleAnswer />
      <Answering />
    </div>
  );
};

const Answer = () => {
  useEffect(() => {
    console.log('Ehe!');
    // TODO: On Load ...
    // using useLocation get the id the question
    // and get all the info here
  }, []);
  return (
    <Container style={{ color: kMainTextColor }}>
      <AnswerHeader />
      <AnswerDescription />
      <AnswerSection />
    </Container>
  );
};

export default Answer;
