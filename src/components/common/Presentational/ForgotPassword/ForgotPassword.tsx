import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { localizedData } from 'src/utils/helpers/language';
import { LocalizationInterface } from 'src/utils/interfaces/localizationinterfaces';
import { useForgotPasswordRequestMutation } from 'src/store/reducers/authapi';
import { checkValidPassword } from 'src/utils/helpers/helper';
import { toast } from 'react-toastify';
import { useNavigate, useSearchParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import 'src/components/common/Presentational/ForgotPassword/ForgotPassword.scss';

const ForgotPassword = () => {
  const constantData: LocalizationInterface = localizedData();
  const [searchParams] = useSearchParams();
  const [forgotPasswordRequest, { isLoading: isUpdating }] = useForgotPasswordRequestMutation();
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const { changePassword, submit } = constantData.forgotPage;

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (checkValidPassword(password)) {
      setPasswordError('');
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      password: password,
      token: searchParams.get('token'),
      uidb64: searchParams.get('uidb64'),
    };
    if (handleErrors()) {
      await forgotPasswordRequest(payload)
        .unwrap()
        .then((resp) => {
          navigate('/login');
          toast.success(resp.message);
        })
        .catch((error) => {
          toast.error(error.data.error);
        });
    }
  };
  const handleErrors = () => {
    if (password?.length && checkValidPassword(password)) {
      return true;
    } else {
      if (!password) {
        setPasswordError('Password is required.');
      } else if (!checkValidPassword(password)) {
        setPasswordError('Minimum eight characters, at least one letter and one number');
      } else {
        setPasswordError('');
      }
    }
    return false;
  };
  return (
    <Box className='forgot-login'>
      <Container component='main' maxWidth='sm' className='forgot-container-cls'>
        <Box
          className='forgot-page'
          sx={{
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
            {changePassword}
          </Typography>
          <Box
            className='forgot-inputs'
            onSubmit={handleSubmit}
            component='form'
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid className='forgot-inputs-section' container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  name='Enter New Password'
                  label='Enter New Password'
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
              <Box className='forgot-progress-cls'>
                <CircularProgress />
              </Box>
            ) : (
              <Button
                className='submit-button'
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                {submit}
              </Button>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ForgotPassword;
