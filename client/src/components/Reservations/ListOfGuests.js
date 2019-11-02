import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Person from '@material-ui/icons/Person';
import DeleteIcon from '@material-ui/icons/Delete';
import Context from '../../context';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  }
}));

export default function ListOfGuests() {
  const classes = useStyles();
  const { state, dispatch } = useContext(Context);
  const { guests } = state;

  const onHandleRemove = ({ id }) => {
    dispatch({ type: 'REMOVE_GUEST', payload: id });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className={classes.demo}>
            <List>
              {guests.length === 0 ? (
                <Typography color='error'>Please add guest(s)</Typography>
              ) : (
                guests.map(guest => (
                  <ListItem key={guest.id}>
                    <ListItemAvatar>
                      <Avatar>
                        <Person />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={guest.first_name + ' ' + guest.last_name}
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge='end'
                        aria-label='delete'
                        onClick={() => onHandleRemove(guest)}
                      >
                        <DeleteIcon color='error' />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))
              )}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
