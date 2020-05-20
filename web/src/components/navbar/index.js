import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Divider, List, IconButton, Typography, Hidden, Drawer, AppBar, Toolbar, CssBaseline, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { MdMenu as Menu, MdStore as Store, MdHome as Home, MdClose as Close } from 'react-icons/md';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import logo from '../../assets/logo.svg';

import './styles.css';

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginRight: drawerWidth,
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            justifyContent: 'space-between'
        },
    },
    menuButton: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    linkIcon: {
        maxWidth: 20,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar, 
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function Navbar() {

    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} id="toolbar"><img src={logo} alt="logo" /></div>
            <Divider />
            <List>
                <Link to="/">
                    <ListItem button>
                        <ListItemIcon><Home size={26} /></ListItemIcon>
                        <ListItemText>Início</ListItemText>
                    </ListItem>
                </Link>
                <Link to="/nike">
                    <ListItem button>
                        <ListItemIcon><Store size={26} /></ListItemIcon>
                        <ListItemText>Nike</ListItemText>
                    </ListItem>
                </Link>
            </List>
        </div>
    );

    const menuIcon = mobileOpen ? <Close /> : <Menu />

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar style={{ justifyContent: 'space-between' }}>
                    <Typography variant="h6" noWrap>
                        Início
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        {menuIcon}
                    </IconButton>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    )
}