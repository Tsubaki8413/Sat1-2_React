import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/maerial/styles';
import { amber, grey } from '@mui/material/colors';
import { CssBaseline, Button, useMediaQuery } from '@mui/material';

export default function MaterialMode(){
    const mode = useMediaQuery('(prefers-color-scheme: dark)') ?
        'dark' : 'light';
    const theme = createTheme({
        palette: {
            mode,
            ...(mode === 'light'
            ? {
                primary: amber,
              }
            : {
                primary: {
                    main: gray[500],
                    contrastText: '#fff',
                },
                background: {
                    default: gray[900],
                    paper: grey[900],
                },
              }),
        },
    });

    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Button variant="contained">
                Mode {mode}
            </Button>
        </ThemeProvider>
    );
};