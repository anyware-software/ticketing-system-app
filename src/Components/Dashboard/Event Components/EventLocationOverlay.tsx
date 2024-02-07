import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { GOOGLE_MAPS_LIBRARIES } from "../Library";
import axios from "axios";
import { Event } from "../../../API";


const EventLocationOverlay = ({ currentEvent }: { currentEvent: Event }) => {
  const [isGoogleMapOverlayOpen, setIsGoogleMapOverlayOpen] = useState(false);
  const [zoom, setZoom] = useState(15);
  const containerStyle = {
    width: "80rem",
    height: "75vh",
  };

  const toggleGoogleMapOverlay = () => {
    setIsGoogleMapOverlayOpen(!isGoogleMapOverlayOpen);
  };
  const handleOverlayClick = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    // Check if the click occurred outside the map overlay
    if (e.target === e.currentTarget) {
      toggleGoogleMapOverlay();
    }
  };
  const [mapCenter, setMapCenter] = useState<any>({
    lat: currentEvent?.location?.coordinates?.lat,
    lng: currentEvent?.location?.coordinates?.lng,
  });

  const handleOnClick = async (e: any) => {
    setMarker({ lat: e.latLng.lat(), lng: e.latLng.lng() });
    const latitude = e.latLng.lat();
    const longitude = e.latLng.lng();

    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAf2_iJNX-BrrTVjg288Vhr7miH_aotx8E`
      );
    } catch (error) {
      console.error("Error during reverse geocoding request:", error);
    }
  };
  const onLoad = React.useCallback(
    function callback(map: any) {
      // if (mapCenter.lat !== 0 && mapCenter.lng !== 0) {
      //   map.panTo(mapCenter);
      // }
      map.panTo(mapCenter);
    },
    [mapCenter]
  );
  const [marker, setMarker] = useState<any>(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAf2_iJNX-BrrTVjg288Vhr7miH_aotx8E",
    libraries: GOOGLE_MAPS_LIBRARIES,
  });
  useEffect(() => {
    if (currentEvent) {
      setMapCenter({
        lat: currentEvent?.location?.coordinates?.lat || 0,
        lng: currentEvent?.location?.coordinates?.lng || 0,
      });
    }
    if (mapCenter.lat > 0) {
      setZoom(18);
    }
  }, [currentEvent]);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <LocationOnIcon sx={{ color: "white" }} />
      {isGoogleMapOverlayOpen && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={handleOverlayClick}
        >
          <Box>
            {isLoaded && (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={mapCenter}
                zoom={zoom}
                onLoad={onLoad}
                onClick={(e) => {
                  handleOnClick(e);
                }}
              >
                {marker && (
                  <Marker
                    position={{
                      lat: mapCenter?.lat,
                      lng: mapCenter?.lng,
                    }}
                  />
                )}
                {/* <Marker position={{ lat: mapCenter.lat, lng: mapCenter.lng }} /> */}
              </GoogleMap>
            )}
          </Box>
        </Box>
      )}
      <Box onClick={toggleGoogleMapOverlay} sx={{ cursor: "pointer" }}>
        {currentEvent?.location?.address && (
          <Typography
            sx={{
              color: "rgba(255, 255, 255, 0.67)",
              fontSize: "15px",
              display: { xs: "none", sm: "block" },
            }}
          >
            {currentEvent?.location?.address.split(",")[1]}
          </Typography>
        )}

        <Typography
          sx={{
            color: "rgba(255, 255, 255, 0.67)",
            fontSize: "15px",
            display: { xs: "none", sm: "block" },
          }}
        >
          {currentEvent?.location?.address}
        </Typography>
        <Typography
          sx={{
            color: "rgba(255, 255, 255, 0.67)",
            fontSize: "15px",
            display: { xs: "block", sm: "none" },
            textDecoration: { xs: "underline", sm: "normal" },
          }}
        >
          Directions
        </Typography>
      </Box>
    </Box>
  );
};
export default EventLocationOverlay;
