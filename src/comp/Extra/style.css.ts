import { style } from '@vanilla-extract/css';

export const layout = style({
	display: 'flex',
	height: '100vh',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center'
});

export const layoutContainer = style({
	textAlign: 'center'
});
