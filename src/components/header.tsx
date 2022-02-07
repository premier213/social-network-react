import { AppBar, Avatar, Box, Button, IconButton, Toolbar, useTheme } from '@mui/material';
import { ReactElement } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { blueGrey, deepPurple } from '@mui/material/colors';

const Header = (): ReactElement => {
    const theme = useTheme();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                sx={{ bgcolor: theme.palette.mode === 'dark' ? blueGrey[900] : blueGrey[100] }}
                position='static'
                elevation={0}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
                            <SearchIcon sx={{ color: 'gray' }} />
                        </IconButton>
                    </Box>
                    <Button color='inherit'>
                        <Avatar sx={{ bgcolor: deepPurple[500] }}>AV</Avatar>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
