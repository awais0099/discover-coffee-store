import { useState } from "react";

function useTrackLocation() {
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [locationErrorMessage, setLocationErrorMessage] = useState("");
    const [isFindingLocation, setIsFindingLocation] = useState(false);

    const success = (position) => {
        setIsFindingLocation(false);
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
    };

    const error = () => {
        setIsFindingLocation(false);
        setLocationErrorMessage("Unable to retrieve your location");
    };

    const handleTrackLocation = () => {
        setIsFindingLocation(true);
        if (!navigator.geolocation) {
            setLocationErrorMessage("Geolocation is not supported by your browser");
            setLocationErrorMessage("");
        } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }


    return {
        latitude,
        longitude,
        locationErrorMessage,
        isFindingLocation,
        handleTrackLocation,
    };
}

export default useTrackLocation;