import { createMuiTheme, createTheme, Input, ThemeProvider } from '@mui/material';
import './InputComp1.scss';

declare module '@mui/material/styles' {
    interface Theme {
      status: {
        danger: string;
      };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
      status?: {
        danger?: string;
      };
    }
}

const theme = createTheme({
    components: {
        MuiInput: {
            styleOverrides: {
                underline: 'none',
                root: {
                    border: '1px solid var(--jll-ds-input-border, var(--jll-ds-color-stroke-base-default))',
                    width: '100%',
                    maxWidth: '100%',
                    borderRadius: '6px',
                    margin: 'var(--jll-ds-spacing-2) 0',
                    padding: '0px 12px',
                    '&::before' : {
                        borderBottom: 'none'
                    },
                    '&::after' : {
                        borderBottom: 'none'
                    },
                    '&:hover' : {
                        '&::before' : {
                            borderBottom: 'none !important'
                        },
                        '&::after' : {
                            borderBottom: 'none !important'
                        },
                    }
                },
                focused: {
                    outline: '3px solid var(--jll-ds-color-stroke-base-default)',
                },
            }
        }
    }
});

const InputComp1 = () => {
    return(
        <ThemeProvider theme={theme}>
            <Input
                type="text" 
                placeholder="Enter Text" 
            />
        </ThemeProvider>
    )
}

export default InputComp1;