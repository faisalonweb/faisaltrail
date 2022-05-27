import React from "react";
import Typography from "@mui/material/Typography";
import one from "src/assets/images/one.jpg";
import two from "src/assets/images/two.jpg";
import three from "src/assets/images/three.jpg";
import four from "src/assets/images/four.jpg";
import { Box, Chip, Container, Rating, Stack } from "@mui/material";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { useNavigate } from 'react-router-dom'
import { TrailProps } from "src/utils/interfaces/trailsInterface";

const trails: TrailProps[] = [
  {
    id: 1,
    title: "Lake Agnes Trail",
    image: one,
    info: "Banff National Park",
    difficulty: "moderate",
    rating: 3,
    length: 7.4,
    reviews: 2424,
    time: "2h 49m",
    description: `The Lake Agnes Trail is an accessible and relatively short route
    up to the Lake Agnes Tea House which was built by the Canadian
    Pacific Railway in 1901 as a refuge for hikers travelling to
    higher locations. The trail has an elevation gain of 400 metres
    and offers fantastic views of the Nokhu Crags and Lake Louise.`,
  },
  {
    id: 2,
    title: "Tunnel Mountain",
    image: two,
    info: "Banff National Park",
    difficulty: "hard",
    rating: 2,
    length: 6.4,
    reviews: 2424,
    time: "2h 49m",
    description: `The Lake Agnes Trail is an accessible and relatively short route
    up to the Lake Agnes Tea House which was built by the Canadian
    Pacific Railway in 1901 as a refuge for hikers travelling to
    higher locations. The trail has an elevation gain of 400 metres
    and offers fantastic views of the Nokhu Crags and Lake Louise.`,
  },
  {
    id: 3,
    title: "Plain of Six Glaciers Trail",
    image: three,
    info: "Banff National Park",
    difficulty: "easy",
    rating: 1,
    length: 4.4,
    reviews: 2424,
    time: "2h 49m",
    description: `The Lake Agnes Trail is an accessible and relatively short route
    up to the Lake Agnes Tea House which was built by the Canadian
    Pacific Railway in 1901 as a refuge for hikers travelling to
    higher locations. The trail has an elevation gain of 400 metres
    and offers fantastic views of the Nokhu Crags and Lake Louise.`,
  },
  {
    id: 4,
    title: "Sulphur Mountain Trail",
    image: four,
    info: "Banff National Park",
    difficulty: "moderate",
    rating: 4,
    length: 3.4,
    reviews: 2424,
    time: "2h 49m",
    description: `The Lake Agnes Trail is an accessible and relatively short route
    up to the Lake Agnes Tea House which was built by the Canadian
    Pacific Railway in 1901 as a refuge for hikers travelling to
    higher locations. The trail has an elevation gain of 400 metres
    and offers fantastic views of the Nokhu Crags and Lake Louise.`,
  },
  {
    id: 5,
    title: "Grotto Canyon Trail",
    image: one,
    info: "Banff National Park",
    difficulty: "hard",
    rating: 5,
    length: 1.4,
    reviews: 2424,
    time: "2h 49m",
    description: `The Lake Agnes Trail is an accessible and relatively short route
    up to the Lake Agnes Tea House which was built by the Canadian
    Pacific Railway in 1901 as a refuge for hikers travelling to
    higher locations. The trail has an elevation gain of 400 metres
    and offers fantastic views of the Nokhu Crags and Lake Louise.`,
  },
];


const Trails = () => {
  const navigate = useNavigate()
  return (
    <>
      {trails.map((trail, index) => {
        return (
          <Container onClick={() => navigate(`/trails/trail-details/${trail.id}`, { state: trail })}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={5}
              my={5}
              p={2}
              sx={{
                alignItems: "center",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                borderRadius: 4,
              }}
            >
              <Box>
                <img
                  src={trail.image}
                  style={{ height: 240, borderRadius: 10, objectFit: "cover"}}
                >

                </img>
              </Box>
              <Box 
                sx={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  gap: 1 
              }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography fontSize={18}>#{trail.id} - {trail.title}</Typography>
                  <BookmarkBorderOutlinedIcon />
                </Box>

                <Typography sx={{ opacity: 0.5 }} fontSize={14}>
                  {trail.info}
                </Typography>

                <Box sx={{ display: "flex", gap: 2 }}>
                  <Chip label={trail.difficulty} color="primary" size="small" />
                  <Rating value={trail.rating} />
                  <Typography>({trail.reviews})</Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 5 }}>
                  <Typography>{trail.length} km</Typography>
                  <Typography>{trail.time}</Typography>
                </Box>

                <Box>
                  <Typography fontSize={15}>{trail.description}</Typography>
                </Box>

              </Box>
            </Stack>
          </Container>
        );
      })}
    </>
  );
};

export default Trails;
