import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { checkValidEmail } from 'src/utils/helpers/helper';
import { localizedData } from 'src/utils/helpers/language';
import { LocalizationInterface } from 'src/utils/interfaces/localizationinterfaces';
import { useSigninUserMutation, useRequestResetEmailMutation } from 'src/store/reducers/authapi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Container from '@mui/material/Container';
import { timeOut } from 'src/utils/constants/constants';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import 'src/components/common/Presentational/LoginPage/LoginPage.scss';

const LoginPage = () => {
  const constantData: LocalizationInterface = localizedData();
  const [requestResetEmail] = useRequestResetEmailMutation();
  const [signinUser, { isLoading: isUpdating }] = useSigninUserMutation();
  const [username, setUserName] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const { loginTitle, signinBtn, signupLink, forgotPassword } = constantData.loginPage;
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
    if (checkValidEmail(username)) {
      setEmailError('');
    }
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length) {
      setPasswordError('');
    }
    setPassword(e.target.value);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (handleErrors()) {
      await signinUser({ username, password })
        .unwrap()
        .then((resp) => {
          localStorage.setItem('token', resp.token);
          navigate('/');
        })
        .catch((error) => {
          toast.error(error.data.non_field_errors[0],{
            autoClose:timeOut,
            pauseOnHover:false
          });
        });
    }
  };
  const handleErrors = () => {
    if (username?.length && checkValidEmail(username) && password?.length) {
      return true;
    } else {
      if (!username) {
        setEmailError('Email is required.');
      } else if (!checkValidEmail(username)) {
        setEmailError('Invalid Email.');
      } else {
        setEmailError('');
      }
      if (!password) {
        setPasswordError('Password is required.');
      } else {
        setPasswordError('');
      }
    }
    return false;
  };
  const handleLinkClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    /* eslint-disable */
    const user = {
      email: username,
      redirect_url: `${window.location.origin}/forgot-password`,
    };
    /* eslint-enable */
    if (!username) {
      setEmailError('Email is required.');
    } else if (!checkValidEmail(username)) {
      setEmailError('Invalid Email.');
    } else {
      await requestResetEmail(user)
        .unwrap()
        .then((resp) => {
          toast.success(resp.success,{
            autoClose:timeOut,
            pauseOnHover:false
          });
        })
        .catch((error) => {
          toast.error(error.data.error, {
            autoClose: timeOut,
            pauseOnHover: false
          });
        });
    }
  };
  return (
    <Box className='parent-login'>
      <Container component='main' maxWidth='sm' className='login-container-cls'>
        <Box
          className='login-page'
          sx={{
            my: 5,
            border: 0,
            boxShadow: 3,
            padding: 3,
            borderRadius: 5,
            bgcolor: 'background.default',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography className='login-title' component='h1' variant='h5'>
            {loginTitle}
          </Typography>
          <Box
            className='login-inputs'
            onSubmit={handleSubmit}
            component='form'
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid className='login-inputs-section' container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  disabled={isUpdating}
                  autoFocus
                  value={username}
                  onChange={handleEmail}
                />
                <p className='errorText'>{emailError}</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  disabled={isUpdating}
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  onChange={handlePassword}
                  value={password}
                  autoComplete='current-password'
                />
                <p className='errorText'>{passwordError}</p>
              </Grid>
            </Grid>
            {isUpdating ? (
              <Box className='login-progress-cls'>
                <CircularProgress />
              </Box>
            ) : (
              <Button
                className='submit-button'
                type='submit'
                disabled={isUpdating}
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                {signinBtn}
              </Button>
            )}
            <Grid container>
              <Grid item xs>
                <Button className='forgot-link' onClick={handleLinkClick}>
                  {forgotPassword}
                </Button>
              </Grid>
              <Grid item>
                <Link className='signup-link' href='/signup' variant='body2'>
                  {signupLink}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;
