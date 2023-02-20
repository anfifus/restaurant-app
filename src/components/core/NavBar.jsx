//import * as React from "react";
import React, { Suspense } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Facebook, Google, Add } from "@mui/icons-material";
import "./NavBar.css";
import { ThemeContext } from "../..";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { CssBaseline, Drawer, useScrollTrigger } from "@mui/material";

const settings = [
  <Button
    variant="text"
    startIcon={<Facebook />}
    href="https://www.facebook.com/pages/Le-Duc-243-Blvd-Raspail-Paris/261475457347358"
  />,
  <Button variant="text" startIcon={<Google />}></Button>,

  <Link to={"components/home/Reservas"}>
    <Button variant="text" startIcon={<Add />}></Button>
  </Link>,
];

function ResponsiveAppBar() {
  const { t, i18n } = useTranslation("translation");
  const pages = [
    "the_letter",
    "the_restaurant",
    "the_contact",
    "the_news",
    "reservation",
  ];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const DEFAULT_LANGUAGE = "es";
  const DEFAULT_THEME = "light";
  const lightSrc =
    "http://restaurantleduc.com/wp-content/themes/leduc/img/skin/logo.png";
  const darkSrc = "logo-dark.png";
  /*   const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
   */
  function ShrinkScroll(props){
      const {children, window} = props;
      const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 62,
        target: window ? window():undefined,
      });
      return React.cloneElement(children,{
        className: trigger ? 'no-shrink' : 'shrink'
      });
  }
  const container = window !== undefined ? () => window().document.body : undefined;

  function ChangeLanguage() {
    /*  setLanguage(language === DEFAULT_LANGUAGE ? "ca" : "es");
    console.log(i18n);
    i18n.changeLanguage(language, (err, t) => {
      if (err) return console.console.log("something went wrong loading", err);
    });
    return language; */

    i18n.changeLanguage(
      i18n.language === DEFAULT_LANGUAGE
        ? "fr"
        : i18n.language === "fr"
        ? "ca"
        : "es",
      (err, t) => {
        if (err)
          return console.console.log("something went wrong loading", err);
      }
    );
  }
  return (
    <Box>
      <CssBaseline/>
      <ShrinkScroll {...props}>
        <AppBar position="static">
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                
                <ThemeContext.Consumer>
                  {({ theme }) => (
                    <>
                      <img
                        src={theme === DEFAULT_THEME ? lightSrc : darkSrc}
                        alt="Restaurant Le Duc"
                        className="NavImage"
                      />
                    </>
                  )}
                </ThemeContext.Consumer>

                {/* logo */}
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                >
                  Location
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
{/*                   container={container}
 */}                  {pages.map((page, id) => (
                    <MenuItem key={id} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center" color="inherit">
                        <Suspense fallback="loading">
                          <HashLink
                            to={page === "Reservation" ? "/" + page : "/#" + page}
                          >
                            {t(page)}
                          </HashLink>
                        </Suspense>
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <ThemeContext.Consumer>
                  {(theme) => (
                    <>
                      <img
                        src={theme === DEFAULT_THEME ? lightSrc : darkSrc}
                        alt="Restaurant Le Duc"
                        className="NavImage"
                      />
                    </>
                  )}
                </ThemeContext.Consumer>
              </Typography>
              <Box
                sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                alignItems="center"
                justifyContent="center"
              >
                {pages.map((page, id) => (
                  <Button
                    key={id}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "inherit", display: "block" }}
                  >
                    <Suspense fallback="loading">
                      {console.log("The letter--> ", t(page))}
                      <HashLink
                        to={page === "Reservation" ? "/" + page : "/#" + page}
                      >
                        {t(page)}
                      </HashLink>
                    </Suspense>
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    Social
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting, id) => (
                    <MenuItem key={id} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
                <IconButton onClick={ChangeLanguage} id="buttonLanguage">
                  <span sx={{ color: "inherit" }}> {i18n.language}</span>
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ShrinkScroll>
     {/*  <Box component="nav">
          <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                  display: { xs: 'block', sm: 'none' },
                  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
          >
              {drawer}
          </Drawer>
      </Box> */}
    </Box>
  );
}
export default ResponsiveAppBar;
