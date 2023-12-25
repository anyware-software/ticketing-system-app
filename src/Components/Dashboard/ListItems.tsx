import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LoginIcon from "@mui/icons-material/Login";

export const mainListItems = (
  <React.Fragment>

    <ListItemButton sx={{ my: 1 }}>
      <ListItemIcon>
        <PersonOutlineOutlinedIcon sx={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="My Profile" />
    </ListItemButton>

    <ListItemButton sx={{ my: 1 }}>
      <ListItemIcon>
        <ChatBubbleOutlineOutlinedIcon sx={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Notifications" />
    </ListItemButton>

    <ListItemButton sx={{ my: 1 }}>
      <ListItemIcon>
        <TodayOutlinedIcon sx={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Calender" />
    </ListItemButton>

    <ListItemButton sx={{ my: 1 }}>
      <ListItemIcon>
        <TurnedInNotOutlinedIcon sx={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Bookmark" />
    </ListItemButton>

    <ListItemButton sx={{ my: 1 }}>
      <ListItemIcon>
        <LocalPostOfficeOutlinedIcon sx={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Contact US" />
    </ListItemButton>

    <ListItemButton sx={{ my: 1 }}>
      <ListItemIcon>
        <SettingsOutlinedIcon sx={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Setting" />
    </ListItemButton>

    <ListItemButton sx={{ my: 1 }}>
      <ListItemIcon>
        <HelpOutlineOutlinedIcon sx={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Help & FAQs" />
    </ListItemButton>

    <ListItemButton sx={{ my: 1 }}>
      <ListItemIcon>
        <LoginIcon sx={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Sign Out" />
    </ListItemButton>

  </React.Fragment>
);

// export const secondaryListItems = (
//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       Saved reports
//     </ListSubheader>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItemButton>
//   </React.Fragment>
// );
