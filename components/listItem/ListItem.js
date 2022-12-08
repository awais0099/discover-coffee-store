import Link from 'next/link';
import { useState } from "react";
import { Card, CardMedia, CardContent } from "@mui/material";
import {
    Typography,
    Rating,
    Box
} from "@mui/material";


function ListItem() {
  const [ratingValue, setRatingValue] = useState(2.5);

  return (
    <Card sx={{marginBottom: "1rem"}}>
        <CardMedia
            component="img"
            height="220"
            alt="place image"
            image={"https://images.unsplash.com/photo-1517713982677-4b66332f98de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}
        />
        <CardContent>
            <Typography variant="h5">This Restaurants Food</Typography>
            <Box sx={{display: "flex", justifyContent: "space-between"}}>
                <Rating
                    name=''
                    value={ratingValue}
                    precision={0.5}
                    readOnly
                />
                <Typography variant="body2">54 reviews</Typography>
            </Box>
            <Box sx={{display: "flex", justifyContent: "space-between"}}>
                <Typography variant="subtitle2">Price</Typography>
                <Typography variant="body2">$33</Typography>
            </Box>
            <Box sx={{display: "flex", justifyContent: "space-between"}}>
                <Typography variant="subtitle2">Ranking</Typography>
                <Typography variant="body2">! # 10 city, town country</Typography>
            </Box>
            <Typography variant="subtitle1" sx={{marginBottom: ".8rem"}} align="right">Open Now</Typography>
            <Typography variant="body2">5493 Hauck Lakes Apt. 737</Typography>
            <Typography variant="body2">33644626943</Typography>
            <Typography align="right">
                <Link href={"#"}>website</Link>
            </Typography>
        </CardContent>
    </Card>
  );
}

export default ListItem
