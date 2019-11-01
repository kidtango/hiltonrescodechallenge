import React from 'react';
import withRoot from '../withRoot';
import Grid from '@material-ui/core/Grid';
import Header from '../components/Header';
import MakeReservation from '../components/Reservations/MakeReservation';

const App = () => {
  return (
    <>
      <Header />
      <Grid container spacing={3}>
        <MakeReservation />
      </Grid>
    </>
  );
};

export default withRoot(App);
