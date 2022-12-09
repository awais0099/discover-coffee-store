import { useState } from 'react';
import Image from 'next/image'

import GoogleMapReact from 'google-map-react';

import { Box, Typography } from "@mui/material";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import CloseIcon from '@mui/icons-material/Close';

function Map(props) {
  const { places } = props;
  const [isCard, setIsCard] = useState(false);
  const [cardData, setCardData] = useState(null);

  console.log(cardData);

  return(
      <GoogleMapReact
          bootstrapURLKeys={{key: "AIzaSyDy-WW7-mLEN7xlHLqd0yLy5SS37dkQT2Q"}}
          zoom={2}
          center={props.coordinates}
          defaultCenter={props.coordinates}
          onClick={() => {}}
          onChange={(e) => {
              props.setCoordinatesState(e);
              props.setBoundsState(e);
          }}
          onChildClick={(child) => {
            console.log({child});
            setCardData(places[child]);
            setIsCard(true);
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
                    <LocationOnIcon fontSize="large" />
                </Box>
            ))
        }

        { isCard && (
          <Box sx={{
            position: "absolute",
            top: "-8rem",
            left: "7rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: ".8rem",
            flexDirection: "column"
          }} backgroundColor="#fff">
            <Typography>{cardData.name}</Typography>
            <Image 
              src={
                "https://images.unsplash.com/photo-1517713982677-4b66332f98de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}
              alt="Picture of the author"
              width={'150'}
              height={'100'}
            />
            <CloseIcon sx={{position: "absolute", top: "0", right: ".1rem", cursor: "pointer"}} onClick={() => setIsCard(false)} />
          </Box>  
        )}
      </GoogleMapReact>
  );
}

export default Map;
