import {
  Avatar,
  Chip,
  Container,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  Link,
  makeStyles,
  Typography,
} from '@material-ui/core';

import { AiOutlineInfoCircle } from 'react-icons/ai';

import { AvatarGroup } from '@material-ui/lab';

import { useEffect, useState } from 'react';
// import { getFrindsImages } from '../static/images/fakePosts';

// import avator from '../../assets/images/avator.jpg';
import madingo from '../../assets/images/madingo.jpg';
import yh from '../../assets/images/yh.jpg';

import { kSecondaryColorMain } from '../../services/constants/colors';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'sticky',
    top: 0,
    paddingTop: theme.spacing(10),
    height: '100vh',
  },
  title: {
    fontSize: 18,
    fontWeight: 550,
    color: '#555',
  },
  link: {
    marginRight: theme.spacing(2),
    color: '#555',
    fontSize: 16,
  },
}));

const BroadcastMessage = () => {
  // This component will broadcast messages to the user.
  const classes = useStyles();
  const longMessage =
    'Ethiopian Higher School leaving examination is going to held at 21st of June.';
  return (
    <div
      className="rounded-lg py-3"
      style={{ color: '#555', backgroundColor: kSecondaryColorMain }}
    >
      <Typography
        gutterBottom
        className={'flex justify-center'}
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#555',
        }}
      >
        Broadcasts
      </Typography>
      <Divider style={{ background: 'white' }} variant="middle" />
      <div className="flex justify-between mx-1 my-2 px-1 py-2 items-center">
        <AiOutlineInfoCircle fontSize="34" />
        <Typography className="mx-2 px-2">
          {longMessage.length > 80
            ? longMessage.substring(0, 50).concat(' ...')
            : longMessage}
        </Typography>
      </div>

      <div className="flex justify-between mx-1 my-2 px-1 py-2 items-center">
        <AiOutlineInfoCircle fontSize="34" />
        <Typography className="mx-2 px-2">
          FDRE Ministry of Education,Ethiopia (MOE) announces university
          entrance Date.
        </Typography>
      </div>
    </div>
  );
};

const RecentContributors = ({ imageUrls }) => {
  const classes = useStyles();
  return (
    <div className="my-8">
      <Typography gutterBottom className={classes.title}>
        Recent Contributor(s)
      </Typography>
      <AvatarGroup max={4} style={{ marginBottom: 20 }}>
        {imageUrls.map((image) => (
          <Avatar key={image} src={image.imageUrl} alt={image.name} />
        ))}
      </AvatarGroup>
    </div>
  );
};

const PageTagGenerator = ({ pagesTopTags }) => {
  const classes = useStyles();

  return (
    <div className="my-8">
      <Typography gutterBottom className={classes.title}>
        This Page's Top Tags
      </Typography>

      <div className="flex flex-col">
        {pagesTopTags.map((tag) => (
          <Link to={tag.to} style={{ textDecoration: 'none' }}>
            {/* <div className="flex mx-3 my-1 justify-left">
              <Chip
                label={tag.tagName}
                className="mr-10 hover:bg-slate-500 hover:text-white hover:scale-110 hover:cursor-pointer"
              />
              <Typography style={{ color: '#000' }}>x {tag.count}</Typography>
            </div> */}
            <Grid container className="mr-3 my-1">
              <Grid item xs={6}>
                <Chip
                  label={tag.tagName}
                  className="mr-10 hover:bg-slate-500 hover:text-white hover:scale-110 hover:cursor-pointer"
                />
              </Grid>
              <Grid item xs={6}>
                <Typography style={{ color: '#000' }}>x {tag.count}</Typography>
              </Grid>
            </Grid>
          </Link>
        ))}
      </div>
    </div>
  );
};

function RightBar() {
  const classes = useStyles();
  const [imageUrls, setImageUrls] = useState([]);

  const getFrindsImages = [
    {
      id: '0',
      name: 'Mango',
      description:
        'Fruites are the means by which flowering plants disseminate their seed. In botaincal usage, the term frutes a collection of usage rights for a block of spectrumthat is granted by a regulator often through an auction.',
      imageUrl: madingo,
    },
    {
      id: '1',
      name: 'Orange',
      description:
        'Fruites are the means by which flowering plants disseminate their seed. In botaincal usage, the term frutes a collection of usage rights for a block of spectrumthat is granted by a regulator often through an auction.',
      imageUrl: yh,
    },
  ];
  useEffect(() => {
    setImageUrls(getFrindsImages);
  }, []);

  const pagesTopTags = [
    { tagName: 'cell', count: 12, to: '/tags/cell' },
    { tagName: 'energy', count: 10, to: '/tags/energy' },
    { tagName: 'H2O', count: 7, to: '/tags/government' },
  ];

  return (
    <Container className={classes.container}>
      <BroadcastMessage imageUrls={imageUrls} />

      <PageTagGenerator pagesTopTags={pagesTopTags} />

      <RecentContributors imageUrls={imageUrls} />
    </Container>
  );
}

export default RightBar;
