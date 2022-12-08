import { useState } from "react";
import { Button, Box} from "@mui/material";
import { Menu, MenuItem } from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function TopButtons() {
  const [isLoadingPlaces, setIsLoadingPlaces] = useState(false);
  const [ratingValue, setRatingValue] = useState(2.5);

  // for menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleChooseRatingClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // for menu end

  return (
    <Box  sx={{position: "absolute", top: "0", left: "5rem", display: "flex", height: "4rem", width: "80%", alignItems: "center"}}>
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
      ]}
      // onClick={handleRestaurantsBtnClick}
      >Restaurants</Button>
      <Button variant="contained" sx={[
          {margin: "0rem 1rem", backgroundColor: "#fff", color: '#111211'},
          {
              '&:hover': {
                  backgroundColor: 'grey',
                  color: 'white'
              }
          }
      ]}
        // onClick={handleAttractionsBtnClick}
      >Attractions</Button>
      <Button variant="contained" sx={[
          {margin: "0rem 1rem", backgroundColor: "#fff", color: '#111211'},
          {
              '&:hover': {
                  backgroundColor: 'grey',
                  color: 'white'
              }
          }
      ]}
        // onClick={handleHotelsBtnClick}
      >Hotels</Button>
    </Box>
  );
}

export default TopButtons;
