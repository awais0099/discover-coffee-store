import GoogleMapReact from 'google-map-react';
import { Box } from "@mui/material";

function Map(props) {
  return(
    <Box sx={{height: "100vh", overflow: "hidden"}}>
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
      >
        {
            props.places?.map(place => (
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
  );
}

export default Map;
