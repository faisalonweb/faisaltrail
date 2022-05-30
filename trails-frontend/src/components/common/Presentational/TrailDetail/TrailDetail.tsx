import { Container, Box, Stack, Typography, Chip, Rating, Divider } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { TrailProps } from "src/utils/interfaces/trailsInterface";

const TrailDetail = () => {
  const location = useLocation();
  const trail = location.state as TrailProps;

  return (
    <Container>
      <Box>
        <img
          src={trail.image}
          style={{ height: 350, width: "100%", objectFit: "cover" }}
          alt="img"
        >
        </img>
      </Box>

      <Box 
        sx={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: 1 
        }} 
        mt={2}>
        <Typography variant="h5">{trail.title}</Typography>
        
        <Box 
            sx={{ 
                display: "flex", 
                gap: 1 
            }}>
            <Chip label={trail.difficulty} color="primary" size="small" />
            <Rating value={trail.rating} />
            <Typography>({trail.reviews})</Typography>
        </Box>

        <Typography fontSize={14}>{trail.info}</Typography>
      </Box>

      <Divider sx={{ marginY: 3 }} />

      <Stack direction="row" spacing={{ xs: 10, md: "auto", lg: "auto" }}>
        <Box>
          <Typography>Length</Typography>
          <Typography>{trail.length}</Typography>
        </Box>

        <Box>
          <Typography>Elevation gain</Typography>
          <Typography>{trail.time}</Typography>
        </Box>

        <Box>
          <Typography>Route type</Typography>
          <Typography>Out & back</Typography>
        </Box>
      </Stack>

      <Box mt={3}>
        <Chip label="Kid Friendly" color="success" size="medium" variant="outlined" sx={{ mr: 1, mt: 1 }} />
        <Chip label="Kid Friendly" color="success" size="medium" variant="outlined" sx={{ mr: 1, mt: 1 }} />
        <Chip label="Kid Friendly" color="success" size="medium" variant="outlined" sx={{ mr: 1, mt: 1 }} />
        <Chip label="Kid Friendly" color="success" size="medium" variant="outlined" sx={{ mr: 1, mt: 1 }} />
        <Chip label="Kid Friendly" color="success" size="medium" variant="outlined" sx={{ mr: 1, mt: 1 }} />
        <Chip label="Kid Friendly" color="success" size="medium" variant="outlined" sx={{ mr: 1, mt: 1 }} />
        <Chip label="Kid Friendly" color="success" size="medium" variant="outlined" sx={{ mr: 1, mt: 1 }} />
        <Chip label="Kid Friendly" color="success" size="medium" variant="outlined" sx={{ mr: 1, mt: 1 }} />
      </Box>

      <Box mt={5}>
        <Typography variant="h6">Description</Typography>
        <Divider sx={{ marginY: 2 }} />
        <Typography>{trail.description}</Typography>
      </Box>

    </Container>
  );
};

export default TrailDetail;
