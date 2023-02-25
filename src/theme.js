import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        type:'light',
        primary: {
            main: "#3974F7",
            light: "#F5F9FF"
        },
        secondary: {
            main:"#334C84",
        },
        tertiary: {
            main:"#39BEF7",
        },
        quaternary: {
            main:"#3E4558",
        },
        otherColor: {
            main: "#C3C4C8",
            light: "#FFFFFF",
        },
        whiteColor: {
            main: "#FFFFFF",
        },
        blackColor: {
            main: "#000000",
            light: "#3E4558"
        },
        greyColor: {
            dark:"#8F9FC0",
            light:"#F5F5F5"
        }
    },
    typography: {
        fontFamily: [
            '"DM Sans"', 
            '"Open Sans"',
            '"sans - serif"',
            'poppins'
        ].join(','),
        h1: {
            fontSize: '4.5rem',
            fontFamily: 'poppins',
            fontWeight:700,
        },
        h2: {
            fontSize: '3rem',
            fontFamily: 'poppins',
            fontWeight:700,
        },
        h3: {
            fontSize: '2.2rem',
            fontFamily: 'poppins',
            fontWeight:700,
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight:700
        },
        h5: {
            fontSize: '1.2rem',
            fontWeight: 700,
            color: "#3974F7"
        },
        h6: {
            fontSize: '1.1rem',
            fontWeight:700
        },
        body1: {
            fontSize: '1rem',
            fontFamily: 'DM Sans',
            fontWeight:400
        },
        body2: {
            fontSize:'0.8rem'
        },
        body3: {
            fontSize: '0.6rem',
            lineHeight: '1.2rem'
        },
        copyright: {
            fontSize:'0.8rem'
        },
    },
    transitions: {
        duration: {
            shortest: 150
        }
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
      },
})

