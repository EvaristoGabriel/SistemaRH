import { createTheme } from '@mui/material';

const tema = createTheme({
    palette: {
        primary: {
            main: '#009688',
        },
        secondary: {
            main: '#F5F5F5',
        },
        text: {
            primary: '#212121',
            secondary: '#9E9E9E',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: '#FFF',
                    borderRadius: '0',
                    backgroundColor: '#F52273',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    paddingTop: '12px',
                    paddingBottom: '12px',
                    ":hover": {
                        backgroundColor: '#F52273',
                    }

                },
            },
        },
        MuiTextField: {
            defaultProps: {
                InputLabelProps: {
                    required: false,
                },
                required: true,
            },
        },
    },
});

export default tema;