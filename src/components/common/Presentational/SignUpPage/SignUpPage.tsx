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
import { timeOut } from 'src/utils/constants/constants';
import { userSignupSuccess } from 'src/store/reducers/dataSlice';
import CircularProgress from '@mui/material/CircularProgress';
import { useAppDispatch } from 'src/store/hooks';

export default function SignUpPage() {
  const [signupUser, { isLoading: isUpdating }] = useSignupUserMutation();
  const constantData: LocalizationInterface = localizedData();
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password2, setPassword2] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [firstnameError, setFirstNameError] = React.useState('');
  const [lastName, setLastName] = React.useState('');
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
    /* eslint-disable */
    const user = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      password2: password2,
    };
    /* eslint-enable */
    if (handleErrors()) {
      await signupUser(user)
        .unwrap()
        .then((resp) => {
          toast.success('User Successfully Added', {
            autoClose: timeOut,
            pauseOnHover: false,
          });
          localStorage.setItem('token', resp.token);
          dispatch(userSignupSuccess(resp.user));
          navigate('/');
        })
        .catch((error) => {
          if ('email' in error.data) {
            toast.error(error.data.email[0], {
              autoClose: timeOut,
              pauseOnHover: false,
            });
          } else {
            toast.error(error.data.password[0], {
              autoClose: timeOut,
              pauseOnHover: false,
            });
          }
        });
    }
  };
  const handleErrors = () => {
    if (
      firstName &&
      lastName &&
      email?.length &&
      checkValidEmail(email) &&
      password?.length &&
      checkValidPassword(password)
    ) {
      return true;
    } else {
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
        setPasswordError('Minimum eight characters, at least one letter and one number');
      } else {
        setPasswordError('');
      }
      if (!firstName) {
        setFirstNameError('First Name is required.');
      } else {
        setFirstNameError('');
      }
      if (!lastName) {
        setLastNameError('Last Name is required.');
      } else {
        setLastNameError('');
      }
    }
    return false;
  };

  return (
    <Box className='parent-signup'>
      <Container component='main' maxWidth='sm' className='signup-container-cls'>
        <Box
          className='signup-page '
          sx={{
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
            className='signup-inputs'
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid className='signup-inputs-section' container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='given-name'
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='First Name'
                  disabled={isUpdating}
                  autoFocus
                  value={firstName}
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
                  disabled={isUpdating}
                  autoComplete='family-name'
                  value={lastName}
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
                  disabled={isUpdating}
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
                  disabled={isUpdating}
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
                  disabled={isUpdating}
                  id='confirmpassword'
                  onChange={handleConfirmPassword}
                  value={password2}
                  autoComplete='new-password'
                />
                <p className='errorText'>{passwordError}</p>
              </Grid>
            </Grid>
            {isUpdating ? (
              <Box className='signup-progress-cls'>
                <CircularProgress />
              </Box>
            ) : (
              <Button
                type='submit'
                className='submit-cls'
                fullWidth
                disabled={isUpdating}
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                {signupBtn}
              </Button>
            )}
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
