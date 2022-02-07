import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid, IconButton, PaletteMode } from '@mui/material';
import Header from './components/header';
import FormSection from './components/formSection';
import { RecoilRoot } from 'recoil';
import { CacheProvider } from '@emotion/react';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import CssBaseline from '@mui/material/CssBaseline';
import createCache from '@emotion/cache';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import BreadCrumb from './components/breadCrumb';
import ThemePanel from './components/themePanel';
import TuneIcon from '@mui/icons-material/Tune';
import { amber } from '@mui/material/colors';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function App() {
    const [mode, setMode] = React.useState<PaletteMode>('light');
    const [openPanel, setOpenPanel] = React.useState(false);
    function handleclosePanel() {
        setOpenPanel(false);
    }
    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        []
    );
    const theme = React.useMemo(
        () =>
            createTheme({
                direction: 'rtl',
                typography: {
                    fontFamily: [
                        'Yekan',
                        'Arial',
                        'sans-serif',
                        '"Apple Color Emoji"',
                        '"Segoe UI Emoji"',
                        '"Segoe UI Symbol"',
                    ].join(','),
                },
                palette: {
                    mode,
                },
            }),
        [mode]
    );

    return (
        <RecoilRoot>
            <CacheProvider value={cacheRtl}>
                <ColorModeContext.Provider value={colorMode}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <Box dir='rtl' sx={{ bgcolor: '#141922' }}>
                            <IconButton
                                onClick={() => setOpenPanel(true)}
                                sx={{
                                    position: 'absolute',
                                    right: 0,
                                    top: '50%',
                                    bgcolor: 'white',
                                    '&:hover': {
                                        bgcolor: amber[500],
                                    },
                                }}>
                                <TuneIcon />
                            </IconButton>
                            <Header />
                            <Grid
                                container
                                spacing={0}
                                gap={2}
                                direction='column'
                                alignItems='center'
                                justifyContent='center'
                                style={{ minHeight: '100vh' }}>
                                <BreadCrumb />
                                <FormSection />
                                <ThemePanel open={openPanel} close={handleclosePanel} />
                            </Grid>
                        </Box>
                    </ThemeProvider>
                </ColorModeContext.Provider>
            </CacheProvider>
        </RecoilRoot>
    );
}
