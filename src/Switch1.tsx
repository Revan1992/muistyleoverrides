import React from 'react';
import './Switch1.scss';
import { Switch, createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    components: {
        MuiSwitch: {
            styleOverrides: {
                root: {
                    padding: '7px',
                    width: '64px'
                },
                track: {
                    borderRadius: '15px',
                    backgroundColor: 'var(--jll-ds-switch-off-background-color, var(--jll-ds-color-surface-base-subdued))',
                    border: '1px solid var(--jll-ds-switch-off-border-color, var(--jll-ds-color-stroke-base-default));',
                    boxShadow: 'inset 0 3.2492px 6.4985px rgb(0 0 0 / 7%)',
                    opacity: 1,
                    '&::before': {
                        position: 'absolute',
                        inset: '-16.33% -8.17%',
                        zIndex: '-1',
                        display: 'inline-block',
                        borderRadius: '48px',
                        boxShadow: 'rgb(255 255 255 / 28%) 0px 4px 12px inset',
                    },
                    '&::after': {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: '-1',
                        display: 'inline-block',
                        borderRadius: '48px',
                        boxShadow: 'rgb(255 255 255 / 28%) 0px 9.3473px 28.0419px inset',
                    },
                }
            }
        }
    }
});

const SwitchComp1 = () => {
    return (
        <ThemeProvider theme={theme}>
            <Switch disableRipple={true} />
        </ThemeProvider>
    )
}

export default SwitchComp1;