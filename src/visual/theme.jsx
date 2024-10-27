import {createTheme} from "@mui/material/styles";

export const themePalette = createTheme({
    palette: {
        primary: {
            light: '#003666',
            main: '#001a30',
            dark: '#001629',
            contrastText: '#fff',
        },
        secondary: {
            light: '#EE4452',
            main: '#f44336',
            dark: '#CD1323',
            contrastText: '#fff',
        },
        third: {
            light: '#C1C1C3',
            main: '#A8A9AC',
            dark: '#97989B',
            contrastText: '#000',
        },
        accent: {
            light: '#FFE033',
            main: '#FCD700',
            dark: '#E0BF00',
            contrastText: '#000',
        }
    },
});

export default themePalette;