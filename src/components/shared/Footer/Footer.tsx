import React from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { footerdata } from 'src/data/data';
import { useTheme } from '@mui/material/styles';
import googleLogo from 'src/assets/images/store.png';
import AppleLogo from 'src/assets/images/appstore.png';
import fbLogo from 'src/assets/images/fb.png';
import youtubeLogo from 'src/assets/images/youtube.png';
import googleLogo1 from 'src/assets/images/store1.png';
import AppleLogo1 from 'src/assets/images/appstore1.png';
import fbLogo1 from 'src/assets/images/fb1.png';
import youtubeLogo1 from 'src/assets/images/youtube1.png';
import recLogo from 'src/assets/images/plant.png';
import bidirectLogo from 'src/assets/images/people.png';
import twitterLogo from 'src/assets/images/twitter.png';
import instaLogo from 'src/assets/images/insta.png';
import playLogo from 'src/assets/images/round.png';
import recLogo1 from 'src/assets/images/plant1.png';
import bidirectLogo1 from 'src/assets/images/people1.png';
import twitterLogo1 from 'src/assets/images/twitter1.png';
import instaLogo1 from 'src/assets/images/insta1.png';
import playLogo1 from 'src/assets/images/round1.png';
import 'src/components/shared/Footer/Footer.scss';
import Divider from '@mui/material/Divider';

export default function Footer() {
  const theme = useTheme();
  return (
    <Box sx={{ bgcolor: 'background.default' }} className='footer-cls'>
      <Container className='container-cls' maxWidth='lg'>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={3}>
            <Box className='list-head' borderBottom={1}>
              {footerdata.exploredata.heading}
            </Box>
            {footerdata.exploredata.links.map((links) => (
              <Box key={links.name} className='list-items'>
                <Link className='link-cls' href={links.to} color='inherit'>
                  {links.name}
                </Link>
              </Box>
            ))}
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box className='list-head' borderBottom={1}>
              {footerdata.mapsdata.heading}
            </Box>
            {footerdata.mapsdata.links.map((links) => (
              <Box key={links.name} className='list-items'>
                <Link className='link-cls' href={links.to} color='inherit'>
                  {links.name}
                </Link>
              </Box>
            ))}
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box className='list-head' borderBottom={1}>
              {footerdata.companydata.heading}
            </Box>
            {footerdata.companydata.links.map((links) => (
              <Box key={links.name} className='list-items'>
                <Link className='link-cls' href={links.to} color='inherit'>
                  {links.name}
                </Link>
              </Box>
            ))}
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box className='list-head' borderBottom={1}>
              {footerdata.communitydata.heading}
            </Box>
            {footerdata.communitydata.links.map((links) => (
              <Box key={links.name} className='list-items'>
                <Link className='link-cls' href={links.to} color='inherit'>
                  {links.name}
                </Link>
              </Box>
            ))}
          </Grid>
        </Grid>
        {theme.palette.mode === 'dark' ? (
          <Box className='footer-connect-section'>
            <Grid className='appoutdoor-section' container>
              <Grid item xs={6} md={3}>
                <div className='app-outdoor-store'>
                  <p>An app for the outdoors</p>
                  <div className='app-store-icons'>
                    <img src={googleLogo1} alt='img' />
                    <img src={AppleLogo1} alt='img' />
                  </div>
                </div>
              </Grid>
              <Grid item xs={6} md={3}>
                <div className='app-outdoor-sec'>
                  <p>Members for the planet</p>
                  <div className='app-outdoor-members'>
                    <img src={recLogo1} alt='img' style={{ color: 'white' }} />
                    <img src={playLogo1} alt='img' />
                    <img src={bidirectLogo1} alt='img' />
                  </div>
                </div>
              </Grid>
              <Grid item xs={6} md={6} className='connect-grid'>
                <div className='app-outdoor'>
                  <p>Connect with us</p>
                  <div className='app-outdoor-connect'>
                    <img src={twitterLogo1} alt='img' />
                    <img src={youtubeLogo1} alt='img' />
                    <img src={instaLogo1} alt='img' />
                    <img src={fbLogo1} alt='img' />
                  </div>
                </div>
              </Grid>
            </Grid>
          </Box>
        ) : (
          <Box className='footer-connect-section'>
            <Grid className='appoutdoor-section' container>
              <Grid item xs={6} md={3}>
                <div className='app-outdoor-store'>
                  <p>An app for the outdoors</p>
                  <div className='app-store-icons'>
                    <img src={googleLogo} alt='img' />
                    <img src={AppleLogo} alt='img' />
                  </div>
                </div>
              </Grid>
              <Grid item xs={6} md={3}>
                <div className='app-outdoor-sec'>
                  <p>Members for the planet</p>
                  <div className='app-outdoor-members'>
                    <img src={recLogo} alt='img' style={{ color: 'white' }} />
                    <img src={playLogo} alt='img' />
                    <img src={bidirectLogo} alt='img' />
                  </div>
                </div>
              </Grid>
              <Grid item xs={6} md={6} className='connect-grid'>
                <div className='app-outdoor'>
                  <p>Connect with us</p>
                  <div className='app-outdoor-connect'>
                    <img src={twitterLogo} alt='img' />
                    <img src={youtubeLogo} alt='img' />
                    <img src={instaLogo} alt='img' />
                    <img src={fbLogo} alt='img' />
                  </div>
                </div>
              </Grid>
            </Grid>
          </Box>
        )}
        <Divider />
        <Box className='footer-signature' textAlign='center' pb={{ xs: 5, sm: 0 }}>
          Pak Trails and Tracks &reg;
          {new Date().getFullYear()}
        </Box>
      </Container>
    </Box>
  );
}
