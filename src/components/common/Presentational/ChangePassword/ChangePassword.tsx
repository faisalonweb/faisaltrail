import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { localizedData } from 'src/utils/helpers/language';
import { LocalizationInterface } from 'src/utils/interfaces/localizationinterfaces';
import { useChangePasswordRequestMutation } from 'src/store/reducers/privateapis';
import { checkValidPassword } from 'src/utils/helpers/helper';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import 'src/components/common/Presentational/ChangePassword/ChangePassword.scss';

const ChangePassword = () => {
  const constantData: LocalizationInterface = localizedData();
  const [changePasswordRequest] = useChangePasswordRequestMutation();
  const [password2, setPassword2] = React.useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const { changePassword, submit } = constantData.forgotPage;

  const handleOldPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (checkValidPassword(password)) {
      setPasswordError('');
    }
  };
  const handleNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword2(e.target.value);
    if (checkValidPassword(password2)) {
      setPasswordError('');
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    /* eslint-disable */
    const payload = {
      old_password: password,
      new_password: password2,
    };
    /* eslint-enable */
    if (handleErrors()) {
      await changePasswordRequest(payload)
        .unwrap()
        .then((resp) => {
          toast.success(resp.message);
          navigate('/');
        })
        .catch((error) => {
          toast.error(error.data?.old_password[0]);
        });
    }
  };
  const handleErrors = () => {
    if (password?.length && checkValidPassword(password)) {
      return true;
    } else {
      if (!password || !password2) {
        setPasswordError('Password is required.');
      } else if (!checkValidPassword(password2)) {
        setPasswordError('Minimum eight characters, at least one letter and one number');
      } else {
        setPasswordError('');
      }
    }
    return false;
  };
  return (
    <Box className='change-login'>
      <Container component='main' maxWidth='sm' className='container-change-cls'>
        <Box
          className='change-password-page'
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
          <Typography className='change-password-title' component='h1' variant='h5'>
            {changePassword}
          </Typography>
          <Box
            className='change-password-inputs'
            onSubmit={handleSubmit}
            component='form'
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid className='change-inputs-section' container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  name='Enter Old Password'
                  label='Enter Old Password'
                  type='password'
                  id='password'
                  onChange={handleOldPassword}
                  value={password}
                  autoComplete='current-password'
                />
                <p className='errorText'>{passwordError}</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  name='Enter New Password'
                  label='Enter New Password'
                  type='password'
                  id='password'
                  onChange={handleNewPassword}
                  value={password2}
                  autoComplete='current-password'
                />
                <p className='errorText'>{passwordError}</p>
              </Grid>
            </Grid>
            <Button
              className='submit-button'
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              {submit}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ChangePassword;
