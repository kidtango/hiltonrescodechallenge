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
import { format } from 'date-fns';

function createData(resId, arrivalDate, departureDate, hotelName, guestName) {
  return { resId, arrivalDate, departureDate, hotelName, guestName };
}

const rows = [
  createData(0, '16 Mar, 2019', '18 Mar, 2019', 'Hilton 1', 'Elvis Presley'),
  createData(1, '16 Mar, 2019', '18 Mar, 2019', 'Hilton 2', 'Bruce Lee'),
  createData(2, '16 JUN, 2019', '18 JUL, 2019', 'Hilton 3', 'Donald Trump'),
  createData(3, '16 NOV, 2019', '18 NOV, 2019', 'Hilton 1', 'Bill Gates'),
  createData(4, '16 Jan, 2019', '18 Oct, 2019', 'Hilton 10', 'Elon Musk')
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  }
}));

export default function Reservations() {
  const { state } = useContext(Context);
  const { arrivalDate } = state;

  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography component='h2' variant='h6' gutterBottom>
        List of Reservations
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
          {rows.map(row => (
            <TableRow key={row.resId}>
              <TableCell>
                <Link style={{ textDecoration: 'none' }} to='1'>
                  {row.resId}
                </Link>
              </TableCell>
              <TableCell>{row.arrivalDate}</TableCell>
              <TableCell>{row.departureDate}</TableCell>
              <TableCell>{row.hotelName}</TableCell>
              <TableCell>{row.guestName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color='primary' to='1'>
          See more reservations
        </Link>
      </div>
    </Paper>
  );
}
