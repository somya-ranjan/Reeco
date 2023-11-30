import { memo, useState } from "react";
import {
  Box,
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  List,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";
import { FaBars } from "react-icons/fa6";
import { BsCart } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

// // static import
import LogoutModal from "../../view/auth/LogoutModal";
import { BRAND_LOGO, BRAND_LOGO_LIGHT } from "../../assets/images";
import "./style.scss";

function NavBar({ window }) {
  // // local state
  const drawerWidth = 240;
  const navItems = ["Store", "Orders", "Analytics"];
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  // // function
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
      className="sidebar_hero"
    >
      <Box my={2}>
        <img src={BRAND_LOGO} alt="brand logo" className="brand_logo" />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          className="nav_bar_hero"
          position="static"
          sx={{
            backgroundColor: "var(--navbar-bg)",
            px: { lg: 6 },
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <FaBars />
            </IconButton>
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              <img
                src={BRAND_LOGO_LIGHT}
                alt="brand logo"
                className="brand_logo"
              />
              <Box>
                {navItems.map((item) => (
                  <Button
                    key={item}
                    sx={{
                      color: "#fff",
                      mx: 1.5,
                      textTransform: "none",
                      fontWeight: "normal",
                    }}
                    className="muted"
                  >
                    {item}
                  </Button>
                ))}
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Badge
                badgeContent={4}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "var(--second-highlight-bg)",
                  },
                }}
              >
                <BsCart style={{ fontSize: "22px", transform: "scaleX(-1)" }} />
              </Badge>
              <Box ml={2}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#fff",
                  }}
                  className="muted"
                >
                  <Typography variant="body2">Hello, James</Typography>
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{ paddingRight: "0" }}
                  >
                    <MdKeyboardArrowDown color="#fff" />
                  </IconButton>
                </Box>
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
                  onClose={() => setAnchorElUser(null)}
                >
                  <MenuItem onClick={() => setAnchorElUser(null)}>
                    <Typography
                      textAlign="center"
                      onClick={() => setOpenLogoutModal(true)}
                    >
                      Logout
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>

        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
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
        </nav>
      </Box>
      <LogoutModal
        isOpen={openLogoutModal}
        onClose={() => setOpenLogoutModal(false)}
      />
    </>
  );
}

export default memo(NavBar);
