import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ListOfGuests from './ListOfGuests';
import Context from '../../context';
import { format } from 'date-fns';

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: theme.spacing(2)
  }
}));

export default function Review() {
  const classes = useStyles();
  const { state } = useContext(Context);
  const { arrivalDate, departureDate, hotelName } = state;

  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Reservation summary
      </Typography>
      {/* List of guests */}
      <ListOfGuests />
      {/* Hotel info & checkin/out dates */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant='h6' gutterBottom className={classes.title}>
            Hotel Name
          </Typography>
          <Typography gutterBottom color={hotelName ? 'inherit' : 'error'}>
            {hotelName ? hotelName : 'Please select hotel'}
          </Typography>
          <Typography gutterBottom>878 Log Hollow Dr 7898</Typography>
        </Grid>
        <Grid item container direction='column' xs={12} sm={6}>
          <Typography variant='h6' gutterBottom className={classes.title}>
            Check-in & Check-out
          </Typography>
          <Grid container>
            <Grid item xs={5}>
              <Typography
                gutterBottom
                color={arrivalDate ? 'inherit' : 'error'}
              >
                {arrivalDate
                  ? format(arrivalDate, 'MMM dd yyyy')
                  : 'Please select arrival date'}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              -
            </Grid>
            <Grid item xs={5}>
              <Typography
                gutterBottom
                color={departureDate ? 'inherit' : 'error'}
              >
                {departureDate
                  ? format(departureDate, 'MMM dd yyyy')
                  : 'Please select departure date'}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
