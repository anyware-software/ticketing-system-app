import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import VerifiedIcon from "@mui/icons-material/Verified";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PlaceIcon from "@mui/icons-material/Place";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const options = ["Choice 1", "Choice 2", "Choice 3"];

const ITEM_HEIGHT = 48;

export default function GuestProfile() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        backgroundImage: {
          lg: 'url("../../Images/main-bg.png")',
          sm: 'url("../../Images/main-bg.png")',
          md: 'url("../../Images/main-bg.png")',
          xl: 'url("../../Images/main-bg.png")',
          xs: 'url("../../Images/mobile-main-bg.png")',
        },
        backgroundSize: "cover",
        backgroundPosition: "center",
        flexGrow: 1,
        height: "100vh",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1)), linear-gradient(to right, rgba(0, 0, 0, 0.4)100%, rgba(0, 0, 0, 0.1))", // Adjust opacity as needed
        },
        zIndex: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid container spacing={2} sx={{ overflow: "hidden", flexGrow: 1 , display:'flex', alignItems:'end' }}>
        <Grid
          item
          xs={12}
          sm={6}
          lg={4}
          sx={{
            zIndex: 1,
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
            }}
          >
            <img
              src="../../../Images/testPerson.png"
              style={{
                width: "12rem",
                height: "12rem",
                borderRadius: "50%",
                marginLeft: "1rem",
              }}
              alt="unknownUser"
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: "19px",
                  fontWeight: "600",
                  wordWrap: "break-word",
                  my: 1,
                }}
              >
                Ali Nader
              </Typography>
              <VerifiedIcon sx={{ color: "#49adf4" }} />
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <AvatarGroup
                  // max={4}
                  sx={{
                    "& .MuiAvatar-root": {
                      width: 35,
                      height: 35,
                      fontSize: 10,
                      color: "black",
                      border: "1px solid white",
                      backgroundColor: 'darkgrey" , borderColor',
                    },
                  }}
                >
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  <Avatar
                    alt="Agnes Walker"
                    src="/static/images/avatar/4.jpg"
                  />
                </AvatarGroup>
                <Typography
                  style={{
                    color: "white",
                    fontWeight: "600",
                    wordWrap: "break-word",
                    fontSize: "22px",
                  }}
                >
                  140
                </Typography>
              </Box>
              <Typography
                style={{
                  color: "#8684FF",
                  fontWeight: "400",
                  wordWrap: "break-word",
                  fontSize: "16px",
                }}
              >
                Connections
              </Typography>
            </Box>

            <Divider
              orientation="vertical"
              flexItem
              sx={{ backgroundColor: "white" }}
            />
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <AvatarGroup
                  // max={4}
                  sx={{
                    "& .MuiAvatar-root": {
                      width: 35,
                      height: 35,
                      fontSize: 10,
                      color: "black",
                      border: "1px solid white",
                      backgroundColor: 'darkgrey" , borderColor',
                    },
                  }}
                >
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                </AvatarGroup>
                <Typography
                  style={{
                    color: "white",
                    fontWeight: "600",
                    wordWrap: "break-word",
                    fontSize: "22px",
                  }}
                >
                  2
                </Typography>
              </Box>
              <Typography
                style={{
                  color: "#8684FF",
                  fontWeight: "400",
                  wordWrap: "break-word",
                  fontSize: "16px",
                }}
              >
                Events Attended
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: "70%",
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: 18,
                fontWeight: "600",
                wordWrap: "break-word",
              }}
            >
              About Info
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    color: "#848383",
                    fontSize: 18,
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Email
                </Typography>

                <Typography
                  sx={{
                    color: "white",
                    fontSize: 18,
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Alinader@gmail.com
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "#848383",
                    fontSize: 18,
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Birth Date
                </Typography>

                <Typography
                  sx={{
                    color: "white",
                    fontSize: 18,
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  12/2/1997
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    color: "#848383",
                    fontSize: 18,
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Gender
                </Typography>

                <Typography
                  sx={{
                    color: "white",
                    fontSize: 18,
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Male
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "#848383",
                    fontSize: 18,
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Mobile No.
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: 18,
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  +2010000000
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          lg={8}
          sx={{
            zIndex: 1,
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            // gap: 10,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "600",
                  wordWrap: "break-word",
                }}
              >
                My Bookings
              </Typography>
            </Box>

            <Box
              sx={{
                //   height: "10vh",
                background: "rgba(247.56, 247.56, 247.56, 0.21)",
                display: "flex",
                alignItems: "center",
                padding: "1rem",
                borderRadius: "10px",
                gap: 3,
              }}
            >
              <Box>
                <img src="../../../Images/eventAvatar.png" alt="" />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: 18,
                      fontWeight: "700",
                      wordWrap: "break-word",
                    }}
                  >
                    Electronic Steve-Music Festival
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: 3,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Box>
                      <CalendarTodayIcon
                        sx={{ color: "white", fontSize: "20px" }}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            color: "white",
                            fontSize: 12,
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          14 December, 2021
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            color: "white",
                            fontSize: 9,
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          Tuesday, 4:00PM - 9:00PM
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Box>
                      <PlaceIcon sx={{ color: "white", fontSize: "20px" }} />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            color: "white",
                            fontSize: 12,
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          Gala Convention Center
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            color: "white",
                            fontSize: 9,
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          36 Guild Street London, UK
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box>
                <Button
                  variant="contained"
                  sx={{
                    color: "white",
                    fontSize: 13,
                    fontWeight: "600",
                    wordWrap: "break-word",
                    backgroundColor: "#F0635A",
                  }}
                >
                  VIEW TICKET(S)
                </Button>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography
                sx={{
                  color: "#A19F9F",
                  fontSize: 14,
                  fontWeight: "600",
                  wordWrap: "break-word",
                }}
              >
                Accompanied Guests
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                }}
              >
                <AvatarGroup
                  total={44}
                  sx={{
                    "& .MuiAvatar-root": {
                      width: 35,
                      height: 35,
                      fontSize: 10,
                      color: "black",
                      border: "1px solid white",
                      backgroundColor: 'darkgrey" , borderColor',
                    },
                  }}
                >
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                  <Avatar
                    alt="Agnes Walker"
                    src="/static/images/avatar/4.jpg"
                  />
                  <Avatar
                    alt="Trevor Henderson"
                    src="/static/images/avatar/5.jpg"
                  />
                </AvatarGroup>

                <Box
                  sx={{
                    backgroundColor: "#EE726A",
                    display: "flex",
                    alignItems: "center",
                    px: "8px",
                    py: "5px",
                    borderRadius: "5px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 11,
                      fontWeight: "700",
                      wordWrap: "break-word",
                      color: "black",
                    }}
                  >
                    Total : 44
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 2,
              }}
            >
              {/* Friend Attends */}
              <Box
                sx={{
                  backgroundColor: "#333333",
                  display: "flex",
                  borderRadius: "5px",
                  p: 1.5,
                  paddingRight: 0,
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                  }}
                >
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

                  <Box>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: 14,
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}
                    >
                      Ahmed Selim
                    </Typography>
                    <Typography
                      sx={{
                        color: "#A4A4A4",
                        fontSize: 11,
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      6 Sep 2023, 9:00 pm
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVertIcon sx={{ color: "white" }} />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "20ch",
                      },
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem
                        key={option}
                        selected={option === "Pyxis"}
                        onClick={handleClose}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Box>
              {/* Friend Attends */}
              <Box
                sx={{
                  backgroundColor: "#333333",
                  display: "flex",
                  borderRadius: "5px",
                  p: 1.5,
                  paddingRight: 0,
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                  }}
                >
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

                  <Box>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: 14,
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}
                    >
                      Ahmed Selim
                    </Typography>
                    <Typography
                      sx={{
                        color: "#A4A4A4",
                        fontSize: 11,
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      6 Sep 2023, 9:00 pm
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVertIcon sx={{ color: "white" }} />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "20ch",
                      },
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem
                        key={option}
                        selected={option === "Pyxis"}
                        onClick={handleClose}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Box>
              {/* Friend Attends */}
              <Box
                sx={{
                  backgroundColor: "#333333",
                  display: "flex",
                  borderRadius: "5px",
                  p: 1.5,
                  paddingRight: 0,
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                  }}
                >
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

                  <Box>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: 14,
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}
                    >
                      Ahmed Selim
                    </Typography>
                    <Typography
                      sx={{
                        color: "#A4A4A4",
                        fontSize: 11,
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      6 Sep 2023, 9:00 pm
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVertIcon sx={{ color: "white" }} />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "20ch",
                      },
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem
                        key={option}
                        selected={option === "Pyxis"}
                        onClick={handleClose}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Box>
              {/* Friend Attends */}
              <Box
                sx={{
                  backgroundColor: "#333333",
                  display: "flex",
                  borderRadius: "5px",
                  p: 1.5,
                  paddingRight: 0,
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                  }}
                >
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

                  <Box>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: 14,
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}
                    >
                      Ahmed Selim
                    </Typography>
                    <Typography
                      sx={{
                        color: "#A4A4A4",
                        fontSize: 11,
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      6 Sep 2023, 9:00 pm
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVertIcon sx={{ color: "white" }} />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "20ch",
                      },
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem
                        key={option}
                        selected={option === "Pyxis"}
                        onClick={handleClose}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Box>
              {/* Friend Attends */}
              <Box
                sx={{
                  backgroundColor: "#333333",
                  display: "flex",
                  borderRadius: "5px",
                  p: 1.5,
                  paddingRight: 0,
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                  }}
                >
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

                  <Box>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: 14,
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}
                    >
                      Ahmed Selim
                    </Typography>
                    <Typography
                      sx={{
                        color: "#A4A4A4",
                        fontSize: 11,
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      6 Sep 2023, 9:00 pm
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVertIcon sx={{ color: "white" }} />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "20ch",
                      },
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem
                        key={option}
                        selected={option === "Pyxis"}
                        onClick={handleClose}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Box>
              {/* Friend Attends */}
              <Box
                sx={{
                  backgroundColor: "#333333",
                  display: "flex",
                  borderRadius: "5px",
                  p: 1.5,
                  paddingRight: 0,
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                  }}
                >
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

                  <Box>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: 14,
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}
                    >
                      Ahmed Selim
                    </Typography>
                    <Typography
                      sx={{
                        color: "#A4A4A4",
                        fontSize: 11,
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      6 Sep 2023, 9:00 pm
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVertIcon sx={{ color: "white" }} />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "20ch",
                      },
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem
                        key={option}
                        selected={option === "Pyxis"}
                        onClick={handleClose}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Box>
              {/* Friend Attends */}
              <Box
                sx={{
                  backgroundColor: "#333333",
                  display: "flex",
                  borderRadius: "5px",
                  p: 1.5,
                  paddingRight: 0,
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                  }}
                >
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

                  <Box>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: 14,
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}
                    >
                      Ahmed Selim
                    </Typography>
                    <Typography
                      sx={{
                        color: "#A4A4A4",
                        fontSize: 11,
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      6 Sep 2023, 9:00 pm
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVertIcon sx={{ color: "white" }} />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "20ch",
                      },
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem
                        key={option}
                        selected={option === "Pyxis"}
                        onClick={handleClose}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Box>
              {/* Friend Attends */}
              <Box
                sx={{
                  backgroundColor: "#333333",
                  display: "flex",
                  borderRadius: "5px",
                  p: 1.5,
                  paddingRight: 0,
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                  }}
                >
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

                  <Box>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: 14,
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}
                    >
                      Ahmed Selim
                    </Typography>
                    <Typography
                      sx={{
                        color: "#A4A4A4",
                        fontSize: 11,
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      6 Sep 2023, 9:00 pm
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVertIcon sx={{ color: "white" }} />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "20ch",
                      },
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem
                        key={option}
                        selected={option === "Pyxis"}
                        onClick={handleClose}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          lg={12}
          sx={{
            zIndex: 1,
            position: "relative",
            display: { xs: "none", sm: "flex" },
            // flexDirection: "column",
            alignItems: "end",
            justifyContent: "center",
          }}
        >
          <img src="../../../Images/anyware.png" alt="" />
        </Grid>

      </Grid>
    </Box>
  );
}
