import { createTheme } from '@vanilla-extract/css';

export const [_, themeVars] = createTheme({
	color: {
		primary: '#f00',
		secondary: '#f00',
		alternative: '#f00',
		light: '#f00',
		dark: '#f00'
	}
});

export const defaultTheme = createTheme(themeVars, {
	color: {
		primary: '#d11c5b', // rubine red
		secondary: '#fac600', // mikado yellow
		alternative: '#ea4b1d', // flame
		light: '#f6eed5', // eggshell
		dark: '#32373b' // onyx
	}
});

export const darkModeTheme = createTheme(themeVars, {
	color: {
		primary: '#f56a79', // ultra red
		secondary: '#1aa6b7', // pacific blue
		alternative: '#ff414d', // red salsa
		light: '#f6eed5', // eggshell
		dark: '#002a32' // gunmetal
	}
});
