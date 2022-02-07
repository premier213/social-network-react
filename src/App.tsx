import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid, PaletteMode } from '@mui/material';
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
import SettingButton from './components/settingButton';

// context api for darkmode theme
export const ColorModeContext = React.createContext({ lightMode: () => {}, darkMode: () => {} });

export default function App() {
    const [mode, setMode] = React.useState<PaletteMode>('dark');
    const [openPanel, setOpenPanel] = React.useState(false);

    // handle open/ close dark mode drawer
    function handleClosePanel() {
        setOpenPanel(false);
    }
    function handleOpenPanel() {
        setOpenPanel(true);
    }

    // mui support rtl mode
    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });

    // switch dark mode
    const colorMode = React.useMemo(
        () => ({
            lightMode: () => {
                setMode('light');
            },
            darkMode: () => {
                setMode('dark');
            },
        }),
        []
    );

    // MUI theme config
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
                        <Box dir='rtl'>
                            <SettingButton handleOpen={handleOpenPanel} />
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
                                <ThemePanel open={openPanel} close={handleClosePanel} />
                            </Grid>
                        </Box>
                    </ThemeProvider>
                </ColorModeContext.Provider>
            </CacheProvider>
        </RecoilRoot>
    );
}
