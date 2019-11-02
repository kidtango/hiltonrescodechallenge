import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MapIcon from '@material-ui/icons/Map';
import Typography from '@material-ui/core/Typography';
import Context from '../context';
import Signout from './Auth/Signout';

const Header = ({ classes }) => {
  const { state } = useContext(Context);
  const { currentUser } = state;

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          {/* Title & Logo */}
          <div className={classes.grow}>
            <MapIcon className={classes.icon} />
            <Typography component='h1' variant='h6' color='inherit' noWrap>
              Reservations
            </Typography>
          </div>
          {/* current user */}
          {currentUser && (
            <div className={classes.userInfo}>
              <img
                className={classes.picture}
                src={currentUser.picture}
                alt={currentUser.name}
              />
              <div>
                <Typography variant='h5' color='inherit' noWrap>
                  {currentUser.name}
                </Typography>
              </div>
            </div>
          )}
          <div>|</div>
          {/* signout button */}

          <Signout />
        </Toolbar>
      </AppBar>
    </div>
  );
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex'
  },
  grow: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center'
  },
  userInfo: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: '10px'
  },

  icon: {
    marginRight: theme.spacing(),
    color: 'white',
    fontSize: 45
  },
  mobile: {
    display: 'none'
  },
  picture: {
    height: '50px',
    borderRadius: '90%',
    marginRight: theme.spacing(1)
  }
});

export default withStyles(styles)(Header);
