import { Box, Drawer, Grid, IconButton, styled } from '@mui/material';
import { ReactElement, useContext } from 'react';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { ColorModeContext } from '../App';
import { Panel } from '../types/global';
import Typography from '@mui/material/Typography';

const ThemePanel = ({ open, close }: Panel): ReactElement => {
    const colorMode = useContext(ColorModeContext);

    // style header of panel
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-between',
    }));

    return (
        <Drawer anchor='right' open={open} onClose={close}>
            <Box sx={{ width: '200px' }}>
                <DrawerHeader>
                    <div>تنظیمات</div>
                </DrawerHeader>
                <Typography m={2}>حالت</Typography>
                <Grid container direction='row' justifyContent='space-around'>
                    <Grid item>
                        <IconButton onClick={colorMode.darkMode} color='inherit'>
                            <Brightness4Icon />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={colorMode.lightMode} color='inherit'>
                            <Brightness7Icon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>
        </Drawer>
    );
};

export default ThemePanel;
