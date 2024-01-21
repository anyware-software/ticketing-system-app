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
import { setLogin } from "../../state";
import { signOut } from "aws-amplify/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FestivalIcon from '@mui/icons-material/Festival';

interface MainListItemsProps {
  onItemSelected: (item: string) => void;
}

export const MainListItems = ({ onItemSelected }: MainListItemsProps) => {
  const [selectedItem, setSelectedItem] = React.useState<string | null>(null);
  const user = useSelector((state: any) => state.app.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    onItemSelected(item);
  };

  const handleLogOut = async () => {
    if (!user) {
      console.log("There is no User");

      return;
    }
    dispatch(setLogin({ user: null }));
    if (user.group === "Cognito") {
      navigate("/login");
    }
    localStorage.removeItem("user");
    await signOut();
  };

  return (
    <React.Fragment>
      <ListItemButton
        selected={selectedItem === "My Profile"}
     
        onClick={() => handleItemClick("My Profile")}
      >
        <ListItemIcon>
          <PersonOutlineOutlinedIcon sx={{ color: selectedItem === "My Profile" ? "rgba(240, 99, 90, 1)" : "white" }}/>
        </ListItemIcon>
        <ListItemText primary="My Profile" />
      </ListItemButton>

      <ListItemButton
        selected={selectedItem === "events"}
       
        onClick={() => handleItemClick("events")}
      >
        <ListItemIcon>
          <FestivalIcon sx={{ color: selectedItem === "events" ? "rgba(240, 99, 90, 1)" : "white" }} />
        </ListItemIcon>
        <ListItemText primary="events" />
      </ListItemButton>

      <ListItemButton
        selected={selectedItem === "Notifications"}
       
        onClick={() => handleItemClick("Notifications")}
      >
        <ListItemIcon>
          <ChatBubbleOutlineOutlinedIcon sx={{ color: selectedItem === "Notifications" ? "rgba(240, 99, 90, 1)" : "white" }} />
        </ListItemIcon>
        <ListItemText primary="Notifications" />
      </ListItemButton>

      <ListItemButton
        selected={selectedItem === "Calender"}
        
        onClick={() => handleItemClick("Calender")}
      >
        <ListItemIcon>
          <TodayOutlinedIcon sx={{ color: selectedItem === "Calender" ? "rgba(240, 99, 90, 1)" : "white" }} />
        </ListItemIcon>
        <ListItemText primary="Calender" />
      </ListItemButton>

      <ListItemButton
        selected={selectedItem === "Bookmark"}
       
        onClick={() => handleItemClick("Bookmark")}
      >
        <ListItemIcon>
          <TurnedInNotOutlinedIcon sx={{ color: selectedItem === "Bookmark" ? "rgba(240, 99, 90, 1)" : "white" }} />
        </ListItemIcon>
        <ListItemText primary="Bookmark" />
      </ListItemButton>

      <ListItemButton
        selected={selectedItem === "Contact US"}
       
        onClick={() => handleItemClick("Contact US")}
      >
        <ListItemIcon>
          <LocalPostOfficeOutlinedIcon sx={{ color: selectedItem === "Contact US" ? "rgba(240, 99, 90, 1)" : "white" }} />
        </ListItemIcon>
        <ListItemText primary="Contact US" />
      </ListItemButton>

      <ListItemButton
        selected={selectedItem === "Setting"}
       
        onClick={() => handleItemClick("Setting")}
      >
        <ListItemIcon>
          <SettingsOutlinedIcon sx={{ color: selectedItem === "Setting" ? "rgba(240, 99, 90, 1)" : "white" }} />
        </ListItemIcon>
        <ListItemText primary="Setting" />
      </ListItemButton>

      <ListItemButton
        selected={selectedItem === "Help & FAQs"}
       
        onClick={() => handleItemClick("Help & FAQs")}
      >
        <ListItemIcon>
          <HelpOutlineOutlinedIcon sx={{ color: selectedItem === "Help & FAQs" ? "rgba(240, 99, 90, 1)" : "white" }} />
        </ListItemIcon>
        <ListItemText primary="Help & FAQs" />
      </ListItemButton>

      <ListItemButton
        selected={selectedItem === "Sign Out"}
        
        onClick={() => handleItemClick("Sign Out")}
      >
        <ListItemIcon>
          <LoginIcon sx={{ color: selectedItem === "Sign Out" ? "rgba(240, 99, 90, 1)" : "white" }} />
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
