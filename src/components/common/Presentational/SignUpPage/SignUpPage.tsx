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
import { useSignupUserMutation } from 'src/store/reducers/authapi';
import 'src/components/common/Presentational/SignUpPage/SignUpPage.scss';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userSignupSuccess } from 'src/store/reducers/dataSlice';
// import { GoogleLogin } from '@react-oauth/google';
import { useAppDispatch } from 'src/store/hooks';

export default function SignUpPage() {
  const [signupUser] = useSignupUserMutation();
  const constantData: LocalizationInterface = localizedData();
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password2, setPassword2] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [first_name, setFirstName] = React.useState('');
  const [firstnameError, setFirstNameError] = React.useState('');
  const [last_name, setLastName] = React.useState('');
  const [lastnameError, setLastNameError] = React.useState('');
  const { signupTitle, signupBtn, signinLink } = constantData.signUpPage;
  const dispatch = useAppDispatch();
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
  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword2(e.target.value);
    if (checkValidPassword(password2)) {
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
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleErrors();
    if (verifyErrors()) {
      await signupUser({ first_name, last_name, email, password, password2 })
        .unwrap()
        .then((resp) => {
          toast.success('User Successfully Added');
          localStorage.setItem('token', resp.token);
          dispatch(userSignupSuccess(resp.user));
          navigate('/');
        })
        .catch((error) => {
          if ('email' in error.data) {
            toast.error(error.data.email[0]);
          } else {
            toast.error(error.data.password[0]);
          }
        });
    } else {
      console.log('verifyerro');
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
    if (!password || !password2) {
      setPasswordError('Password is required.');
    } else if (!checkValidPassword(password)) {
      setPasswordError('Password must be eight characters, at least one letter and one number');
    } else {
      setPasswordError('');
    }
    if (!first_name) {
      setFirstNameError('First Name is required.');
    } else {
      setFirstNameError('');
    }
    if (!last_name) {
      setLastNameError('Last Name is required.');
    } else {
      setLastNameError('');
    }
  };
  const verifyErrors = () => {
    return first_name && last_name && email?.length && checkValidEmail(email) && password?.length &&  checkValidPassword(password);
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
                  value={first_name}
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
                  value={last_name}
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
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='confirmpassword'
                  label='ConfirmPassword'
                  type='password'
                  id='confirmpassword'
                  onChange={handleConfirmPassword}
                  value={password2}
                  autoComplete='new-password'
                />
                <p className='errorText'>{passwordError}</p>
              </Grid>
            </Grid>
            <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
              {signupBtn}
            </Button>
            <Box className='continue-box'>
              {/* <GoogleLogin
                text={'continue_with'}
                width={'1200px'}
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              /> */}
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
