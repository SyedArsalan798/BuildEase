import React from 'react';
import Logoo from '../assets/buildeasehomelogo.png'
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
        minWidth: "160px",
        display: "none",
        flexDirection: "column",
        "& a": {
            color: "#1e2a5a",
            padding: "12px",
            textDecoration: "none",
            "&:hover": {
                backgroundColor: "grey",
                color: "#fff"
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
        text: "Service",
        dropdown: [
            { text: "Become Contractors", to: "/homecontract" },
            { text: "Sell Materials", to: "/homematerial" },
            { text: "Cost Calculator", to: "/cost-calculator" },
            { text: "Daily Prices", to: "/dailyprice" }
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
            className='shadow-sm'
            component="nav"
            position="sticky"
            sx={{
                backgroundColor: '	#10898d', // Match the header background color
            }}
            elevation={0}
        >
            <StyledToolbar>
                {/* Add your logo here */}
                <Box>
                <img
                        src={Logoo}// Replace with the actual path to your logo image
                        alt="Logo"
                        style={{ height: '100px', width: '130px' }} // Adjust the height as needed
                    />
                </Box>
                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                    <DrawerItem />
                </Box>
                <ListMenu>
                    {itemList.map((item) => {
                        const { text, to, dropdown } = item;
                        return (
                            <ListItem key={text} className={text === "Service" ? "service-item" : ""}>
                                {dropdown ? (
                                    <>
                                        <ListItemButton
                                            sx={{
                                                color: '#fff',
                                                "&:hover": {
                                                    backgroundColor: 'transparent',
                                                    color: '#1e2a5a',
                                                }
                                            }}
                                        >
                                            <ListItemText primary={text} />
                                        </ListItemButton>
                                        <List className="py-0 me-4 dropdown-list">
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
                                            color: '#fff',
                                            "&:hover": {
                                                backgroundColor: 'transparent',
                                                color: '#1e2a5a',
                                            }
                                        }}
                                    >
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                )}
                            </ListItem>
                        );
                    })}
                </ListMenu>
            </StyledToolbar>
        </AppBar>
    );
}

export default Navbar;
