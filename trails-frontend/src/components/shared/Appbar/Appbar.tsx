import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {useNavigate} from 'react-router-dom';


import 'src/components/shared/Appbar/Appbar.scss';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
// const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
let navigate = useNavigate();


// const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//   setAnchorElUser(event.currentTarget);
// };

// const handleCloseNavMenu = () => {
//   setAnchorElNav(null);
// };

const handleCloseUserMenu = () => {
  setAnchorElUser(null);
};
const [anchorEl, setAnchorEl] = React.useState(null);

function handleClick(event:any) {
  if (anchorEl !== event.currentTarget) {
    setAnchorEl(event.currentTarget);
  }
}

function handleClose() {
  setAnchorEl(null);
}
return (
  <AppBar className="app-bar" position="static" elevation={1}>
    <Container className="container-class" maxWidth="xl">
      <Toolbar className="toolbar-class" disableGutters>
        <Box className="list-buttons" sx={{ flexGrow:1, display: { xs: 'none', md: 'flex'} }}>
            <Button
              className="list-items"
              onClick={() => navigate('/explore')}
            >
              Explore
            </Button>
            <Button
              aria-owns={anchorEl ? "simple-menu" : undefined}
              className="list-items"
              aria-haspopup="true"
              onClick={handleClick}
              onMouseOver={handleClick}
            >
              Saved
            </Button>
            <Menu
              id="simple-menu"
              className="list-items"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>

            <Button
              aria-owns={anchorEl ? "simple-menu" : undefined}
              aria-haspopup="true"
              className="list-items"
              onClick={handleClick}
              onMouseOver={handleClick}
            >
              Shop
            </Button>
        </Box>
        <Box className="logo-class" sx={{ flexGrow: 1 }}>
        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'black' }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'black',
            textDecoration: 'none',
          }}
        >
          LOGO
        </Typography>
        
        </Box> 

        <Box className="dropdown-class" sx={{ flexGrow: 1 }}>
        <Button
              className="help-btn"
              sx={{ my: 2, color: 'black', display: 'block'}}
            >
              Help
        </Button>
        <Button
        onClick={() => navigate('/signup')}
        className="pro-btn"
        >
        Sign up
          </Button>
        <Button
        onClick={() => navigate('/login')}
        className="pro-btn"
        >
        Login
          </Button>
          {/* <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip> */}
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
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
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);
};
export default ResponsiveAppBar;
