// import { desktopBreakpoint, lineHeightRelaxed, vars } from '$lib/styles/vars.css';

import { globalFontFace, globalStyle } from '@vanilla-extract/css';
import { desktopBreakpoint, lineHeightRelaxed, vars } from './vars.css';

const {
	font: {
		family: { fontFamilyBody, fontFamilyHeading }
	}
} = vars;

globalFontFace('HeadingFont', {
	src: 'local("Source Serif Pro")'
});

globalStyle('html, body', {
	vars: {
		[desktopBreakpoint]: '48rem',
		[lineHeightRelaxed]: '1.75'
	},
	fontFamily: fontFamilyBody
});

globalStyle('body', {
	margin: [0]
});

globalStyle('h1', {
	fontFamily: fontFamilyHeading
});

globalStyle('p', {
	fontFamily: fontFamilyBody
});
