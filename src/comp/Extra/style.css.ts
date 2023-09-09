import { style } from '@vanilla-extract/css';

export const layout = style({
	display: 'flex',
	height: '100vh',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center'
});

export const layoutContainer = style({
	width: '100%',
	border: '1px solid red',
	textAlign: 'center'
});
