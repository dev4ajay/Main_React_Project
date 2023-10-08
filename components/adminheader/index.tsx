import { useState } from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LogoPic from "public/Bluetripicalogo.png";
import Image from "next/image";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BookOnlineOutlinedIcon from "@mui/icons-material/BookOnlineOutlined";
import RoofingOutlinedIcon from "@mui/icons-material/RoofingOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import MinorCrashOutlinedIcon from "@mui/icons-material/MinorCrashOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import AltRouteOutlinedIcon from "@mui/icons-material/AltRouteOutlined";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import AirplanemodeActiveOutlinedIcon from "@mui/icons-material/AirplanemodeActiveOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { useRouter } from "next/router";

const drawerWidth = 250;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const router = useRouter();
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [openDropdown, setopenDropdown] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClickDrop = () => {
    setopenDropdown(!openDropdown);
  };

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  const selectedListItemButtonStyle = {
    backgroundColor: "red",
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar position="fixed" open={open} className="bg-white py-1">
        <Toolbar className="flex">
          <IconButton
            className="text-[#34609d] mr-[auto]"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            sx={{
              ...(open && { display: "none" }),
            }}
          >
            <Image
              style={{
                width: 180,
              }}
              src={LogoPic}
              alt="Picture of the author"
            />
          </IconButton>
          <AccountCircleOutlinedIcon className="text-[#34609d] ml-[auto] text-4xl" />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader className="py-1">
          <Image
            style={{
              width: 180,
            }}
            src={LogoPic}
            alt="Picture of the author"
          />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
          className="mt-5"
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => router.push("/admin/home")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                  color: "#34609d",
                }}
              >
                <RoofingOutlinedIcon />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0, color: "#34609d" }}>
                {" "}
                Home
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => router.push("/admin/bookings")}
          >
            <ListItemButton
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                  color: "#34609d",
                }}
              >
                <BookOnlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0, color: "#34609d" }}>
                {" "}
                Bookings
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={handleClickDrop}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                  color: "#34609d",
                }}
              >
                <RoomOutlinedIcon />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0, color: "#34609d" }}>
                {" "}
                Destinatios {openDropdown ? <ExpandLess /> : <ExpandMore />}
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <Collapse in={openDropdown} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                onClick={() => router.push("/admin/onewaytrip")}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    ml: open ? 3 : "auto",
                    mr: open ? 2 : "auto",
                    justifyContent: "center",
                    color: "#34609d",
                  }}
                >
                  <AltRouteOutlinedIcon />
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0, color: "#34609d" }}>
                  {" "}
                  One Way Trip{" "}
                </ListItemText>
              </ListItemButton>
              <ListItemButton
                onClick={() => router.push("/admin/roundtrip")}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    ml: open ? 3 : "auto",
                    mr: open ? 2 : "auto",
                    justifyContent: "center",
                    color: "#34609d",
                  }}
                >
                  <LoopOutlinedIcon />
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0, color: "#34609d" }}>
                  {" "}
                  Round Trip
                </ListItemText>
              </ListItemButton>
              <ListItemButton
                onClick={() =>
                  router.push("/admin/airport-transportation-destination")
                }
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    ml: open ? 3 : "auto",
                    mr: open ? 2 : "auto",
                    justifyContent: "center",
                    color: "#34609d",
                  }}
                >
                  <AirplanemodeActiveOutlinedIcon />
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0, color: "#34609d" }}>
                  {" "}
                  Airport Transportation
                </ListItemText>
              </ListItemButton>
            </List>
          </Collapse>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => router.push("/admin/blogs")}
          >
            <ListItemButton
              selected={selectedIndex === 6}
              onClick={(event) => handleListItemClick(event, 6)}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                  color: "#34609d",
                }}
              >
                <WidgetsOutlinedIcon />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0, color: "#34609d" }}>
                {" "}
                Blogs
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => router.push("/admin/cars")}
          >
            <ListItemButton
              selected={selectedIndex === 7}
              onClick={(event) => handleListItemClick(event, 7)}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                  color: "#34609d",
                }}
              >
                <MinorCrashOutlinedIcon />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0, color: "#34609d" }}>
                Cars
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => router.push("/admin/vendors")}
          >
            <ListItemButton
              selected={selectedIndex === 7}
              onClick={(event) => handleListItemClick(event, 7)}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                  color: "#34609d",
                }}
              >
                <AccountBalanceWalletOutlinedIcon />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0, color: "#34609d" }}>
                Vendors
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              display: "block",
              "&:hover": {
                background: "none",
              },
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                width: 150,
                background: "#34609d",
                mx: 1,
                my: 2,
                borderRadius: 2,
                "&:hover": {
                  background: "#34609d",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                  color: "#fff",
                }}
              >
                <ExitToAppOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                sx={{ opacity: open ? 1 : 0, color: "#fff" }}
                onClick={() => {
                  localStorage.clear();
                  router.push("/");
                }}
              >
                Logout
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
