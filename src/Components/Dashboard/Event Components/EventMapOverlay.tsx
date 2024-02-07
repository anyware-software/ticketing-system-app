import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { dbStorage } from "../../../constants/Enums";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Event } from "../../../API";

const EventMapOverlay = ({ currentEvent }: { currentEvent: Event }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };
  const handleImageClick = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    e.stopPropagation();
  };
  return (
    <Box>
      {isOverlayOpen && (
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
          onClick={toggleOverlay}
        >
          <Box
            component="img"
            src={`${dbStorage}${currentEvent.map}`}
            alt="Event Map"
            sx={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "10px",
            }}
            onClick={handleImageClick}
          />
        </Box>
      )}
      <Button
        variant="text"
        startIcon={<LocationOnIcon />}
        onClick={toggleOverlay}
        sx={{
          color: "rgba(173, 173, 173, 1)",
        }}
      >
        View Event Map
      </Button>
    </Box>
  );
}
export default EventMapOverlay;