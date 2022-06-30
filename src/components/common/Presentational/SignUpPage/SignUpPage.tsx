import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { checkValidEmail, checkValidPassword } from 'src/utils/helpers/helper';
import { localizedData } from 'src/utils/helpers/language';
import { useNavigate } from 'react-router-dom';
import { LocalizationInterface } from 'src/utils/interfaces/localizationinterfaces';
import 'src/components/common/Presentational/SignUpPage/SignUpPage.scss';
import { GoogleLogin } from '@react-oauth/google';

export default function SignUpPage() {
  const constantData: LocalizationInterface = localizedData();
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [firstname, setFirstName] = React.useState('');
  const [firstnameError, setFirstNameError] = React.useState('');
  const [lastname, setLastName] = React.useState('');
  const [lastnameError, setLastNameError] = React.useState('');
  const { signupTitle, signupBtn, signinLink } = constantData.signUpPage;
  const navigate = useNavigate();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (checkValidEmail(email)) {
      setEmailError('');
    }
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (checkValidPassword(password)) {
      setPasswordError('');
    }
  };
  const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length) {
      setFirstNameError('');
    }
    setFirstName(e.target?.value);
  };

  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length) {
      setLastNameError('');
    }
    setLastName(e.target?.value);
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
      navigate('/onboarding');
    } else {
      console.log('inverifyerro');
    }
  };
  const handleErrors = () => {
    if (!email) {
      setEmailError('Email is required.');
    } else if (!checkValidEmail(email)) {
      setEmailError('Invalid Email.');
    } else {
      setEmailError('');
    }
    if (!password) {
      setPasswordError('Password is required.');
    } else if (!checkValidPassword(password)) {
      setPasswordError('Password must be eight characters, at least one letter and one number');
    } else {
      setPasswordError('');
    }
    if (!firstname) {
      setFirstNameError('First Name is required.');
    } else {
      setFirstNameError('');
    }
    if (!lastname) {
      setLastNameError('Last Name is required.');
    } else {
      setLastNameError('');
    }
  };
  const verifyErrors = () => {
    if (
      firstname &&
      lastname &&
      email?.length &&
      checkValidEmail(email) === true &&
      password?.length &&
      checkValidPassword(password)
    ) {
      return true;
    }
    return false;
  };

  return (
    <Box className='Parent-Signup'>
      <Container
        component='main'
        maxWidth='sm'
        sx={{ height: '100vh', display: 'flex', justifyContent: 'center' }}
      >
        <Box
          className='Signup-Page '
          sx={{
            my: 5,
            border: 0,
            boxShadow: 3,
            padding: 3,
            borderRadius: 5,
            bgcolor: 'background.default',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
          <Typography component='h1' variant='h5'>
            {signupTitle}
          </Typography>
          <Box
            component='form'
            className='inputs'
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid className='inputs-section' container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='given-name'
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='First Name'
                  autoFocus
                  value={firstname}
                  onChange={handleFirstName}
                />
                <p className='errorText' style={{ marginTop: '5px' }}>
                  {firstnameError}
                </p>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='lastName'
                  label='Last Name'
                  name='lastName'
                  autoComplete='family-name'
                  value={lastname}
                  onChange={handleLastName}
                />
                <p className='errorText' style={{ marginTop: '5px' }}>
                  {lastnameError}
                </p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  value={email}
                  onChange={handleEmail}
                />
                <p className='errorText'>{emailError}</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  onChange={handlePassword}
                  value={password}
                  autoComplete='new-password'
                />
                <p className='errorText'>{passwordError}</p>
              </Grid>
            </Grid>
            <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
              {signupBtn}
            </Button>
            <Box className='continue-box'>
              <GoogleLogin
                text={'continue_with'}
                width={'1200px'}
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
            </Box>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link href='/login' variant='body2'>
                  {signinLink}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
