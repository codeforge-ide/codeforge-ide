import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "next/link";

export default function Header() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link href="/" passHref style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="/codeforge-ide.png"
                alt="CodeForgeAI Logo"
                style={{ width: 36, height: 36, marginRight: 12 }}
              />
              <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 1 }}>
                CodeForgeAI
              </Typography>
            </Link>
          </Box>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Link href="#features" passHref>
            <Button color="inherit">Features</Button>
          </Link>
          <Link href="#integrations" passHref>
            <Button color="inherit">Integrations</Button>
          </Link>
          <Link href="https://github.com/codeforge-ide" target="_blank" rel="noopener">
            <Button color="inherit">GitHub</Button>
          </Link>
          <Link href="/auth" passHref>
            <Button variant="contained" color="primary">Login</Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
