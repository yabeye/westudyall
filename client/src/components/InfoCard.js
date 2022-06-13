import { Grid, Typography } from '@material-ui/core';
import { kPrimaryColorMain } from '../services/constants/colors';

const InfoCard = ({ status }) => {
  return (
    <Grid container flex justifyContent="space-between" className="mt-3">
      {status.map((s) => (
        <Grid item xs={3} key={s.title}>
          <div
            className="py-6 flex flex-col justify-center align-middle items-center content-center text-white"
            style={{
              backgroundColor: kPrimaryColorMain,
              width: '100%',
              borderRadius: 5,
            }}
          >
            <Typography variant="h3">{s.amount}</Typography>
            <Typography variant="h5">{s.title}</Typography>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default InfoCard;
