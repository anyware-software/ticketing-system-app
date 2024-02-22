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
import { useLocation, useNavigate } from "react-router-dom";
import FestivalIcon from "@mui/icons-material/Festival";
import { Pages } from "../../constants/Pages";
import HomeIcon from "@mui/icons-material/Home";
import Box from "@mui/material/Box";

interface MainListItemsProps {
  onItemSelected: (item: string) => void;
}

export const TopListItems = ({ onItemSelected }: MainListItemsProps) => {
  const [selectedItem, setSelectedItem] = React.useState<string | null>(null);
  const user = useSelector((state: any) => state.app.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

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
  const isCurrentPage = (page: string, exact?: boolean) => {
    if (exact) {
      return location.pathname.replaceAll("/", "") === page;
    }
    return location.pathname.includes(page);
  };
  return (
    <Box sx={{
        display:'flex',
    }}>
      <ListItemButton
        selected={selectedItem === "Home"}
        onClick={() => navigate(`/dashboard/${Pages.Home}`)}
      >
        <ListItemText primary="Home"  sx={{
              color: isCurrentPage("dashboard", true)
                ? "red"
                : "white",
            }}/>
      </ListItemButton>

      <ListItemButton
        selected={selectedItem === "Profile"}
        onClick={() => navigate(`/dashboard/${Pages.PROFILE}`)}
      >
        <ListItemText primary="Profile" sx={{
              color: isCurrentPage(Pages.PROFILE)
                ? "red"
                : "white",
            }}/>
      </ListItemButton>

      <ListItemButton
        selected={selectedItem === "tickets"}
        onClick={() => navigate(`/dashboard/${Pages.EVENTS}`)}
      >
        <ListItemText primary="Tickets" sx={{
              color: isCurrentPage(Pages.EVENTS)
                ? "red"
                : "white",
            }}/>
      </ListItemButton>

      {/* <ListItemButton
        selected={selectedItem === "Notifications"}
        onClick={() => navigate(`/dashboard/${Pages.NOTIFICATIONS}`)}
      >
        <ListItemIcon>
          <ChatBubbleOutlineOutlinedIcon
            sx={{
              color: isCurrentPage(Pages.NOTIFICATIONS)
                ? "red"
                : "white",
            }}
          />
        </ListItemIcon>
        <ListItemText primary="Notifications" />
      </ListItemButton>

      <ListItemButton
        selected={selectedItem === "Calender"}
        onClick={() => navigate(`/dashboard/${Pages.CALENDAR}`)}
      >
        <ListItemIcon>
          <TodayOutlinedIcon
            sx={{
              color: isCurrentPage(Pages.CALENDAR)
                ? "red"
                : "white",
            }}
          />
        </ListItemIcon>
        <ListItemText primary="Calender" />
      </ListItemButton>

      <ListItemButton
        selected={selectedItem === "Bookmark"}
        onClick={() => navigate(`/dashboard/${Pages.BOOKMARKS}`)}
      >
        <ListItemIcon>
          <TurnedInNotOutlinedIcon
            sx={{
              color: isCurrentPage(Pages.BOOKMARKS)
                ? "red"
                : "white",
            }}
          />
        </ListItemIcon>
        <ListItemText primary="Bookmark" />
      </ListItemButton> */}

      {/* <ListItemButton
        selected={selectedItem === "Contact US"}
        onClick={() => navigate(`/dashboard/${Pages.CONTACT}`)}
      >
        <ListItemIcon>
          <LocalPostOfficeOutlinedIcon
            sx={{
              color: isCurrentPage(Pages.CONTACT)
                ? "red"
                : "white",
            }}
          />
        </ListItemIcon>
        <ListItemText primary="Contact US" />
      </ListItemButton> */}

      {/* <ListItemButton
        selected={selectedItem === "Setting"}
        onClick={() => navigate(`/dashboard/${Pages.SETTINGS}`)}
      >
        <ListItemIcon>
          <SettingsOutlinedIcon
            sx={{
              color: isCurrentPage(Pages.SETTINGS)
                ? "red"
                : "white",
            }}
          />
        </ListItemIcon>
        <ListItemText primary="Setting" />
      </ListItemButton>

      <ListItemButton
        selected={selectedItem === "Help & FAQs"}
        onClick={() => navigate(`/dashboard/${Pages.HELP}`)}
      >
        <ListItemIcon>
          <HelpOutlineOutlinedIcon
            sx={{
              color: isCurrentPage(Pages.HELP)
                ? "red"
                : "white",
            }}
          />
        </ListItemIcon>
        <ListItemText primary="Help & FAQs" />
      </ListItemButton> */}
    </Box>
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
