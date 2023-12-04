import React from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Grid,
    styled,
    Typography,
    Button,
} from '@mui/material';
import Title from './Title';

// img
import imgDetail from '../assets/contractor.jpg';
import imgDetail2 from '../assets/materials.jpg';
import costCalc from '../assets/costCalc.png';


const GetStarted = () => {
    const CustomGridItem = styled(Grid)({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    });

    const CustomTypography = styled(Typography)({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    });

    const CustomButton = styled(Button)({
        marginTop: '1rem',
    });

    return (
        <Grid
            container
            spacing={{ xs: 4, sm: 4, md: 0 }}
            sx={{
                py: 10,
                px: 3,
            }}
        >
            <CustomGridItem item xs={12} sm={8} md={6} component="section">
                <Box
                    component="article"
                    sx={{
                        my: 5,
                        px: 4,
                    }}
                >
                    <Title text={"Updated Contractor's Listings"} textAlign={'start'} />
                    <CustomTypography>
                        Listings are updated continuously so you won't miss out on homes that just
                        hit the market until you find your perfect home.
                    </CustomTypography>
                    <Button
                        component={Link}
                        to={'/contractorlist'}
                        variant="contained"
                        sx={{
                            mt: 2,
                            mr: 2,
                            px: 4,
                            py: 1.5,
                            fontSize: '0.9rem',
                            textTransform: 'capitalize',
                            borderRadius: 20,
                        }}
                    >
                        View Listings
                    </Button>
                </Box>
            </CustomGridItem>

            <Grid item xs={12} sm={4} md={6}>
                <img
                    src={imgDetail}
                    alt=""
                    style={{
                        width: '100%',
                        borderRadius: 20,
                    }}
                />
            </Grid>

            {/* 1st instance of the 3rd section */}
            
            <Grid item xs={12} sm={4} md={6}>
                <img
                    src={imgDetail2}
                    alt=""
                    style={{
                        width: '100%',
                        borderRadius: 20,
                    }}
                />
            </Grid>
            <CustomGridItem item xs={12} sm={8} md={6} component="section">
                <Box
                    component="article"
                    sx={{
                        px: 4,
                    }}
                >
                    <Title text={'Real time Material prices'} textAlign={'start'} />
                    <CustomTypography>
                        Experience transparency like never before! Dive into the latest material
                        prices in real-time - because in construction, every cent counts.
                    </CustomTypography>
                    <Button
                        component={Link}
                        to={'/u_dailyprice'}
                        variant="contained"
                        sx={{
                            mt: 2,
                            mr: 2,
                            px: 4,
                            py: 1.5,
                            fontSize: '0.9rem',
                            textTransform: 'capitalize',
                            borderRadius: 20,
                        }}
                    >
                        View Prices
                    </Button>
                </Box>
            </CustomGridItem>

            {/* 2nd instance of the 3rd section */}
            <CustomGridItem item xs={12} sm={8} md={6} component="section">
                <Box
                    component="article"
                    sx={{
                        my: 5,
                        px: 4,
                    }}
                >
                    <Title text={'Estimate Your Construction Cost'} textAlign={'start'}/>
                    <CustomTypography>
                    Unlock the power of financial planning for your dream home. Use our cost calculator to get an instant estimate of your construction project. No surprises, just clarity.

                    </CustomTypography>
                    <Button
                        component={Link}
                        to={'/u_dailyprice'}
                        variant="contained"
                        sx={{
                            mt: 2,
                            mr: 2,
                            px: 4,
                            py: 1.5,
                            fontSize: '0.9rem',
                            textTransform: 'capitalize',
                            borderRadius: 20,
                        }}
                    >
                        Calculate cost
                    </Button>
                </Box>
            </CustomGridItem>
            
            <Grid item xs={12} sm={4} md={6}>
                <img
                    src={costCalc}
                    alt=""
                    style={{
                        width: '100%',
                        height: '481px',
                        borderRadius: 20,
                    }}
                />
            </Grid>
        </Grid>
    );
};

export default GetStarted;
