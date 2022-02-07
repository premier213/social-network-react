import { Box, Drawer, IconButton, useTheme } from '@mui/material';
import { Context, createContext, ReactElement, useContext } from 'react';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { ColorModeContext } from '../App';

export interface Panel {
    open: boolean;
    close: () => void;
}
const ThemePanel = ({ open, close }: Panel): ReactElement => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <Drawer anchor='right' open={open} onClose={close}>
            <Box sx={{ width: '200px' }}>
                <IconButton onClick={colorMode.toggleColorMode} color='inherit'>
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Box>
        </Drawer>
    );
};

export default ThemePanel;
