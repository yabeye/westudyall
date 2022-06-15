import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(10),
    margin: '0',
    [theme.breakpoints.up('md')]: {
      margin: '0 20%',
    },
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  formButtons: {
    display: 'flex',
  },
  buttonSubmit: {
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
  },
}));
