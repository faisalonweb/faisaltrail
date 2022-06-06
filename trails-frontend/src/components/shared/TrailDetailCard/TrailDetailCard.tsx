import * as React from 'react';
import {  Box, Typography, Chip, Rating} from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

interface Props {
  title: string;
  time: string;
  rating: number | undefined;
  img: string;
  info: string;
  difficulty: string;
  reviews: number | undefined;
  length: number | undefined;
}
export default function TrailDetailCard({title, time, rating, img, info, reviews, difficulty, length}: Props) {
return (
  <Card sx={{ maxWidth: 345, mt:'10px' }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="body1" fontWeight='bold' component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {info}
        </Typography>
              <Box sx={{ display: "flex", gap: 2, mt:'5px' }}>
                <Chip label={difficulty} color="primary" size="small" />
                <Rating value={rating} />
                <Typography variant="body2"  color="text.secondary">{reviews}</Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 5, mt:'5px' }}>
                <Typography variant="body2" color="text.secondary">{length} km</Typography>
                <Typography variant="body2" color="text.secondary">{time}</Typography>
              </Box>
      </CardContent>
    </CardActionArea>
  </Card>
);
}
