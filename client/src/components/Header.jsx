import React from 'react';
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

import headerImg from '../assets/headerimage.png';

const Header = () => {

    const CustomBox = styled(Box)(({ theme }) => ({
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        backgroundColor: '#046169',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box)(({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));

    const HeaderImgBox = styled(Box)(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            flex: '1',
            paddingTop: '30px',
            alignSelf: 'center',
        },
        [theme.breakpoints.up('md')]: {
            flex: '2',
            alignSelf: 'flex-end',
        },
        overflow: 'hidden', // Ensure the image doesn't overflow its container
        borderRadius: '8px', // Add some border-radius for a modern look
    }));

    return (
        <CustomBox component='header'>
            <BoxText component='section'>
                <Typography
                    variant='h2'
                    component='h1'
                    sx={{
                        fontWeight: 700,
                        color: '#fff',
                    }}
                >
                    We'll build the house of your dreams
                </Typography>

                <Typography
                    variant='p'
                    component='p'
                    sx={{
                        py: 3,
                        lineHeight: 1.6,
                        color: '#fff',
                    }}
                >
                    We have over 9000 reviews, and our customers trust our properties and quality products.
                </Typography>

                <Box>
                    <Button
                        component={Link}
                        to={'/allcontractors'}
                        variant='contained'
                        sx={{
                            mr: 2,
                            px: 4,
                            py: 1,
                            fontSize: '0.9rem',
                            textTransform: 'capitalize',
                            borderRadius: 0,
                            backgroundColor: '#f50057',
                            "&:hover": {
                                backgroundColor: "#d500f9",
                            },
                        }}
                    >
                        Find Contractor
                    </Button>
                    <Button
                        component={Link}
                        to={'/about'}
                        variant='outlined'
                        sx={{
                            px: 4,
                            py: 1,
                            fontSize: '0.9rem',
                            textTransform: 'capitalize',
                            borderRadius: 0,
                            color: '#fff',
                            borderColor: '#fff',
                            "&:hover": {
                                color: '#f50057',
                                borderColor: '#f50057',
                            },
                        }}
                    >
                        Explore
                    </Button>
                </Box>
            </BoxText>

            <HeaderImgBox>
                <img
                    src={headerImg}
                    alt="headerImg"
                    style={{
                        width: "100%",
                        marginBottom: -15,
                    }}
                />
            </HeaderImgBox>
        </CustomBox>
    )
}

export default Header;
