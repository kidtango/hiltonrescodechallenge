import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Review from './Review';
import SelectHotelForm from './SelectHotelForm';
import AddGuestsForm from './AddGuestsForm';
import Reservations from './Reservations';
import Context from '../../context';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Reservations
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(15),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
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
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}));

const steps = ['Select Hotel', 'Add Guests', 'Review your reservation'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <SelectHotelForm />;
    case 1:
      return <AddGuestsForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function MakeReservation() {
  const { state, dispatch } = useContext(Context);

  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [isDisabled, setDisableButton] = useState(false);

  useEffect(() => {
    if (activeStep === 2) {
      const { guests, arrivalDate, departureDate, hotelName } = state;
      if (
        guests.length < 1 ||
        arrivalDate === null ||
        departureDate === null ||
        hotelName === ''
      ) {
        setDisableButton(true);
      } else {
        setDisableButton(false);
      }
    }
  });

  useEffect(() => {
    if (!(activeStep === 2)) {
      setDisableButton(false);
    }
  });

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component='h1' variant='h4' align='center'>
            Reservations
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant='h5' gutterBottom>
                  Thank you for your reservation.
                </Typography>
                <Typography variant='subtitle1'>
                  Your reservation number is #2001539.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={handleNext}
                    className={classes.button}
                    disabled={isDisabled}
                  >
                    {activeStep === steps.length - 1 ? 'Book' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>

        {/* <Reservations /> */}
        <Copyright />
      </main>
    </React.Fragment>
  );
}
