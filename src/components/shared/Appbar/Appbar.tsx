import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import HikingIcon from '@mui/icons-material/Hiking'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import 'src/components/shared/Appbar/Appbar.scss';
import { useTheme } from '@mui/material/styles';
import { Divider } from '@mui/material';
import { ColorModeContext } from 'src/store/colormodecontext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

type Anchor = 'left';
const pages = ['Products', 'Pricing', 'Blog'];

const ResponsiveAppBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<Element | undefined | null>(null);
  const [anchorElOne, setAnchorElOne] = React.useState<null | HTMLElement>(null);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const authToken = localStorage.getItem('token');
  const { toggleMode } = React.useContext(ColorModeContext);
  const [state, setState] = React.useState({
    left: false,
  });
  const theme = useTheme();
  const navigate = useNavigate();

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }
  function handleShopClick(event: React.MouseEvent<HTMLButtonElement>) {
    if (anchorElOne !== event.currentTarget) {
      setAnchorElOne(event.currentTarget);
    }
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  function handleClose() {
    setAnchorEl(null);
  }
  function handleCloseShop() {
    setAnchorElOne(null);
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenUserMenu = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorElUser(ev.currentTarget);
  };
  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
  const handleLogout = () => {
    setAnchorElUser(null);
    localStorage.removeItem('token');
    navigate('/');
  };
  const handleChangePassword = () => {
    setAnchorElUser(null);
    navigate('/change-password');
  };
  return (
    <AppBar
      sx={{ bgcolor: 'background.default' }}
      className='app-bar'
      position='static'
      elevation={1}
    >
      <Container className='container-class' maxWidth='xl'>
        <Toolbar className='toolbar-class' disableGutters>
          <Box className='list-buttons' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link sx={{ color: 'buttontext.default' }} className='explore-btn' href='/explore'>
              Explore
            </Link>
            <Button
              aria-owns={anchorEl ? 'simple-menu' : undefined}
              className='list-items'
              sx={{ color: 'buttontext.default' }}
              aria-haspopup='true'
              onClick={handleClick}
              onMouseOver={handleClick}
            >
              Saved
            </Button>
            <Menu
              id='simple-menu'
              className='list-items'
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
            >
              <MenuItem onClick={handleClose}>My favorites</MenuItem>
              <MenuItem onClick={handleClose}>My maps</MenuItem>
              <MenuItem onClick={handleClose}>Activites</MenuItem>
              <MenuItem onClick={handleClose}>Lists</MenuItem>
              <MenuItem onClick={handleClose}>Completed</MenuItem>
            </Menu>

            <Button
              aria-owns={anchorEl ? 'simple-menuone' : undefined}
              aria-haspopup='true'
              className='list-items'
              sx={{ color: 'buttontext.default' }}
              onClick={handleShopClick}
              onMouseOver={handleShopClick}
            >
              Shop
            </Button>
            <Menu
              id='simple-menuone'
              className='list-items'
              anchorEl={anchorElOne}
              open={Boolean(anchorElOne)}
              onClose={handleCloseShop}
              MenuListProps={{ onMouseLeave: handleCloseShop }}
            >
              <MenuItem onClick={handleCloseShop}>AllTrails Gear</MenuItem>
              <MenuItem onClick={handleCloseShop}>Give Pro</MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={toggleDrawer('left', true)}
              style={{ color: 'black' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box className='logo-class' sx={{ flexGrow: 5 }}>
            <HikingIcon
              sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1, color: 'buttontext.default' }}
            />
            <Typography
              variant='h6'
              noWrap
              component={Link}
              href='/'
              sx={{
                mr: 0,
                display: { xs: 'flex', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'buttontext.default',
                textDecoration: 'none',
              }}
            >
              PakTrails
            </Typography>
          </Box>
          {authToken ? (
            <Box className='signin-avatar' sx={{ flexGrow: 2 }}>
              <>
                <Tooltip title='Open settings'>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id='menu-appbar'
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem>
                    <Typography textAlign='center'>Profile</Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography textAlign='center'>Account</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <Typography textAlign='center'>Logout</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleChangePassword}>
                    <Typography textAlign='center'>Change Password</Typography>
                  </MenuItem>
                </Menu>
                <IconButton onClick={toggleMode}>
                  {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </>
            </Box>
          ) : (
            <Box className='dropdown-class' sx={{ flexGrow: 1 }}>
              <Link
                className='help-btn'
                sx={{ color: 'buttontext.default', my: 2, display: { xs: 'none', md: 'flex' } }}
                href='/help'
              >
                Help
              </Link>
              <Button
                onClick={() => navigate('/signup')}
                className='pro-btn'
                sx={{ display: { xs: 'none', md: 'flex' } }}
              >
                Sign up
              </Button>
              <Button
                onClick={() => navigate('/login')}
                className='pro-btn'
                sx={{ display: { xs: 'none', md: 'flex' } }}
              >
                Login
              </Button>

              <IconButton onClick={toggleMode}>
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Box>
          )}

          <Box className='drw-class'>
            <SwipeableDrawer
              className='drw-cls-content'
              anchor={'left'}
              open={state['left']}
              onClose={toggleDrawer('left', false)}
              onOpen={toggleDrawer('left', true)}
              PaperProps={{ style: { width: '200px' } }}
            >
              <Box
                className='sidedraw-class'
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'start',
                  height: '100vh',
                  justifyContent: 'center',
                }}
              >
                <Button
                  className='list-item'
                  sx={{ color: 'buttontext.default', fontSize: '20px', fontWeight: 'bold' }}
                  onClick={() => navigate('/explore')}
                >
                  Explore
                </Button>
                <Button
                  aria-owns={anchorEl ? 'simple-menu' : undefined}
                  className='list-item'
                  aria-haspopup='true'
                  onClick={handleClick}
                  sx={{ color: 'buttontext.default', fontSize: '20px', fontWeight: 'bold' }}
                >
                  Saved
                </Button>
                <Button
                  aria-owns={anchorEl ? 'simple-menu' : undefined}
                  aria-haspopup='true'
                  className='list-item'
                  sx={{ color: 'buttontext.default', fontSize: '20px', fontWeight: 'bold' }}
                  onClick={handleShopClick}
                >
                  Shop
                </Button>
                <Button
                  sx={{ color: 'buttontext.default', fontSize: '20px', fontWeight: 'bold' }}
                  className='list-item'
                >
                  Help
                </Button>
                <Divider />
                <Button
                  sx={{
                    color: 'white',
                    background: '#219ad8',
                    width: '40%',
                    marginLeft: '10px',
                    marginTop: '10px',
                    height: '30px',
                    fontSize: '13px',
                  }}
                  className='signup-btn'
                  onClick={() => navigate('/signup')}
                >
                  Sign up
                </Button>
                <Button
                  sx={{
                    color: 'white',
                    background: '#219ad8',
                    width: '40%',
                    marginLeft: '10px',
                    marginTop: '10px',
                    height: '30px',
                    fontSize: '13px',
                  }}
                  onClick={() => navigate('/login')}
                  className='login-btn'
                >
                  Login
                </Button>
              </Box>
            </SwipeableDrawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
