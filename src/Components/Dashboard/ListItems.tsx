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
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LoginIcon from "@mui/icons-material/Login";

interface MainListItemsProps {
  onItemSelected: (item: string) => void;
}

export const MainListItems = ({ onItemSelected }: MainListItemsProps) => {
  const [selectedItem, setSelectedItem] = React.useState<string | null>(null);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    onItemSelected(item);
  };

  return (
    <React.Fragment>
      <ListItemButton
        selected={selectedItem === "My Profile"}
        sx={{ my: 1 }}
        onClick={() => handleItemClick("My Profile")}
      >
        <ListItemIcon>
          <PersonOutlineOutlinedIcon sx={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText primary="My Profile" />
      </ListItemButton>

      <ListItemButton
        selected={selectedItem === "Notifications"}
        sx={{ my: 1 }}
        onClick={() => handleItemClick("Notifications")}
      >
        <ListItemIcon>
          <ChatBubbleOutlineOutlinedIcon sx={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText primary="Notifications" />
      </ListItemButton>

      <ListItemButton
        selected={selectedItem === "Calender"}
        sx={{ my: 1 }}
        onClick={() => handleItemClick("Calender")}
      >
        <ListItemIcon>
          <TodayOutlinedIcon sx={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText primary="Calender" />
      </ListItemButton>

      <ListItemButton
        selected={selectedItem === "Bookmark"}
        sx={{ my: 1 }}
        onClick={() => handleItemClick("Bookmark")}
      >
        <ListItemIcon>
          <TurnedInNotOutlinedIcon sx={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText primary="Bookmark" />
      </ListItemButton>

      <ListItemButton
        selected={selectedItem === "Contact US"}
        sx={{ my: 1 }}
        onClick={() => handleItemClick("Contact US")}
      >
        <ListItemIcon>
          <LocalPostOfficeOutlinedIcon sx={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText primary="Contact US" />
      </ListItemButton>

      <ListItemButton
        selected={selectedItem === "Setting"}
        sx={{ my: 1 }}
        onClick={() => handleItemClick("Setting")}
      >
        <ListItemIcon>
          <SettingsOutlinedIcon sx={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText primary="Setting" />
      </ListItemButton>

      <ListItemButton
        selected={selectedItem === "Help & FAQs"}
        sx={{ my: 1 }}
        onClick={() => handleItemClick("Help & FAQs")}
      >
        <ListItemIcon>
          <HelpOutlineOutlinedIcon sx={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText primary="Help & FAQs" />
      </ListItemButton>

      <ListItemButton
        selected={selectedItem === "Sign Out"}
        sx={{ my: 1 }}
        onClick={() => handleItemClick("Sign Out")}
      >
        <ListItemIcon>
          <LoginIcon sx={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText primary="Sign Out" />
      </ListItemButton>
    </React.Fragment>
  );
};

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
