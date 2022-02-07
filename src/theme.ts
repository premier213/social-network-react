import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
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
        mode: 'dark',
    },
});

export default theme;
