import { Box, Button, Grid, Typography } from '@mui/material';
import { ReactElement } from 'react';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import showIcon from '../utils/showIcon';
import { amber } from '@mui/material/colors';

export interface TypeOfSocial {
    [key: string]: string;
}
export interface Obj {
    social: TypeOfSocial[];
}

const ShowSection = ({ social }: Obj): ReactElement => {
    return (
        <Grid item>
            <Box mx={2} my={2} py={2} sx={{ bgcolor: '#303A44', width: '96%', borderRadius: 2 }}>
                {social?.map((item, index) => {
                    return (
                        <Grid container direction='row' key={index} mx={2} sx={{ fontSize: 12 }}>
                            <Box sx={{ color: 'white', marginTop: '-2px' }} mr={1}>
                                {showIcon(item.type)}
                            </Box>

                            <Box sx={{ color: 'white', width: '10%' }}>{item.type}</Box>

                            <Box sx={{ color: 'white', width: '20%' }}>
                                <Typography mx={1} variant='caption' sx={{ color: 'gray' }}>
                                    آی دی:
                                </Typography>{' '}
                                {item.id}
                            </Box>

                            <Box sx={{ color: 'white', width: '40%' }}>
                                <Typography mx={1} variant='caption' sx={{ color: 'gray' }}>
                                    لینک:
                                </Typography>
                                <Typography mx={1} variant='caption' sx={{ color: amber[600] }}>
                                    {item.link}
                                </Typography>
                            </Box>

                            <Grid xs={1}>
                                <Box>
                                    <Button
                                        sx={{ color: amber[600] }}
                                        variant='text'
                                        size='small'
                                        startIcon={<ModeEditOutlineOutlinedIcon />}>
                                        <Typography variant='caption'>ویرایش</Typography>
                                    </Button>
                                </Box>
                            </Grid>
                            <Grid xs={1}>
                                <Box ml={2}>
                                    <Button
                                        color='error'
                                        variant='text'
                                        size='small'
                                        startIcon={<DeleteOutlinedIcon />}>
                                        <Typography variant='caption'>حذف</Typography>
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    );
                })}
            </Box>
        </Grid>
    );
};

export default ShowSection;
