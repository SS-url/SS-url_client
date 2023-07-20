import { style } from '@vanilla-extract/css';

export const layout = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	height: '100%'
});

export const layoutContainer = style({
	width: '100%',
	height: '100%'
});
