import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import theme from './theme';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

ReactDOM.render(
    <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </CacheProvider>,
    document.querySelector('#root')
);
