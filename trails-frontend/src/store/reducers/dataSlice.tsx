import { createSlice } from "@reduxjs/toolkit";
import one from "src/assets/images/one.jpg";
import two from "src/assets/images/two.jpg";
import three from "src/assets/images/three.jpg";
import four from "src/assets/images/four.jpg";

const initialState = {
trails : [
  {
  id: "1",
  trail_image:one,
  title: "Huaqiggng Pool",
  distance: '1.4km',
  time: '22m'
  },
  {
    id: "2",
    trail_image:two,
    title: "Huaqing Pool",
    distance: '1.4km',
    time: '22m'
  },
  {
    id: "3",
    trail_image:three,
    title: "Huaqing Pool",
    distance: '1.4km',
    time: '22m'
  },
  {
    id: "4",
    trail_image:four,
    title: "Huaqing Pool",
    distance: '1.4km',
    time: '22m'
  },
  {
    id: "5",
    trail_image:one,
    title: "Huaqing Pool",
    distance: '1.4km',
    time: '22m'
    },
    {
      id: "6",
      trail_image:two,
      title: "Huaqing Pool",
      distance: '1.4km',
      time: '22m'
    },
    {
      id: "7",
      trail_image:four,
      title: "Huaqing Pool",
      distance: '1.4km',
      time: '22m'
    },
    {
      id: "8",
      trail_image:three,
      title: "Huaqing Pool",
      distance: '1.4km',
      time: '22m'
    },
    {
      id: "9",
      trail_image:one,
      title: "Huaqing Pool",
      distance: '1.4km',
      time: '22m'
      },
      {
        id: "10",
        trail_image:three,
        title: "Huaqing Pool",
        distance: '1.4km',
        time: '22m'
      },
      {
        id: "11",
        trail_image:two,
        title: "Huaqing Pool",
        distance: '1.4km',
        time: '22m'
      },
      {
        id: "12",
        trail_image:four,
        title: "Huaqing Pool",
        distance: '1.4km',
        time: '22m'
      },
      {
        id: "13",
        trail_image:three,
        title: "Huaqing Pool",
        distance: '1.4km',
        time: '22m'
        },
        {
          id: "14",
          trail_image:four,
          title: "Huaqing Pool",
          distance: '1.4km',
          time: '22m'
        },
        {
          id: "15",
          trail_image:two,
          title: "Huaqing Pool",
          distance: '1.4km',
          time: '22m'
        },
        {
          id: "16",
          trail_image:one,
          title: "Huaqing Pool",
          distance: '1.4km',
          time: '22m'
        }
  ],
  trailCards : [
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
    },
    ],
    trailList:  [
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
        and offers fantastic views of the Nokhu Crags and Lake Louise.
        up to the Lake Agnes Tea House which was built by the Canadian
        Pacific Railway in 1901 as a refuge for hikers travelling to
        higher locations. The trail has an elevation gain of 400 metres
        and offers fantastic views of the Nokhu Crags and Lake Louise.
        `,
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
        and offers fantastic views of the Nokhu Crags and Lake Louise.
        up to the Lake Agnes Tea House which was built by the Canadian
        Pacific Railway in 1901 as a refuge for hikers travelling to
        higher locations. The trail has an elevation gain of 400 metres
        and offers fantastic views of the Nokhu Crags and Lake Louise.
        `,
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
        and offers fantastic views of the Nokhu Crags and Lake Louise.
        up to the Lake Agnes Tea House which was built by the Canadian
        Pacific Railway in 1901 as a refuge for hikers travelling to
        higher locations. The trail has an elevation gain of 400 metres
        and offers fantastic views of the Nokhu Crags and Lake Louise.
        `,
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
        and offers fantastic views of the Nokhu Crags and Lake Louise.
        up to the Lake Agnes Tea House which was built by the Canadian
        Pacific Railway in 1901 as a refuge for hikers travelling to
        higher locations. The trail has an elevation gain of 400 metres
        and offers fantastic views of the Nokhu Crags and Lake Louise.
        `,
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
        and offers fantastic views of the Nokhu Crags and Lake Louise.
        up to the Lake Agnes Tea House which was built by the Canadian
        Pacific Railway in 1901 as a refuge for hikers travelling to
        higher locations. The trail has an elevation gain of 400 metres
        and offers fantastic views of the Nokhu Crags and Lake Louise.
        `,
      },
      ]
      
  
};

export const dataSlice = createSlice({
name: "data",
initialState,
reducers: {
  appData: (state, action) => {
      state.trails = action.payload;
    },
},
});

export const {
appData
} = dataSlice.actions;
export default dataSlice.reducer;
