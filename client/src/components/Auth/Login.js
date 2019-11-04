import React, { useContext } from 'react';
import { GraphQLClient } from 'graphql-request';
import { GoogleLogin } from 'react-google-login';
import { withStyles } from '@material-ui/core/styles';
import Context from '../../context';
import Typography from '@material-ui/core/Typography';
import { ME_QUERY } from '../../graphql/queries';

const Login = ({ classes }) => {
  const { dispatch } = useContext(Context);

  const onSuccess = async googleUser => {
    try {
      const idToken = googleUser.getAuthResponse().id_token;
      console.log('TCL: Login -> idToken', idToken);
      const client = new GraphQLClient('http://localhost:4000/graphql', {
        headers: { authorization: idToken }
      });
      const { me } = await client.request(ME_QUERY);
      dispatch({ type: 'LOGIN_USER', payload: me });
      dispatch({ type: 'IS_LOGGED_IN', payload: googleUser.isSignedIn() });
    } catch (error) {
      onFailure(error);
    }
  };

  const onFailure = error => {
    console.log('Error loggin in', error);
  };
  return (
    <div className={classes.root}>
      <Typography
        component='h1'
        variant='h3'
        gutterBottom
        noWrap
        style={{ color: 'rgb(0, 44, 81)' }}
      >
        Hilton Reservations
      </Typography>
      <GoogleLogin
        clientId='177802363434-u5sd7uvkl3vvf7pure8vohcde2s19deg.apps.googleusercontent.com'
        onSuccess={onSuccess}
        onFailure={onFailure}
        isSignedIn={true}
        theme='dark'
        buttonText='Login with Google to book'
      />
    </div>
  );
};

const styles = {
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  }
};

export default withStyles(styles)(Login);
