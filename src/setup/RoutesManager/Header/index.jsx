import {useState, useEffect} from 'react';
import './style.scss';
import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = ['Home', 'About', 'Work', 'Process', 'Service', 'Testimonials', 'Contact'];

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };
  
    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          MUI
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );

    return (
        <div id="header">
            <div className="container">
                <AppBar className='app-bar' component="nav">
                    <Toolbar className='toolBar'>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                        className="logo"
                    >
                        TEMPLATEFREE
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className='menuMobile'
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box
                        className="menu-holder"
                    >
                        {navItems.map((item) => (
                            <Button key={item} className='menu-btn'>
                                {item}
                            </Button>
                        ))}
                    </Box>
                    </Toolbar>
                </AppBar>
                <Box className='drawer' component="nav">
                    <Drawer
                    anchor="right"
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', maxWidth: 340, width: '100%'},
                    }}
                    >
                    {drawer}
                    </Drawer>
                </Box>
            </div>
        </div>
    )

}

export default Header;