import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import { useTheme } from "@mui/material/styles";

export default function Header() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'GitHub', href: 'https://github.com/codeforge-ide', external: true },
  ];

  return (
    <AppBar position="sticky" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(6px)', backgroundColor: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 1, sm: 2, md: 4 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Link href="/" passHref style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/codeforge-ide.png" alt="CodeForgeAI Logo" style={{ width: 40, height: 40 }} />
            <Typography variant="h6" sx={{ fontWeight: 800, ml: 1, letterSpacing: 0.5, display: { xs: 'none', sm: 'block' } }}>
              CodeForgeAI
            </Typography>
          </Link>
        </Box>

        {/* Desktop nav */}
        {!isSm && (
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            {navItems.map((item) => (
              item.external ? (
                <Link key={item.label} href={item.href} target="_blank" rel="noopener">
                  <Button color="inherit">{item.label}</Button>
                </Link>
              ) : (
                <Link key={item.label} href={item.href} passHref>
                  <Button color="inherit">{item.label}</Button>
                </Link>
              )
            ))}

            <Link href="/auth" passHref>
              <Button variant="contained" color="primary" sx={{ ml: 1 }}>Login</Button>
            </Link>
          </Box>
        )}

        {/* Mobile menu */}
        {isSm && (
          <Box>
            <IconButton onClick={handleOpen} aria-label="open navigation" size="large">
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} keepMounted>
              {navItems.map((item) => (
                <MenuItem key={item.label} onClick={handleClose}>
                  {item.external ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>{item.label}</a>
                  ) : (
                    <Link href={item.href} passHref><a style={{ textDecoration: 'none', color: 'inherit' }}>{item.label}</a></Link>
                  )}
                </MenuItem>
              ))}
              <MenuItem onClick={handleClose}>
                <Link href="/auth" passHref><a style={{ textDecoration: 'none', color: 'inherit' }}>Login</a></Link>
              </MenuItem>
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
