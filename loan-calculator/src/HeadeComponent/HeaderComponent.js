import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Switch,
    IconButton,
    Drawer,
    Box,
    List,
    ListItem,
    ListItemText,
    useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import './HeaderComponent.css';

const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'EXCHANGE RATES (LIVE)', path: '/exchange-rates' },
    { label: 'ABOUT', path: '/about' },
    { label: 'ERROR PAGE', path: '/error' },
];

export default function HeaderComponent({ darkMode, setDarkMode }) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const location = useLocation(); // Get the current route

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleThemeToggle = () => {
        setDarkMode(!darkMode);
    };

    const drawer = (
        <Box
            className={`drawer-content ${darkMode ? 'drawer-dark' : 'drawer-light'}`}
            onClick={handleDrawerToggle}
        >
            <List>
                {navItems.map((item) => (
                    <ListItem button key={item.label}>
                        <Link
                            to={item.path}
                            className={`drawer-link ${location.pathname === item.path ? 'active' : ''}`}
                        >
                            <ListItemText primary={item.label} />
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar className={`appbar ${darkMode ? 'header-dark' : 'header-light'}`}>
            <Toolbar className="toolbar">
                {isMobile && (
                    <IconButton edge="start" color="inherit" onClick={handleDrawerToggle}>
                        <MenuIcon />
                    </IconButton>
                )}
                <Typography className="logo">Loan Calculator</Typography>
                <div className="nav-container">
                    {!isMobile && (
                        <div className="nav-items">
                            {navItems.map((item) => (
                                <Button
                                    key={item.label}
                                    className={`nav-button ${location.pathname === item.path ? 'active' : ''}`}
                                >
                                    <Link to={item.path} className="nav-link">
                                        {item.label}
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    )}
                    <Switch
                        checked={darkMode}
                        onChange={handleThemeToggle}
                        className="theme-switch"
                    />
                </div>
            </Toolbar>

            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
}