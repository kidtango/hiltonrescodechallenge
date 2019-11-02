import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import ListOfGuests from './ListOfGuests';

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0)
  },
  total: {
    fontWeight: '700'
  },
  title: {
    marginTop: theme.spacing(2)
  }
}));

export default function Review() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Reservation summary
      </Typography>

      <ListOfGuests />
      <List disablePadding>
        <ListItem className={classes.listItem}>
          <ListItemText primary='Total' />
          <Typography variant='subtitle1'>$34.06</Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}
