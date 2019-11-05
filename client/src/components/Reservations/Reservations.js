import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Context from '../../context';
import { zonedTimeToUtc, utcToZonedTime, format } from 'date-fns';

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1)
  }
}));

export default function Reservations() {
  const { state } = useContext(Context);
  const { reservations } = state;
  console.log('TCL: MyReservations -> reservations', reservations);
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography component='h2' variant='h6' gutterBottom>
        Reservations
      </Typography>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Reservation No.</TableCell>
            <TableCell>Arrival Date</TableCell>
            <TableCell>Departure Date</TableCell>
            <TableCell>Hotel Name</TableCell>
            <TableCell>Primary Guest</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reservations.map(reservation => (
            <TableRow key={reservation._id}>
              <TableCell>
                <Link style={{ textDecoration: 'none' }} to='1'>
                  {reservation._id}
                </Link>
              </TableCell>
              <TableCell>
                {format(Number(reservation.arrivalDate), 'MMM dd, yyyy')}
              </TableCell>
              <TableCell>
                {format(Number(reservation.departureDate), 'MMM dd, yyyy')}
              </TableCell>
              <TableCell>{reservation.hotelName}</TableCell>
              <TableCell>
                {reservation.guests[0].firstName +
                  ' ' +
                  reservation.guests[0].lastName}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <div className={classes.seeMore}>
        <Link color='primary' to='1'>
          See all reservations
        </Link>
      </div> */}
    </Paper>
  );
}
