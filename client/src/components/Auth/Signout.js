import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';
import { withStyles } from '@material-ui/core/styles';
import Context from '../../context';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Typography from '@material-ui/core/Typography';

const Signout = ({ classes }) => {
  const { dispatch } = useContext(Context);

  const onSignout = () => {
    dispatch({ type: 'SIGNOUT_USER' });
  };
  return (
    <GoogleLogout
      onLogoutSuccess={onSignout}
      render={({ onClick }) => (
        <span className={classes.root} onClick={onClick}>
          <Typography
            style={{ display: 'block' }}
            variant='body1'
            className={classes.buttonText}
          >
            Signout
          </Typography>
          <ExitToAppIcon className={classes.buttonIcon} />
        </span>
      )}
    />
  );
};

const styles = {
  root: {
    cursor: 'pointer',
    display: 'flex'
  },
  buttonText: {
    color: 'orange'
  },
  buttonIcon: {
    marginLeft: '10px',
    color: 'orange'
  }
};

export default withStyles(styles)(Signout);
