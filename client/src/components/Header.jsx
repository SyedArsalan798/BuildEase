import React from 'react';
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

import headerImg from '../assets/headerimage.png';

const Header = () => {

    const CustomBox = styled(Box)(({ theme }) => ({
        minHeight: '80vh',
        height: "100%",
        // marginTop: "-50px",
        display: 'flex',
        // justifyContent: 'space-around',
        alignItems: 'center',
        gap: theme.spacing(4),
        backgroundColor: '#f2f2f0',
        [theme.breakpoints.down('md')]: {
            paddingTop: "200px",
            flexDirection: 'column',
            alignItems: 'center',
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
            alignSelf: 'end',
        },
        [theme.breakpoints.up('md')]: {
            flex: '2',
            alignSelf: 'flex-end',
        },
        overflow: 'hidden', // Ensure the image doesn't overflow its container
    }));

    return (
        <center>
        <CustomBox component='header'>
            <BoxText component='section'>
                <Typography
                className=''
                    variant='h3'
                    component='h1'
                    sx={{
                        fontWeight: 700,
                        color: '#000000',
                        fontFamily: "sans-serif"
                    }}
                >
                    Designing Dreams, Building Futures
                </Typography>

                <Typography
                    variant='p'
                    component='p'
                    sx={{
                        fontSize: "18px",
                        fontWeight: '400',
                        py: 3,
                        lineHeight: 1.6,
                        color: 'black',
                    }}
                >
                Your dream home is not just a construction project for us, it's a collaboration in creating lasting legacies.
                </Typography>

                <Box>
                    <Button
                        component={Link}
                        to={'/contractorlist'}
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
                        Find Contractor
                    </Button>
                    {/* <Button
                        component={Link}
                        to={'/about'}
                        variant='outlined'
                        sx={{
                            px: 4,
                            py: 1,
                            fontSize: '0.9rem',
                            textTransform: 'capitalize',
                            borderRadius: 0,
                            border: "2px solid #1976d2"
                        }}
                    >
                        Explore
                    </Button> */}
                </Box>
            </BoxText>

            <HeaderImgBox>
                <img
                    src={headerImg}
                    alt="headerImg"
                    style={{
                        width: "80%",
                    }}
                />
            </HeaderImgBox>
        </CustomBox>
        </center>
    )
}

export default Header;
