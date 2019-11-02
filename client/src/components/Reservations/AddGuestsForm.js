import React, { useState, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Context from '../../context';

const useStyles = makeStyles(theme => ({
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}));

const AddGuestsForm = () => {
  const classes = useStyles();
  const { dispatch } = useContext(Context);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  console.log('TCL: AddGuestsForm -> setLastName', lastName);
  console.log('TCL: AddGuestsForm -> setFirstName', firstName);

  const handleFirstNameChange = ({ target }) => {
    setFirstName(target.value);
  };

  const handleLastNameChange = ({ target }) => {
    setLastName(target.value);
  };

  const handleAddGuest = () => {
    let guest = { firstName, lastName };
    console.log('TCL: handleAddGuest -> guest', guest);
    dispatch({ type: 'ADD_GUEST', payload: guest });
    setFirstName('');
    setLastName('');
  };
  return (
    <>
      <Typography variant='h6' gutterBottom>
        Add Guests
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            required
            id='firstName'
            name='firstName'
            label='First Name'
            value={firstName}
            onChange={handleFirstNameChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id='lastName'
            name='lastName'
            label='Last Name'
            value={lastName}
            onChange={handleLastNameChange}
            fullWidth
          />
        </Grid>
      </Grid>
      <Button
        variant='contained'
        className={classes.button}
        onClick={handleAddGuest}
      >
        Add
      </Button>
    </>
  );
};

export default AddGuestsForm;
