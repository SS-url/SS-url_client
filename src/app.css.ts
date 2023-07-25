// import { desktopBreakpoint, lineHeightRelaxed, vars } from '$lib/styles/vars.css';

import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
	// fontFamily: fontFamilyBody
});

globalStyle('body', {
	margin: 0,
	padding: 0,
	boxSizing: 'border-box'
});
