import { Box, Breadcrumbs, Grid, Link, Typography } from '@mui/material';
import { ReactElement } from 'react';

const BreadCrumb = (): ReactElement => {
    return (
        <Grid container direction='column' justifyContent='center' sx={{ width: 1 / 2 }}>
            {/* title */}
            <Grid item xs={6}>
                <Box>
                    <Typography variant='h5'>حساب کاربری</Typography>
                </Box>
            </Grid>
            {/* bread crumb */}
            <Grid item xs={6}>
                <Breadcrumbs aria-label='breadcrumb' separator='.'>
                    <Link variant='body1' underline='hover' color='inherit' href='/'>
                        خانه
                    </Link>
                    <Link variant='body1' underline='hover' color='inherit' href='/'>
                        کاربر
                    </Link>
                    <Typography color='text.secondary'>تنظیمات کاربری</Typography>
                </Breadcrumbs>
            </Grid>
        </Grid>
    );
};

export default BreadCrumb;
