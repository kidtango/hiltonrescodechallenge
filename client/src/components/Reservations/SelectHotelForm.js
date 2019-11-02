import React, { useContext, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import ArrivalDatePicker from './ArrivalDatePicker';
import DepartureDatePicker from './DepatureDatePicker';
import Context from '../../context';

const SelectHotelForm = () => {
  const { state, dispatch } = useContext(Context);
  const [selectedHotel, setHotel] = useState('');
  console.log('TCL: SelectHotelForm -> selectedHotel', selectedHotel);

  const onHandleChange = ({ target }) => {
    // console.log('TCL: SelectHotelForm -> hotelName', e.target.value);
    setHotel(target.value);
    dispatch({ type: 'SELECT_HOTEL', payload: target.value });
  };

  return (
    <>
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
            value={selectedHotel}
            fullWidth
            onChange={onHandleChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <ArrivalDatePicker />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DepartureDatePicker />
        </Grid>
      </Grid>
    </>
  );
};

export default SelectHotelForm;
