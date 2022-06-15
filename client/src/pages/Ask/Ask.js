import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { Alert } from '@mui/material';
import { useEffect, useState } from 'react';
import FileBase from 'react-file-base64';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../../services/api/auth.api';
// import { postQuestions } from '../../services/api/';

import useStyles from './Ask.styles';

const Ask = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [postData, setPostData] = useState('');

  const handleSubmit = async (e) => {
    console.log('Here!');
    e.preventDefault();
    const questionPayload = {
      title,
      description,
      tags,
      fileInput: postData,
    };
    console.log('questionPayload', questionPayload);

    if (title === '' || description === '')
      return alert('Fill out the forms properly!');

    // await postQuestions(questionPayload);
    setTitle('');
    setDescription('');
    setTags('');
    setPostData('');
    window.location = '/';
    // clear form finally
  };
  const clear = (e) => {
    console.log('Clearing questions Form!');
  };

  useEffect(() => {
    if (getToken() === null) navigate('/account/login');
    // console.log('Account in account', account);
  }, []);

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={(e) => handleSubmit(e)}
      >
        <Typography variant="h4">Ask a Question</Typography>
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          required="true"
          //onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        {/* <Alert style={{ width: '100%' }} severity="error">
          Title can not be empity
        </Alert> */}
        <TextField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name="description"
          variant="outlined"
          label="Description"
          fullWidth

          //   onChange={(e) =>
          //     setPostData({ ...postData, creator: e.target.value })
          //   }
        />

        {/* <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={''}
          //   onChange={(e) =>
          //     setPostData({ ...postData, message: e.target.value })
          //   }
        /> */}
        <TextField
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          //   onChange={(e) =>
          //     setPostData({ ...postData, tags: e.target.value.split(',') })
          //   }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <div className={classes.formButtons}>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="secondary"
            size="large"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default Ask;
