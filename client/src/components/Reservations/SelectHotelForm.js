import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ArrivalDatePicker from './ArrivalDatePicker';
import DepartureDatePicker from './DepatureDatePicker';
const SelectHotelForm = () => {
  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Select Your Hotel
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id='hotelName'
            name='hotelName'
            label='Hotel Name'
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <ArrivalDatePicker />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DepartureDatePicker />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default SelectHotelForm;
