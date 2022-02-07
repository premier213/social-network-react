import { Box, Breadcrumbs, Grid, Link, Typography } from '@mui/material';
import { ReactElement } from 'react';

const BreadCrumb = (): ReactElement => {
    return (
        <>
            {/* title */}
            <Grid container xs={6} direction='row'>
                <Grid item>
                    <Box>
                        <Typography variant='h5' sx={{ color: 'white' }}>
                            حساب کاربری
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            {/* bread crumb */}
            <Grid container xs={6} direction='row'>
                <Grid item>
                    <Breadcrumbs aria-label='breadcrumb' sx={{ color: 'white' }} separator='.'>
                        <Link variant='body1' underline='hover' color='inherit' href='/'>
                            خانه
                        </Link>
                        <Link variant='body1' underline='hover' color='inherit' href='/'>
                            کاربر
                        </Link>
                        <Typography sx={{ color: 'gray' }} color='text.secondary'>
                            تنظیمات کاربری
                        </Typography>
                    </Breadcrumbs>
                </Grid>
            </Grid>
        </>
    );
};

export default BreadCrumb;
