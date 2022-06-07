import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { checkValidEmail } from 'src/utils/helpers/helper';
import { localizedData } from 'src/utils/helpers/language';
import { LocalizationInterface } from 'src/utils/interfaces/localizationinterfaces';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import 'src/components/common/Presentational/LoginPage/LoginPage.scss';

const LoginPage = () => {
  const constantData: LocalizationInterface = localizedData();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const { loginTitle, rememberMe, signinBtn, signupLink, forgotPassword } = constantData.loginPage;

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (checkValidEmail(email)) {
      setEmailError('');
    }
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length) {
      setPasswordError('');
    }
    setPassword(e.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleErrors();
    if (verifyErrors()) {
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
    } else {
      console.log('invalid data');
    }
  };
  const handleErrors = () => {
    if(!email) {
      setEmailError('Email is required.')
    }
    else if(!checkValidEmail(email)) {
      setEmailError('Invalid Email.')
    }
    else {
      setEmailError('');
    }
    if(!password) {
      setPasswordError('Password is required.')
    }
    else {
      setPasswordError('')
    }
    
  };
  const verifyErrors = () => {
    return email?.length &&
    checkValidEmail(email) &&
    password?.length;
  };
  return (
    <div>
      <Grid
        container
        component='main'
        sx={{ height: '100vh' }}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <Box
          className='Login-Page'
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography className='login-title' component='h1' variant='h5'>
            {loginTitle}
          </Typography>
          <Box
            className='inputs'
            onSubmit={handleSubmit}
            component='form'
            noValidate
            sx={{ mt: 1 }}
          >
            <Grid className='inputs-section' container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  autoFocus
                  value={email}
                  onChange={handleEmail}
                />
                <p className='errorText'>{emailError}</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  onChange={handlePassword}
                  value={password}
                  autoComplete='current-password'
                />
                <p className='errorText'>{passwordError}</p>
                {/* <p className="errorText">{loginError}</p>  */}
              </Grid>
            </Grid>

            <FormControlLabel
              control={
                <Checkbox
                  value='remember'
                  sx={{
                    '&.Mui-checked': {
                      '&, & + .MuiFormControlLabel-label': {
                        color: 'var(--normal-text)',
                      },
                    },
                  }}
                />
              }
              label={<Typography className='remember-me'>{rememberMe}</Typography>}
            />
            <Button
              className='submit-button'
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              {signinBtn}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link className='forgot-link' href='#' variant='body2'>
                  {forgotPassword}
                </Link>
              </Grid>
              <Grid item>
                <Link className='signup-link' href='/signup' variant='body2'>
                  {signupLink}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </div>
  );
};

export default LoginPage;
