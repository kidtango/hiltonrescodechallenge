import React, { useState, useContext, useEffect } from 'react';
import uuidv4 from 'uuid/v4';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Context from '../../context';
import CustomizedSnackbars from '../utils/Snackbar';
import { useClient } from '../../graphql/client';
import { CREATE_GUEST_MUTATION } from '../../graphql/mutations';

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
  const { state, dispatch } = useContext(Context);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isDisabled, setDisableButton] = useState(false);
  const client = useClient();

  useEffect(() => {
    if (firstName === '' || lastName === '') {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  });

  const handleFirstNameChange = ({ target }) => {
    setFirstName(target.value);
  };

  const handleLastNameChange = ({ target }) => {
    setLastName(target.value);
  };

  const handleAddGuest = async e => {
    try {
      e.preventDefault();
      const guest = { firstName, lastName };
      const newGuest = await client.request(CREATE_GUEST_MUTATION, guest);
      dispatch({ type: 'OPEN_SNACKBAR', payload: true });
      dispatch({ type: 'ADD_GUEST', payload: newGuest });
      setFirstName('');
      setLastName('');
      setTimeout(() => {
        dispatch({ type: 'CLOSE_SNACKBAR', payload: false });
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form>
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
        type='submit'
        variant='contained'
        className={classes.button}
        onClick={handleAddGuest}
        disabled={isDisabled}
      >
        Add
      </Button>
      <CustomizedSnackbars />
    </form>
  );
};

export default AddGuestsForm;
