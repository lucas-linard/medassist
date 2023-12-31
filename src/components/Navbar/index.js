import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import TemporaryDrawer from "../Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Image from 'next/image'

import Logo from "../../assets/images/Logo.png";

export default function Navbar({handleNav}) {

    const [state, setState] = React.useState({
        left: false,
      });

  return (
    <Box sx={{ flexGrow: 1 }}>
        <TemporaryDrawer handleNav={handleNav} state={state} setState={setState}/>
      <AppBar position="static" >
        <Toolbar sx={{ justifyContent: "space-between", backgroundColor: "#fff" }} >
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setState({ ...state, left: true })}
          >
            <MenuIcon />
          </IconButton>
          <Image src={Logo} alt="Logo"  />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
