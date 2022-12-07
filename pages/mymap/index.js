import Link from 'next/link';

import { useState } from "react";
import axios from "axios";
import GoogleMapReact from 'google-map-react';

import { Box } from "@mui/system";
import { useEffect } from "react";
import {
    Grid,
    Button,
    Typography,
    TextField,
    Stack,
    Rating
} from "@mui/material";
import { Menu, MenuItem } from '@mui/material';
import { Card, CardMedia, CardContent } from "@mui/material";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';


function MyMap() {
    const [coordinates, setCoordinates] = useState({});
    const [isFindingLocation, setIsFindingLocation] = useState(false);
    const [bounds, setBounds] = useState(null);
    const [places, setPlaces] = useState([]);
    const [types, setTypes] = useState("restaurants");
    const [ratingValue, setRatingValue] = useState(2.5);
    const [ratingFilter, setRatingFilter] = useState([]);

    const [isLoadingPlaces, setIsLoadingPlaces] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const success = (position) => {
        setCoordinates({lat: position.coords.latitude, lng: position.coords.longitude});
        setIsFindingLocation(false);
    };

    const error = () => {
        console.log("geolocation error");
    };

    useEffect(() => {
        const filteredData = places.filter(place => {
            if(place.rating) {
                if(place.rating == ratingValue) {
                    return place;
                }
            }
        });
        setPlaces(filteredData);
        console.log(filteredData);
    }, [ratingValue]);

    useEffect(() => {
        setIsFindingLocation(true);
        if (!navigator.geolocation) {
            console.log("Geolocation is not supported by your browser");
        } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }, []);


    useEffect(() => {
        // setIsLoadingPlaces(true);
        // const options = {
        //     method: 'GET',
        //     url: `https://travel-advisor.p.rapidapi.com/${types}/list-in-boundary`,
        //     params: {
        //       bl_latitude: bounds?.sw.lat,
        //       tr_latitude: bounds?.ne.lat,
        //       bl_longitude: bounds?.sw.lng,
        //       tr_longitude: bounds?.ne.lng,
        //       limit: '8',
        //     },
        //     headers: {
        //       'X-RapidAPI-Key': '4d72f977a4msh84e019d97fe9773p1a1817jsn9aae2affa6ee',
        //       'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        //     }
        //   };
          
        //   axios.request(options).then(function (response) {
        //     const { data } = response.data;
        //     setPlaces(data);
        //     setIsLoadingPlaces(false);
        //     console.log("** Places **", places);
        //   }).catch(function (error) {
        //       console.error(error);
        //   });
    }, [types, coordinates, bounds]);

    const handleChooseRatingClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleRestaurantsBtnClick = () => {
        console.log("restaurent button click");
        setTypes("restaurants");
        // const getAllRestaurant = places.filter((place) => {
        //     if (place.category) {
        //         return place.category.name === "Restaurant" && place;
        //     }
        // });
        // setPlaces(getAllRestaurant);
        // console.log("restaurants", getAllRestaurant);
    }

    const handleAttractionsBtnClick = () => {
        setTypes("attractions");
        console.log("attraction button click");
    }

    const handleHotelsBtnClick = () => {
        setTypes("hotels");
        console.log("hotels button click");
    }

    return (
        <>
        <Grid container>
            <Grid item xs={12} md={4} sx={{height: "100vh", overflowY: "scroll"}}>
                <Grid container direction="column" justifyContent="center" sx={{ paddingInline: "1rem"}}>
                    <Grid item xs md>
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item>
                            {/* {isLoadingPlaces && <Box>loading...</Box>} */}

                            {/* temp card */}
                            <Card sx={{marginBottom: "1rem"}}>
                                <CardMedia
                                    component="img"
                                    height="220"
                                    alt="place image"
                                    image={"https://images.unsplash.com/photo-1517713982677-4b66332f98de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}
                                />
                                <CardContent>
                                    <Typography variant="h5">This Restaurant's Food</Typography>
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
                            </Card><Card sx={{marginBottom: "1rem"}}>
                                <CardMedia
                                    component="img"
                                    height="220"
                                    alt="place image"
                                    image={"https://images.unsplash.com/photo-1517713982677-4b66332f98de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}
                                />
                                <CardContent>
                                    <Typography variant="h5">This Restaurant's Food</Typography>
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
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={8} sx={{position: "relative"}}>
                <Box sx={{height: "100vh", overflow: "hidden"}}>
                    <GoogleMapReact
                        bootstrapURLKeys={{key: "AIzaSyDy-WW7-mLEN7xlHLqd0yLy5SS37dkQT2Q"}}
                        zoom={2}
                        center={coordinates}
                        defaultCenter={coordinates}
                        onClick={() => {}}
                        onChange={(e) => {
                            setCoordinates({lat: e.center.lat, lng: e.center.lng});
                            setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
                        }}
                    >
                            {
                                places?.map(place => (
                                    <Box
                                        lat={Number(place.latitude)}
                                        lng={Number(place.longitude)}
                                        position='relative'
                                        cursor='pointer'
                                    >
                                        <LocationOnIcon />
                                    </Box>
                                ))
                            }
                    </GoogleMapReact>
                </Box>
            
                <Box sx={{position: "absolute", top: "0", left: "5rem", display: "flex", height: "4rem", width: "80%", alignItems: "center"}}>
                    <Box>
                        <Button
                            id="choose-rating"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleChooseRatingClick}
                            variant="contained"
                            endIcon={<KeyboardArrowDownIcon />}
                            sx={[
                                {width: "11rem", backgroundColor: "#fff", color: '#111211'},
                                {
                                    '&:hover': {
                                        backgroundColor: 'grey',
                                        color: 'white'
                                    }
                                }
                            ]}
                        >Choose Rating</Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'choose-rating',
                            }}
                        >
                            <MenuItem>All Ratings</MenuItem>
                            <MenuItem onClick={() => {handleClose(); setRatingValue(2.0)}}>2.0 **</MenuItem>
                            <MenuItem onClick={() => {handleClose(); setRatingValue(3.0)}}>3.0 ***</MenuItem>
                            <MenuItem onClick={() => {handleClose(); setRatingValue(4.0)}}>4.0 ****</MenuItem>
                            <MenuItem onClick={() => {handleClose(); setRatingValue(5.0)}}>5.0 *****</MenuItem>
                        </Menu>
                    </Box>
                    <Button variant="contained" sx={[
                        {margin: "0rem 1rem", backgroundColor: "#fff", color: '#111211'},
                        {
                            '&:hover': {
                                backgroundColor: 'grey',
                                color: 'white'
                            }
                        }
                    ]} onClick={handleRestaurantsBtnClick}>Restaurants</Button>
                    <Button variant="contained" sx={[
                        {margin: "0rem 1rem", backgroundColor: "#fff", color: '#111211'},
                        {
                            '&:hover': {
                                backgroundColor: 'grey',
                                color: 'white'
                            }
                        }
                    ]} onClick={handleAttractionsBtnClick}>Attractions</Button>
                    <Button variant="contained" sx={[
                        {margin: "0rem 1rem", backgroundColor: "#fff", color: '#111211'},
                        {
                            '&:hover': {
                                backgroundColor: 'grey',
                                color: 'white'
                            }
                        }
                    ]} onClick={handleHotelsBtnClick}>Hotels</Button>
                </Box>
            </Grid>
        </Grid>
        </>
    );
}

export default MyMap;