import { createTheme, PaletteOptions } from "@mui/material";

declare module "@mui/material/styles" {

    interface Palette {
        secondaryBg?: {
            header?: string;
        };
    }

    interface PaletteOptions {
        secondaryBg?: {
            header?: string;
        };
    }
}

export const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#ba8d69",
            dark: "#a8764d"
        },
        error: {
            main: "#FF2414"
        },
        text: {
            primary: "#535040",
            secondary: "#F1F0E2"
        },
        background: {
            default: "#F1F0E2",
            paper: "#E7E7E7"
        },
        secondaryBg: {
            header: "#535040"
        } 
    },
    components: {
        MuiTextField: {
            defaultProps: {
                variant: "standard",
            }
        },
    }
})