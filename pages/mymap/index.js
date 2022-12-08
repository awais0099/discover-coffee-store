import Link from 'next/link';

import { useState } from "react";
import axios from "axios";
// import GoogleMapReact from 'google-map-react';

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

import LocationOnIcon from '@mui/icons-material/LocationOn';

import List from "../../components/List/List.js";
import TopButtons from "../../components/TopButtons/TopButtons.js";
import Map from "../../components/Map/Map.js";




function MyMap() {
    const [coordinates, setCoordinates] = useState({});
    const [isFindingLocation, setIsFindingLocation] = useState(false);
    const [bounds, setBounds] = useState(null);
    const [places, setPlaces] = useState([]);
    const [types, setTypes] = useState("restaurants");
    const [ratingValue, setRatingValue] = useState(2.5);
    const [ratingFilter, setRatingFilter] = useState([]);

    const [isLoadingPlaces, setIsLoadingPlaces] = useState(false);

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

    // when the page load, get current user location
    const success = (position) => {
        setCoordinates({lat: position.coords.latitude, lng: position.coords.longitude});
        setIsFindingLocation(false);
    };

    const error = () => {
        console.log("geolocation error");
    };

    useEffect(() => {
        setIsFindingLocation(true);
        if (!navigator.geolocation) {
            console.log("Geolocation is not supported by your browser");
        } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }, []);
    // get current user location end

    useEffect(() => {
      axios.request({
        method: 'GET',
        url: '/api/places',
        params: {
          message: "working ?"
        }
      }).then((response) => {
        console.log("response", response);
      }).catch((error) => {
        console("error", error);
      })
    });


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

    const setCoordinatesState = (e) => {
        setCoordinates({lat: e.center.lat, lng: e.center.lng});
    }

    const setBoundsState = (e) => {
      setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
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
                      <List />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={8} sx={{position: "relative"}}>
              <Map
                coordinates={coordinates}
                places={places}
                setCoordinatesState={setCoordinatesState}
                setBoundsState={setBoundsState}
              />
              <TopButtons />
            </Grid>
        </Grid>
        </>
    );
}

export default MyMap;
