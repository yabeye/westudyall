import { Container, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { BsViewList } from 'react-icons/bs';
import { BiAtom } from 'react-icons/bi';
import { VscLaw } from 'react-icons/vsc';
import { FaSlackHash } from 'react-icons/fa';
import { RiUserSearchLine } from 'react-icons/ri';
import { TbMessageLanguage } from 'react-icons/tb';

import { kPrimaryColorMain } from '../../services/constants/colors';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    color: 'white',
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    height: '100vh',
    position: 'sticky',
    top: 0,
    [theme.breakpoints.up('sm')]: {
      backgroundColor: 'white',
      color: '#555',
      border: '1px solid #ece7e7',
    },
  },
  items: {
    display: 'flex',
    alignItems: 'center',
    // marginBottom: theme.spacing(4),
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),

    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(2),
      cursor: 'pointer',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      '&:hover': {
        // backgroundColor: theme.palette.primary.main,
        backgroundColor: kPrimaryColorMain,
        color: 'white',
        borderRadius: theme.shape.borderRadius,
        cursor: 'pointer',
      },
    },
  },
  icon: {
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
    },
  },
  text: {
    marginRight: theme.spacing(5),
    fontWeight: 500,
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

function LeftBar() {
  const classes = useStyles();

  const [currentTab, setCurrentTab] = useState('Questions');

  const leftBarItems = [
    {
      name: 'Questions',
      to: '/questions',
      iconComponent: <BsViewList className={classes.icon} />,
    },
    ,
    {
      name: 'Tags',
      to: '/tags',
      iconComponent: <FaSlackHash className={classes.icon} />,
    },
    {
      name: 'Natural Science',
      to: 'questions/nat',
      iconComponent: <BiAtom className={classes.icon} />,
    },
    {
      name: 'Social Science',
      to: 'questions/soc',
      iconComponent: <VscLaw className={classes.icon} />,
    },
    {
      name: 'Others',
      to: 'questions/others',
      iconComponent: <TbMessageLanguage className={classes.icon} />,
    },
    {
      name: 'Users',
      to: '/users',
      iconComponent: <RiUserSearchLine className={classes.icon} />,
    },
  ];

  return (
    <Container className={classes.container}>
      {/* <div
        className={classes.items}
        style={{
          backgroundColor: '#fff',
          color: '#115293',
          borderRadius: 8,
          padding: 3,
        }}
      >
        <Home className={classes.icon} />
        <Typography className={classes.text}>HomePage</Typography>
      </div> */}

      {leftBarItems.map((item, index) => (
        <div
          style={{
            borderRadius: '5px',
            color: item.name === currentTab ? `#fff` : '',
            backgroundColor:
              item.name === currentTab ? `${kPrimaryColorMain}` : '',
          }}
        >
          <Link to={item.to}>
            <div
              className={classes.items}
              style={{ padding: '10px 0px' }}
              key={index}
            >
              <div>{item.iconComponent}</div>
              <Typography className={classes.text}>{item.name}</Typography>
            </div>
          </Link>
        </div>
      ))}
    </Container>
  );
}

export default LeftBar;
