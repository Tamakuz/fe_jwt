import * as React from "react";
import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const togleDrawer = () => setIsOpen(!isOpen);

  return (
    <Box>
      <Box>
        <AppBar>
          <Toolbar>
            <IconButton color="inherit" sx={{ mr: 2 }} onClick={togleDrawer}>
              <Menu />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              color="inherit"
              sx={{ flexGrow: 1, cursor: "pointer" }}
            >
              Tamakuz
            </Typography>
            <Link to={"/login"}>
              <Button color="inherit">Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer anchor="left" open={isOpen} onClose={togleDrawer}>
        dscscsdcsdc
      </Drawer>
    </Box>
  );
};

export default Nav;
