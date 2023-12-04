import React from 'react';
import Logoo from '../components/Contractor/images/buildease_logo.png'

import {
    AppBar,
    Toolbar,
    Box,
    List,
    ListItem,
    Typography,
    styled,
    ListItemButton,
    ListItemText,
    Button
} from '@mui/material';
// menu
import DrawerItem from './DrawerItem';
// rotas
import { Link } from 'react-router-dom';

// personalizacao
const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', // Center items vertically
});

const ListMenu = styled(List)(({ theme }) => ({
    display: 'flex',
    "& .dropdown-list": {
        position: "absolute",
        top: "100%",
        left: 0,
        backgroundColor: "#fff",
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
        zIndex: 1,
        minWidth: "200px",
        display: "none",
        flexDirection: "column",
        borderRadius: '20px',
        "& a": {  
            borderRadius: '20px',
            color: "#1e2a5a",
            padding: "5px 20px",
            textDecoration: "none",
            "&:hover": {
                color: "grey"
            }
        }
    },
    "& .service-item:hover .dropdown-list": {
        display: "flex",
    },
}));

const itemList = [
    {
        text: "Home",
        to: "/"
    },
    {
        text: "Services",
        dropdown: [
            { text: "Become Contractor", to: "/homecontract" },
            // { text: "Sell Materials", to: "/homematerial" },
            { text: "Cost Calculator", to: "/costcalculator" },
            { text: "Daily Prices", to: "/u_dailyprice" }
        ]
    },
    {
        text: "About",
        to: "/about"
    },
    {
        text: "Contact",
        to: "/contact"
    }
];

const Navbar = () => {
    return (
        <AppBar
            component="nav"
            // position="sticky"
            sx={{
                backgroundColor: '#f2f2f0', // Match the header background color
            }}
            elevation={0}
        >
            <StyledToolbar className='d-flex align-items-center justify-content-between'>
                {/* Add your logo here */}
                <Box>
                <img
                        src={Logoo}// Replace with the actual path to your logo image
                        alt="Logo"
                        style={{ height: '100px', width: '110px' }} // Adjust the height as needed
                    />
                </Box>
                {/* <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                    <DrawerItem />
                </Box> */}
                <ListMenu>
                    {itemList.map((item) => {
                        const { text, to, dropdown } = item;
                        return (
                            <ListItem key={text} className={text === "Services" ? "service-item" : ""}>
                                {dropdown ? (
                                    <>
                                        <ListItemButton
                                            sx={{
                                                color: '#000000',
                                                borderRadius: "20px",
                                                
                                            }}
                                        >
                                        <Typography fontWeight="500">
                                            {text}
                                        </Typography>                                        
                                        </ListItemButton>
                                        <List className="me-4 dropdown-list">
                                            {dropdown.map((option) => (
                                                <ListItem key={option.text} component={Link} to={option.to}>
                                                    <ListItemText primary={option.text} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </>
                                ) : (
                                    <ListItemButton component={Link} to={to}
                                    sx={{
                                        color: '#000000',
                                        borderRadius: "20px",
                                        
                                    }}
                                    >
                                    <Typography fontWeight="500">
                                    {text}
                                    </Typography>
                                    </ListItemButton>

                                )}
                            </ListItem>
                        );
                    })}

                </ListMenu>

                <Button
                        component={Link}
                        //signup page
                        to={'/'}
                        variant='contained'
                        sx={{
                            mr: 2,
                            px: 4,
                            py: 1.5,
                            fontSize: '0.9rem',
                            textTransform: 'capitalize',
                            borderRadius: 20,
                            // border: "2px solid #1976d2"
                        }}
                    >
                        Sign up
                    </Button>
            </StyledToolbar>
        </AppBar>
    );
}

export default Navbar;
