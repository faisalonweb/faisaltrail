import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import trailImage from "src/assets/images/one.jpg";
import { Box, Chip, Container, Rating, Stack } from "@mui/material";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

const Trails = () => {
  return (
    <Container sx={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
      <Stack direction={{ xs: "column", md: "row" }} spacing={5} mt={10} sx={{ alignItems: 'center'}}>
        <Box>
          <img src={trailImage} style={{ height: 250, borderRadius: 10, objectFit: 'cover'}}></img>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography>Lake Agnes Trail</Typography>
            <BookmarkBorderOutlinedIcon />
          </Box>
          <Typography>Banff National Park</Typography>
          <Box sx={{ display: "flex" }}>
            <Chip label="moderate" color="primary" />
            <Rating value={3} />
            <Typography> (4242)</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 5 }}>
            <Typography>Length: 7.4 km</Typography>
            <Typography>Est. 2h 49m</Typography>
          </Box>

          <Box>
            <Typography>
              The Lake Agnes Trail is an accessible and relatively short route
              up to the Lake Agnes Tea House which was built by the Canadian
              Pacific Railway in 1901 as a refuge for hikers travelling to
              higher locations. The trail has an elevation gain of 400 metres
              and offers fantastic views of the Nokhu Crags and Lake Louise
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default Trails;
