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
import './HeaderComponent.css';

const navItems = ['HOME', 'EXCHANGE RATES (LIVE)', 'ABOUT', 'ERROR PAGE'];

export default function HeaderComponent({darkMode, setDarkMode}) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('HOME');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleThemeToggle = () => {
        setDarkMode(!darkMode);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const drawer = (
        <Box className={`drawer-content ${darkMode ? 'drawer-dark' : 'drawer-light'}`} onClick={handleDrawerToggle}>
            <List>
                {navItems.map((item) => (
                    <ListItem
                    button
                    key={item}
                    onClick={() => handleTabClick(item)}
                >
                    <ListItemText
                        primary={item}
                        className={`drawer-link ${activeTab === item ? 'active' : ''}`}
                    />
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
                <div className='nav-container'>
                    {!isMobile && (
                        <div className="nav-items">
                            {navItems.map((item) => (
                                <Button
                                    key={item}
                                    onClick={() => handleTabClick(item)}
                                    className={`nav-button ${activeTab === item ? 'active' : ''}`}
                                >
                                    {item}
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

            <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle} ModalProps={{ keepMounted: true }}>
                {drawer}
            </Drawer>
        </AppBar>
    );
}
