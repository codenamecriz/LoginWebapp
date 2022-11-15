import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Link from "@mui/material/Link";

const pages = [
  { text: "Home", href: "/" },
  { text: "Register", href: "/register" },
];

export default function ButtonAppBar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {pages.map((item) => (
              <Button color="inherit" href={item.href}>
                {item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
