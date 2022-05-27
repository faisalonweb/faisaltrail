import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import googleLogo from "src/assets/images/googlestore.png";
import AppleLogo from "src/assets/images/playstore.png";
import fbLogo from "src/assets/images/fb.png";
import youtubeLogo from "src/assets/images/youtube.png";
import recLogo from "src/assets/images/rec.png";
import bidirectLogo from "src/assets/images/bidirect.png";
import twitterLogo from "src/assets/images/twitter.png";
import instaLogo from "src/assets/images/insta.png";
import playLogo from "src/assets/images/play.png";
import 'src/components/shared/Footer/Footer.scss'
import Divider from '@mui/material/Divider';

export default function Footer() {
  return (
    <footer>
      <Box
        className="footer-cls"
        bgcolor="black"
      >
        <Container className="container-cls" maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={3}>
            <Box className="list-head" borderBottom={1}>Explore</Box>  
              {/* <Box className="list-items" borderBottom={1}>Help</Box> */}
              <Box className="list-items">
                <Link href="/trails" color="inherit">
                  Trails
                </Link>
              </Box>
              <Box className="list-items">
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box className="list-items">
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Box>
              <Box className="list-items">
                <Link href="/" color="inherit">
                  Privacy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box className="list-head" borderBottom={1}>Maps</Box>
              <Box className="list-items">
                <Link href="/" color="inherit">
                  Login
                </Link>
              </Box>
              <Box className="list-items">
                <Link href="/" color="inherit">
                  Register
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box className="list-head" borderBottom={1}>Community</Box>
              <Box className="list-items">
                <Link href="/" color="inherit">
                  Backup
                </Link>
              </Box>
              <Box className="list-items">
                <Link href="/" color="inherit">
                  History
                </Link>
              </Box>
              <Box className="list-items">
                <Link href="/" color="inherit">
                  Roll
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box className="list-head" borderBottom={1}>Company</Box>
              <Box className="list-items">
                <Link href="/" color="inherit">
                  Backup
                </Link>
              </Box>
              <Box className="list-items">
                <Link href="/" color="inherit">
                  History
                </Link>
              </Box>
              <Box className="list-items">
                <Link href="/" color="inherit">
                  Roll
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box className="footer-connect-section">
                 <div className="appoutdoor-section">
                 <div className="app-outdoor-store">
                      <p>An app for the outdoors</p>
                      <div className="app-store-icons">
                      <div>
                      <img src={googleLogo} alt="img"/>
                      </div>
                      <div>
                      <img src={AppleLogo} alt="img"/>
                      </div>
                      </div>
                  </div>
                  <div className="app-outdoor-sec">
                      <p>Members for the planet</p>
                      <div className="app-outdoor-members">
                      <img src={recLogo} alt="img"/>
                      <img src={playLogo} alt="img"/>
                      <img src={bidirectLogo} alt="img"/>
                      </div>
                  </div>
                 </div>
                
                  <div className="app-outdoor">
                      <p>Connect with us</p>
                      <div className="app-outdoor-connect">
                      <img src={twitterLogo} alt="img"/>
                      <img src={youtubeLogo} alt="img"/>
                      <img src={instaLogo} alt="img"/>
                      <img src={fbLogo} alt="img"/>
                      </div>
                  </div>

          </Box>
          <Divider />
          <Box className="footer-signature" textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Pak Trails and Tracks &reg;
            {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}


