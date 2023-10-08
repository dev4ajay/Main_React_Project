import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import LogoPic from "public/tripicalogo.png";
import HeaderStyle from "../header/HeaderStyle.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

interface MenuItem {
  id: string;
  header: string;
  url: string;
}

export default function DrawerAppBar(props: Props) {
  // const pathname = usePathname
  const router = useRouter();
  console.log(router?.asPath);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [menuItem, setMenuItem] = React.useState<MenuItem[]>([
    {
      id: "1",
      header: "Home",
      url: "/",
    },
    // {
    //   id: "2",
    //   header: "About",
    //   url: "/about-us",
    // },
    {
      id: "2",
      header: "One Way",
      url: "/OneWay",
    },
    {
      id: "3",
      header: "Round Trip",
      url: "/RoundWay",
    },
    {
      id: "4",
      header: "Airport Transfer",
      url: "/AirportTransfer",
    },

    {
      id: "5",
      header: "Blog",
      url: "/blog",
    },
    // {
    //   id: "5",
    //   header: "OurCars",
    //   url: "/ourcars",
    // },
    {
      id: "6",
      header: "Contact",
      url: "/contact-us",
    },
  ]);
  const navItems = ["Home", "About", "Services", "Our Cars", "Contact"];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Image
          style={{
            width: 180,
          }}
          src={LogoPic}
          alt="Picture of the author"
        />
      </Typography>
      <Divider />
      <List>
        {menuItem.map((item) => (
          <ListItem key={item.id} disablePadding className="border-b-2">
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={(e) => {
                e.preventDefault();
                router.push(item.url);
              }}
            >
              <ListItemText primary={item.header} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" className={HeaderStyle.HeaderStyle}>
        <Toolbar sx={{ justifyContent: "space-around" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Image
              style={{
                width: 180,
              }}
              src={LogoPic}
              alt="Picture of the author"
            />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className="flex gap-7 ">
              {menuItem.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.url}
                    className={
                      router?.asPath == item.url ? HeaderStyle.navLink : ""
                    }
                  >
                    {item.header}
                  </Link>
                </li>
              ))}
            </ul>

            {/* {menuItem.map((item) => (
              <Button
                key={item.id}
                onClick={(e) => {
                  e.preventDefault();
                  router.replace(item.url);
                }}
              >
                {item.header}
              </Button>
            ))} */}
          </Box>
          <Image
            className={HeaderStyle.MobileLogo}
            style={{
              width: 180,
            }}
            src={LogoPic}
            alt="Picture of the author"
          />
          {/* <SearchIcon /> */}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: false, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
