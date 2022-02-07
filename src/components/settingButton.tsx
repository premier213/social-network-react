import { IconButton, useTheme } from '@mui/material';
import { ReactElement } from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import { amber, grey } from '@mui/material/colors';
import { Setting } from '../types/global';

const SettingButton = ({ handleOpen }: Setting): ReactElement => {
    const theme = useTheme();

    return (
        <IconButton
            onClick={handleOpen}
            sx={{
                position: 'absolute',

                bgcolor: theme.palette.mode === 'dark' ? 'white' : grey[700],
                color: theme.palette.mode === 'light' ? 'white' : grey[700],
                right: 0,
                top: '50%',
                '&:hover': {
                    bgcolor: amber[500],
                },
            }}>
            <TuneIcon />
        </IconButton>
    );
};

export default SettingButton;
