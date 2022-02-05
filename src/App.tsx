import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Breadcrumbs, Grid, TextField } from '@mui/material';
import Header from './components/header';
import FormSection from './components/formSection';

export default function App() {
    return (
        <Box dir='rtl' sx={{ bgcolor: '#141922' }}>
            <Header />
            <Grid
                container
                spacing={0}
                gap={2}
                direction='column'
                alignItems='center'
                justifyContent='center'
                style={{ minHeight: '100vh' }}>
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
                <FormSection />
            </Grid>
        </Box>
    );
}
